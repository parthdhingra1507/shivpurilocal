from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
import requests
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
import threading
import time
import os
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration
from db import save_article, get_recent_articles, get_article_by_id, upsert_user, log_analytics_event, get_all_articles, update_article, delete_article, execute_raw_sql, get_all_transport, get_all_places, save_transport, delete_transport, save_place, delete_place, get_all_users, delete_user, get_analytics_stats, get_db_connection

# Initialize Sentry
sentry_dsn = os.environ.get('SENTRY_DSN')
if sentry_dsn:
    sentry_sdk.init(
        dsn=sentry_dsn,
        integrations=[FlaskIntegration()],
        # Set traces_sample_rate to 1.0 to capture 100%
        # of transactions for performance monitoring.
        traces_sample_rate=1.0,
        # Set profiles_sample_rate to 1.0 to profile 100%
        # of transactions.
        profiles_sample_rate=1.0,
    )

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# In-memory news cache
news_cache = {
    'en': [],
    'hi': [],
    'last_fetch': None
}

# RSS Feeds
FEEDS = {
    'en': [
        'https://news.google.com/rss/search?q=Shivpuri+OR+Gwalior+OR+%22Madhya+Pradesh%22&hl=en-IN&gl=IN&ceid=IN:en',
        'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN:en'  # India news
    ],
    'hi': [
        'https://news.google.com/rss/search?q=%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%AA%E0%A5%81%E0%A4%B0%E0%A5%80+OR+%E0%A4%97%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%B0+OR+%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B6&hl=hi&gl=IN&ceid=IN:hi',
        'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtaHBHZ0pKVGlnQVAB?hl=hi&gl=IN&ceid=IN:hi'  # India Hindi
    ]
}

import email.utils

def parse_rss(xml_text):
    """Parse RSS XML and return articles"""
    articles = []
    try:
        root = ET.fromstring(xml_text)
        for item in root.findall('.//item'):
            title = item.find('title')
            link = item.find('link')
            pubDate = item.find('pubDate')
            source = item.find('source')
            
            if title is not None and link is not None:
                # Parse date robustly using email.utils
                pub_time = None
                if pubDate is not None and pubDate.text:
                    try:
                        # Returns a timezone-aware datetime
                        pub_time = email.utils.parsedate_to_datetime(pubDate.text)
                    except:
                        pub_time = datetime.now()
                
                # Filter old news (older than 48 hours)
                # Ensure current time is also timezone aware for comparison if needed
                now = datetime.now(pub_time.tzinfo) if pub_time and pub_time.tzinfo else datetime.now()
                
                if pub_time and (now - pub_time) < timedelta(hours=48):
                    articles.append({
                        'title': title.text.split(' - ')[0] if title.text else '',
                        'url': link.text,
                        'publishedAt': pub_time.isoformat() if pub_time else None,
                        'source': source.text if source is not None else 'News'
                    })
    except Exception as e:
        print(f"RSS Parse Error: {e}")
    return articles

def fetch_news_for_lang(lang):
    """Fetch news for a language"""
    all_articles = []
    for feed_url in FEEDS.get(lang, []):
        try:
            response = requests.get(feed_url, timeout=10, headers={
                'User-Agent': 'Mozilla/5.0 (compatible; ShivpuriLocal/1.0)'
            })
            if response.status_code == 200:
                articles = parse_rss(response.text)
                all_articles.extend(articles)
        except Exception as e:
            print(f"Feed fetch error: {e}")
    
    # Remove duplicates by title
    seen = set()
    unique = []
    for a in all_articles:
        key = a['title'][:50] if a['title'] else ''
        if key and key not in seen:
            seen.add(key)
            unique.append(a)
    
    # Sort by date
    unique.sort(key=lambda x: x.get('publishedAt', ''), reverse=True)
    return unique[:30]  # Top 30

def refresh_cache():
    """Background job to refresh news cache"""
    global news_cache
    while True:
        print(f"🔄 Refreshing news cache at {datetime.now()}")
        try:
            news_cache['en'] = fetch_news_for_lang('en')
            news_cache['hi'] = fetch_news_for_lang('hi')
            news_cache['last_fetch'] = datetime.now().isoformat()
            print(f"✅ Cache refreshed: {len(news_cache['en'])} EN, {len(news_cache['hi'])} HI articles")
        except Exception as e:
            print(f"❌ Cache refresh failed: {e}")
        time.sleep(600)  # Refresh every 10 minutes

def ensure_news_loaded(lang):
    """Ensure news is loaded for language (lazy fetch)"""
    if not news_cache.get(lang):
        print(f"⚠️ Cache empty for {lang}, fetching synchronously...")
        news_cache[lang] = fetch_news_for_lang(lang)
        news_cache['last_fetch'] = datetime.now().isoformat()

# Start background refresher on module load (runs in Gunicorn)
# We use a simple daemon thread. In Gunicorn with multiple workers, 
# each worker will have its own cache and thread. This is acceptable for this scale.
if not threading.main_thread().name == 'MainThread': 
    # Just a check to avoid running during some imports if needed, 
    # generally fine to just run:
    pass

