import sqlite3
import datetime
import os

# Use absolute path for DB to avoid CWD issues
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'news.db')

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    # Folder is guaranteed by BASE_DIR existence
    pass
    
    conn = get_db_connection()
    c = conn.cursor()
    
    # Create articles table
    c.execute('''
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            content TEXT,
            source TEXT,
            url TEXT UNIQUE,
            image_url TEXT,
            published_at DATETIME,
            priority INTEGER DEFAULT 3,
            language TEXT DEFAULT 'en',
            category TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Database initialized")

def save_article(article):
    conn = get_db_connection()
    c = conn.cursor()
    try:
        c.execute('''
            INSERT OR IGNORE INTO articles 
            (title, description, content, source, url, image_url, published_at, priority, language, category)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            article.get('title'),
            article.get('description'),
            article.get('content'),
            article.get('source'),
            article.get('url'),
            article.get('image'),
            article.get('publishedAt'),
            article.get('priority', 3),
            article.get('language', 'en'),
            article.get('category')
        ))
        conn.commit()
        return c.lastrowid
    except Exception as e:
        print(f"Error saving article: {e}")
        return None
    finally:
        conn.close()

def get_recent_articles(limit=50, lang='en', category=None):
    conn = get_db_connection()
    c = conn.cursor()
    
    # Calculate 24-hour cutoff
    cutoff_time = datetime.datetime.now() - datetime.timedelta(hours=24)
    
    query = "SELECT * FROM articles WHERE language = ? AND published_at >= ?"
    params = [lang, cutoff_time]
    
    if category:
        query += " AND category = ?"
        params.append(category)
        
    # Sort by priority (1 is highest), then by published_at (newest first)
    query += " ORDER BY priority ASC, published_at DESC LIMIT ?"
    params.append(limit)
    
    c.execute(query, params)
    articles = [dict(row) for row in c.fetchall()]
    conn.close()
    return articles

def get_article_by_id(article_id):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM articles WHERE id = ?", (article_id,))
    row = c.fetchone()
    conn.close()
    return dict(row) if row else None
