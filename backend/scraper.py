import requests
from bs4 import BeautifulSoup
import feedparser
import time
from datetime import datetime, timedelta
import threading
import schedule
from db import save_article, init_db

# Feed Configuration
FEEDS = {
    'en': [
        {'url': 'https://news.google.com/rss/search?q=Shivpuri+Madhya+Pradesh&hl=en-IN&gl=IN&ceid=IN:en', 'name': 'Shivpuri', 'priority': 1},
        {'url': 'https://news.google.com/rss/search?q=Gwalior+News&hl=en-IN&gl=IN&ceid=IN:en', 'name': 'Gwalior', 'priority': 2},
        {'url': 'https://news.google.com/rss/search?q=Madhya+Pradesh+News&hl=en-IN&gl=IN&ceid=IN:en', 'name': 'MP', 'priority': 3}
    ],
    'hi': [
        {'url': 'https://news.google.com/rss/search?q=%E0%A4%B6%E0%A4%BF%E0%A4%B5%E0%A4%AA%E0%A5%81%E0%A4%B0%E0%A5%80&hl=hi&gl=IN&ceid=IN:hi', 'name': 'शिवपुरी', 'priority': 1},
        {'url': 'https://news.google.com/rss/search?q=%E0%A4%97%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%AF%E0%A4%B0&hl=hi&gl=IN&ceid=IN:hi', 'name': 'ग्वालियर', 'priority': 2},
        {'url': 'https://news.google.com/rss/search?q=%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B6&hl=hi&gl=IN&ceid=IN:hi', 'name': 'मध्य प्रदेश', 'priority': 3}
    ]
}

CACHE_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
}

def scrape_full_content(url):
    try:
        # GNews/Google RSS often redirects. Validating real URL
        response = requests.get(url, headers=CACHE_HEADERS, timeout=5)
        final_url = response.url
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Heuristic to find main content: look for <article> or largest text block
        article_text = ""
        image_url = ""
        
        # Try finding standard article tag
        article_body = soup.find('article')
        if not article_body:
            # Fallback: Find largest divs with text
            text_blocks = []
            for tag in soup.find_all(['div', 'p']):
                text = tag.get_text(strip=True)
                if len(text) > 100:
                    text_blocks.append((len(text), text))
            if text_blocks:
                text_blocks.sort(key=lambda x: x[0], reverse=True)
                article_text = text_blocks[0][1] # Get largest block
        else:
            article_text = article_body.get_text(strip=True)
            
        # Try finding Open Graph image
        og_image = soup.find('meta', property='og:image')
        if og_image:
            image_url = og_image['content']
            
        return article_text, image_url, final_url
    except Exception as e:
        print(f"Scraping failed for {url}: {e}")
        return None, None, url

def fetch_feed_data():
    print(f"🔄 Fetching news at {datetime.now()}")
    
    for lang in ['en', 'hi']:
        for feed_config in FEEDS[lang]:
            try:
                feed = feedparser.parse(feed_config['url'])
                for entry in feed.entries:
                    # Check if recent enough (24h)
                    try:
                        pub_date = datetime(*entry.published_parsed[:6])
                        if (datetime.now() - pub_date) > timedelta(hours=24):
                            continue
                    except:
                        pub_date = datetime.now()

                    # Basic data needed even if scraping fails
                    article_data = {
                        'title': entry.title,
                        'description': entry.summary if 'summary' in entry else '',
                        'source': feed_config['name'],
                        'publishedAt': pub_date,
                        'priority': feed_config['priority'],
                        'language': lang,
                        'url': entry.link
                    }
                    
                    # SCRAPE FULL CONTENT
                    content, image, final_url = scrape_full_content(entry.link)
                    
                    if content:
                        article_data['content'] = content
                    if image:
                        article_data['image'] = image
                    article_data['url'] = final_url
                    
                    save_article(article_data)
                    
            except Exception as e:
                print(f"Feed error {feed_config['url']}: {e}")
    
    print("✅ Fetch complete")

def start_scheduler():
    init_db()
    fetch_feed_data() # Initial run
    schedule.every(30).minutes.do(fetch_feed_data)
    
    while True:
        schedule.run_pending()
        time.sleep(1)

def run_background_scraper():
    t = threading.Thread(target=start_scheduler)
    t.daemon = True
    t.start()