# Always start the background thread
bg_thread = threading.Thread(target=refresh_cache, daemon=True)
bg_thread.start()

# API Routes
@app.route('/api/news')
def get_news():
    lang = request.args.get('lang', 'en')
    
    # Lazy load if empty (fixes "No news" on first load)
    ensure_news_loaded(lang)
    
    articles = news_cache.get(lang, [])
    return jsonify({
        'articles': articles,
        'count': len(articles),
        'lastFetch': news_cache.get('last_fetch')
    })

@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'cache': news_cache.get('last_fetch')})

@app.route('/api/user/sync', methods=['POST'])
def sync_user():
    data = request.json
    if not data or not data.get('uid'):
        return jsonify({'error': 'Missing UID'}), 400
    
    success = upsert_user(data)
    
    # Check DB type for debugging
    conn, db_type = get_db_connection()
    conn.close()
    
    if success:
        return jsonify({'status': 'synced', 'db_type': db_type})
    else:
        return jsonify({'error': 'Failed to sync', 'db_type': db_type}), 500

@app.route('/api/analytics/log', methods=['POST'])
def log_event():
    data = request.json
    if not data or not data.get('eventType'):
        return jsonify({'error': 'Missing event type'}), 400
    
    success = log_analytics_event(data)
    if success:
        return jsonify({'status': 'logged'})
    else:
        return jsonify({'error': 'Failed to log'}), 500

# Admin API Routes
@app.route('/api/admin/articles', methods=['GET', 'POST'])
def admin_articles():
    # Simple auth check
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025': # Hardcoded for now matching admin.html
        return jsonify({'error': 'Unauthorized'}), 401
        
    if request.method == 'GET':
        page = int(request.args.get('page', 1))
        limit = int(request.args.get('limit', 50))
        result = get_all_articles(page, limit)
        return jsonify(result)
        
    elif request.method == 'POST':
        data = request.json
        # Add basic validation or defaults
        if not data.get('url'):
             # Auto-generate URL from title if missing (simple slug)
             import re
             slug = re.sub(r'[^a-zA-Z0-9]+', '-', data.get('title_en', '').lower()).strip('-')
             data['url'] = f"https://shivpurilocal.in/news/{slug}-{int(time.time())}"
             
        save_article(data)
        return jsonify({'status': 'created'})

@app.route('/api/admin/articles/<int:article_id>', methods=['PUT', 'DELETE'])
def admin_article_detail(article_id):
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401

    if request.method == 'PUT':
        data = request.json
        success = update_article(article_id, data)
        return jsonify({'status': 'updated' if success else 'failed'})
        
    elif request.method == 'DELETE':
        success = delete_article(article_id)
        return jsonify({'status': 'deleted' if success else 'failed'})

@app.route('/api/transport')
def get_transport():
    data = get_all_transport()
    return jsonify(data)

@app.route('/api/places')
def get_places():
    data = get_all_places()
    return jsonify(data)

@app.route('/api/admin/transport', methods=['GET', 'POST'])
def admin_transport():
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
    
    if request.method == 'GET':
        return jsonify(get_all_transport())
    
    data = request.json
    success = save_transport(data)
    return jsonify({'status': 'saved' if success else 'failed'})

@app.route('/api/admin/transport/<int:id>', methods=['DELETE'])
def delete_transport_route(id):
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
    
    success = delete_transport(id)
    return jsonify({'status': 'deleted' if success else 'failed'})

@app.route('/api/admin/places', methods=['GET', 'POST'])
def admin_places():
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
        
    if request.method == 'GET':
        return jsonify(get_all_places())
    
    data = request.json
    success = save_place(data)
    return jsonify({'status': 'saved' if success else 'failed'})

@app.route('/api/admin/places/<int:id>', methods=['DELETE'])
def delete_place_route(id):
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
        
    success = delete_place(id)
    return jsonify({'status': 'deleted' if success else 'failed'})

@app.route('/api/admin/users', methods=['GET'])
def admin_users():
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(get_all_users())

@app.route('/api/admin/users/<string:id>', methods=['DELETE'])
def delete_user_route(id):
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
    success = delete_user(id)
    return jsonify({'status': 'deleted' if success else 'failed'})

@app.route('/api/admin/analytics', methods=['GET'])
def admin_stats():
    auth_header = request.headers.get('X-Admin-Key')
    if auth_header != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(get_analytics_stats())

# Static routes
@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/transport')
def transport():
    return send_from_directory('.', 'transport.html')

@app.route('/places')
def places():
    return send_from_directory('.', 'places.html')

@app.route('/food')
def food():
    return send_from_directory('.', 'food.html')

@app.route('/news')
def news():
    return send_from_directory('.', 'news.html')

@app.route('/forum')
def forum():
    return send_from_directory('.', 'forum.html')

@app.route('/panel')
def panel():
    return send_from_directory('.', 'panel.html')

@app.route('/admin')
def admin_alias():
     return send_from_directory('.', 'panel.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    print("🚀 Server running on http://localhost:3000")
    app.run(port=3000, host='0.0.0.0')
