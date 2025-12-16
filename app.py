from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import requests
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
import threading
import time
import os

# Load .env file for local development
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass  # dotenv not installed, use system env vars

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Gemini AI Configuration
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY', '')
GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

def generate_ai_summary(title, source, lang='en'):
    """Generate a brief news summary using Gemini AI"""
    if not GEMINI_API_KEY:
        return ''  # No API key, skip AI summaries
    
    try:
        if lang == 'hi':
            # Pure Hindi prompt - no English mixing
            prompt = f"""आप एक समाचार लेखक हैं। नीचे दी गई समाचार शीर्षक को पढ़कर एक संक्षिप्त विवरण लिखें।

नियम:
- केवल शुद्ध हिंदी में लिखें (कोई अंग्रेजी शब्द नहीं)
- 2-3 वाक्य में लिखें
- केवल विवरण दें, कोई अतिरिक्त टिप्पणी नहीं

शीर्षक: {title}
स्रोत: {source}

विवरण:"""
        else:
            # Pure English prompt - clear and factual
            prompt = f"""You are a news writer. Read the headline below and write a brief description.

Rules:
- Write in simple, clear English only
- Write 2-3 sentences maximum
- Be factual and informative
- Only provide the description, no extra commentary

Headline: {title}
Source: {source}

Description:"""
        
        response = requests.post(
            f"{GEMINI_API_URL}?key={GEMINI_API_KEY}",
            json={
                "contents": [{"parts": [{"text": prompt}]}],
                "generationConfig": {
                    "temperature": 0.2,  # Lower temperature for more consistent output
                    "maxOutputTokens": 100
                }
            },
            timeout=15
        )
        
        if response.status_code == 200:
            data = response.json()
            summary = data.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', '')
            # Clean up the summary
            summary = summary.strip()
            # Remove any "Description:" prefix if AI included it
            if summary.lower().startswith('description:'):
                summary = summary[12:].strip()
            if summary.startswith('विवरण:'):
                summary = summary[7:].strip()
            return summary[:200]  # Limit to 200 chars
        else:
            print(f"AI API error: {response.status_code}")
    except Exception as e:
        print(f"AI Summary error: {e}")
    
    return ''

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

import re

def strip_html_tags(html_text):
    """Remove HTML tags and clean up text"""
    if not html_text:
        return ''
    # Remove HTML tags
    clean = re.sub(r'<[^>]+>', '', html_text)
    # Decode HTML entities
    clean = clean.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
    clean = clean.replace('&quot;', '"').replace('&#39;', "'")
    # Clean up whitespace
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def parse_rss(xml_text):
    """Parse RSS XML and return articles with descriptions"""
    articles = []
    try:
        root = ET.fromstring(xml_text)
        for item in root.findall('.//item'):
            title = item.find('title')
            link = item.find('link')
            pubDate = item.find('pubDate')
            source = item.find('source')
            description = item.find('description')
            
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
                    # Extract and clean description
                    title_text = title.text.split(' - ')[0] if title.text else ''
                    desc_text = ''
                    
                    if description is not None and description.text:
                        raw_desc = strip_html_tags(description.text)
                        
                        # Check if description is meaningful (not just title + source repeated)
                        # Remove the source name from the end for comparison
                        source_name = source.text if source is not None else ''
                        desc_without_source = raw_desc.replace(source_name, '').strip()
                        
                        # Only use description if it's significantly different from title
                        # (more than just minor variations)
                        if desc_without_source.lower() != title_text.lower() and len(desc_without_source) > len(title_text) + 20:
                            desc_text = raw_desc
                            # Limit description length to 200 characters
                            if len(desc_text) > 200:
                                desc_text = desc_text[:197] + '...'
                    
                    articles.append({
                        'title': title_text,
                        'description': desc_text,
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
    top_articles = unique[:30]  # Top 30
    
    # Generate AI summaries for ALL articles without good descriptions
    if GEMINI_API_KEY:
        print(f"🤖 Generating AI summaries for {lang} articles...")
        ai_count = 0
        for article in top_articles:
            # Generate summary if no description OR if description looks like just headline+source
            current_desc = article.get('description', '')
            needs_summary = (
                not current_desc or 
                len(current_desc) < 50 or  # Too short
                article['title'][:30].lower() in current_desc.lower()  # Just headline repeated
            )
            
            if needs_summary:
                summary = generate_ai_summary(article['title'], article['source'], lang)
                if summary and len(summary) > 30:
                    article['description'] = summary
                    ai_count += 1
                time.sleep(0.3)  # Small delay between API calls
        print(f"✅ Generated {ai_count} AI summaries for {lang}")
    
    return top_articles

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
    from flask import request
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
    print("🚀 Server running on http://localhost:3000")
    app.run(port=3000, host='0.0.0.0')
