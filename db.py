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
    # Create articles table (Dropping old one for schema update)
    c.execute('DROP TABLE IF EXISTS articles')
    c.execute('''
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title_en TEXT,
            title_hi TEXT,
            description_en TEXT,
            description_hi TEXT,
            content TEXT,
            source TEXT,
            url TEXT UNIQUE,
            image_url TEXT,
            published_at DATETIME,
            priority INTEGER DEFAULT 3,
            category TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Create users table
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT,
            display_name TEXT,
            role TEXT DEFAULT 'user',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_active_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Create analytics_events table
    c.execute('''
        CREATE TABLE IF NOT EXISTS analytics_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT,
            event_type TEXT NOT NULL,
            metadata TEXT,
            session_id TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Database initialized (New Schema)")

def save_article(article):
    conn = get_db_connection()
    c = conn.cursor()
    try:
        c.execute('''
            INSERT OR IGNORE INTO articles 
            (title_en, title_hi, description_en, description_hi, content, source, url, image_url, published_at, priority, category)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            article.get('title_en'),
            article.get('title_hi'),
            article.get('description_en'),
            article.get('description_hi'),
            article.get('content'),
            article.get('source'),
            article.get('url'),
            article.get('image'),
            article.get('publishedAt'),
            article.get('priority', 3),
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
    
    # Calculate 12-hour strict cutoff
    # cutoff_time = datetime.datetime.now() - datetime.timedelta(hours=12)
    # Using 24h for now to ensure we have content to test, but code supports 12.
    # User asked for "no news older than 12 hour".
    cutoff_time = datetime.datetime.now() - datetime.timedelta(hours=12)
    
    query = "SELECT * FROM articles WHERE published_at >= ?"
    params = [cutoff_time]
    
    if category:
        query += " AND category = ?"
        params.append(category)
        
    query += " ORDER BY priority ASC, published_at DESC LIMIT ?"
    params.append(limit)
    
    c.execute(query, params)
    rows = c.fetchall()
    conn.close()
    
    # Map to frontend expected format
    articles = []
    for row in rows:
        r = dict(row)
        # Dynamic mapping based on requested language
        if lang == 'hi':
            r['title'] = r.get('title_hi') or r.get('title_en') # Fallback
            r['description'] = r.get('description_hi') or r.get('description_en')
        else:
            r['title'] = r.get('title_en') or r.get('title_hi')
            r['description'] = r.get('description_en') or r.get('description_hi')
        articles.append(r)
        
    return articles

def get_article_by_id(article_id):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT * FROM articles WHERE id = ?", (article_id,))
    row = c.fetchone()
    conn.close()
    return dict(row) if row else None

def upsert_user(user_data):
    conn = get_db_connection()
    c = conn.cursor()
    try:
        c.execute('''
            INSERT INTO users (id, email, display_name, last_active_at)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(id) DO UPDATE SET
                display_name = excluded.display_name,
                email = excluded.email,
                last_active_at = CURRENT_TIMESTAMP
        ''', (
            user_data.get('uid'),
            user_data.get('email'),
            user_data.get('displayName')
        ))
        conn.commit()
        return True
    except Exception as e:
        print(f"Error upserting user: {e}")
        return False
    finally:
        conn.close()

def log_analytics_event(event_data):
    conn = get_db_connection()
    c = conn.cursor()
    try:
        c.execute('''
            INSERT INTO analytics_events (user_id, event_type, metadata, session_id)
            VALUES (?, ?, ?, ?)
        ''', (
            event_data.get('userId'),
            event_data.get('eventType'),
            event_data.get('metadata'),
            event_data.get('sessionId')
        ))
        conn.commit()
        return c.lastrowid
    except Exception as e:
        print(f"Error logging event: {e}")
        return None
    finally:
        conn.close()
