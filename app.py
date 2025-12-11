from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import requests
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
import threading
import time

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
                # Parse date
                pub_time = None
                if pubDate is not None and pubDate.text:
                    try:
                        pub_time = datetime.strptime(pubDate.text, '%a, %d %b %Y %H:%M:%S %Z')
                    except:
                        pub_time = datetime.now()
                
                # Only include if within 48 hours
                if pub_time and (datetime.now() - pub_time) < timedelta(hours=48):
                    articles.append({
                        'title': title.text.split(' - ')[0] if title.text else '',  # Remove source suffix
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

# API Routes
@app.route('/api/news')
def get_news():
    from flask import request
    lang = request.args.get('lang', 'en')
    articles = news_cache.get(lang, news_cache.get('en', []))
    return jsonify({
        'articles': articles,
        'count': len(articles),
        'lastFetch': news_cache.get('last_fetch')
    })

@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'cache': news_cache.get('last_fetch')})

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

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    # Start background refresh thread
    thread = threading.Thread(target=refresh_cache, daemon=True)
    thread.start()
    
    # Initial fetch (blocking, so we have data on first request)
    print("📰 Initial news fetch...")
    news_cache['en'] = fetch_news_for_lang('en')
    news_cache['hi'] = fetch_news_for_lang('hi')
    news_cache['last_fetch'] = datetime.now().isoformat()
    print(f"✅ Ready with {len(news_cache['en'])} EN, {len(news_cache['hi'])} HI articles")
    
    print("🚀 Server running on http://localhost:3000")
    app.run(port=3000, host='0.0.0.0')
