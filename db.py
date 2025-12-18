import sqlite3
import datetime
import os
from urllib.parse import urlparse

try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
except ImportError:
    psycopg2 = None
    RealDictCursor = None

# Use absolute path for DB to avoid CWD issues (Local SQLite)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'news.db')

def get_db_connection():
    db_url = os.environ.get('DATABASE_URL')
    
    if db_url:
        # PostgreSQL (Render)
        conn = psycopg2.connect(db_url, sslmode='require')
        return conn, 'postgres'
    else:
        # SQLite (Local)
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        return conn, 'sqlite'

def execute_query(conn, db_type, query, params=(), commit=False, fetch=None):
    """
    Helper to execute queries with syntax abstraction.
    MySQL/Postgres use %s, SQLite uses ?
    """
    if db_type == 'postgres':
        query = query.replace('?', '%s')
    
    # Postgres needs RealDictCursor for dict-like rows
    if db_type == 'postgres':
        cur = conn.cursor(cursor_factory=RealDictCursor)
    else:
        cur = conn.cursor()
        
    try:
        cur.execute(query, params)
        
        if commit:
            conn.commit()
            if db_type == 'postgres' and 'INSERT' in query.upper() and 'RETURNING' in query.upper():
                 return cur.fetchone()['id']
            # For SQLite lastrowid works
            return cur.lastrowid if db_type == 'sqlite' and 'INSERT' in query.upper() else True

        if fetch == 'one':
            return cur.fetchone()
        if fetch == 'all':
            return cur.fetchall()
            
    except Exception as e:
        print(f"DB Error: {e} | Query: {query}")
        if commit:
            conn.rollback()
        raise e
    finally:
        cur.close()

def init_db():
    conn, db_type = get_db_connection()
    
    # Schema definitions compatible with both (mostly)
    # Postgres uses SERIAL for auto-inc, SQLite uses INTEGER PRIMARY KEY AUTOINCREMENT
    
    id_type = "SERIAL PRIMARY KEY" if db_type == 'postgres' else "INTEGER PRIMARY KEY AUTOINCREMENT"
    
    try:
        # Create articles table
        execute_query(conn, db_type, 'DROP TABLE IF EXISTS articles', commit=True)
        
        create_articles = f'''
            CREATE TABLE IF NOT EXISTS articles (
                id {id_type},
                title_en TEXT,
                title_hi TEXT,
                description_en TEXT,
                description_hi TEXT,
                content TEXT,
                source TEXT,
                url TEXT UNIQUE,
                image_url TEXT,
                published_at TIMESTAMP,
                priority INTEGER DEFAULT 3,
                category TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        '''
        execute_query(conn, db_type, create_articles, commit=True)

        # Create users table
        create_users = f'''
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                email TEXT,
                display_name TEXT,
                role TEXT DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_active_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        '''
        execute_query(conn, db_type, create_users, commit=True)

        # Create analytics_events table
        create_events = f'''
            CREATE TABLE IF NOT EXISTS analytics_events (
                id {id_type},
                user_id TEXT,
                event_type TEXT NOT NULL,
                metadata TEXT,
                session_id TEXT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(user_id) REFERENCES users(id)
            )
        '''
        execute_query(conn, db_type, create_events, commit=True)
        
        # Create transport table
        create_transport = f'''
            CREATE TABLE IF NOT EXISTS transport (
                id {id_type},
                operator_name TEXT,
                route_from TEXT,
                route_to TEXT,
                via TEXT,
                distance_km INTEGER,
                departure_time BIGINT, -- Storing as timestamp (ms) for compatibility
                arrival_time TEXT,
                days_of_operation TEXT,
                bus_type TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        '''
        execute_query(conn, db_type, create_transport, commit=True)

        # Create places table
        create_places = f'''
            CREATE TABLE IF NOT EXISTS places (
                id {id_type},
                name_en TEXT,
                name_hi TEXT,
                category TEXT,
                category_hi TEXT,
                area TEXT,
                area_hi TEXT,
                description_en TEXT,
                description_hi TEXT,
                tags TEXT, -- JSON or comma separated
                image_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        '''
        execute_query(conn, db_type, create_places, commit=True)
        
        print(f"✅ Database initialized ({db_type} mode)")
        
    except Exception as e:
        print(f"Init DB Error: {e}")
    finally:
        conn.close()

def save_article(article):
    conn, db_type = get_db_connection()
    try:
        # Note: Postgres INSERT IGNORE equivalent is ON CONFLICT DO NOTHING
        # SQLite uses INSERT OR IGNORE
        if db_type == 'postgres':
            query = '''
                INSERT INTO articles 
                (title_en, title_hi, description_en, description_hi, content, source, url, image_url, published_at, priority, category)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT (url) DO NOTHING
            '''
        else:
            query = '''
                INSERT OR IGNORE INTO articles 
                (title_en, title_hi, description_en, description_hi, content, source, url, image_url, published_at, priority, category)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            '''
            
        params = (
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
        )
        execute_query(conn, db_type, query, params, commit=True)
        
    except Exception as e:
        print(f"Error saving article: {e}")
    finally:
        conn.close()

def get_recent_articles(limit=50, lang='en', category=None):
    conn, db_type = get_db_connection()
    try:
        cutoff_time = datetime.datetime.now() - datetime.timedelta(hours=12)
        
        query = "SELECT * FROM articles WHERE published_at >= ?"
        params = [cutoff_time]
        
        if category:
            query += " AND category = ?"
            params.append(category)
            
        query += " ORDER BY priority ASC, published_at DESC LIMIT ?"
        params.append(limit)
        
        rows = execute_query(conn, db_type, query, params, fetch='all')
        
        # Map to frontend expected format
        articles = []
        for row in rows:
            # Postgres RealDictCursor returns dict, SQLite Row returns dict-like
            r = dict(row)
            if lang == 'hi':
                r['title'] = r.get('title_hi') or r.get('title_en') 
                r['description'] = r.get('description_hi') or r.get('description_en')
            else:
                r['title'] = r.get('title_en') or r.get('title_hi')
                r['description'] = r.get('description_en') or r.get('description_hi')
            articles.append(r)
            
        return articles
    finally:
        conn.close()

def get_article_by_id(article_id):
    conn, db_type = get_db_connection()
    try:
        row = execute_query(conn, db_type, "SELECT * FROM articles WHERE id = ?", (article_id,), fetch='one')
        return dict(row) if row else None
    finally:
        conn.close()

def upsert_user(user_data):
    conn, db_type = get_db_connection()
    try:
        # SQLite: ON CONFLICT(id) DO UPDATE...
        # Postgres: ON CONFLICT (id) DO UPDATE... syntax is same
        
        query = '''
            INSERT INTO users (id, email, display_name, last_active_at)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(id) DO UPDATE SET
                display_name = excluded.display_name,
                email = excluded.email,
                last_active_at = CURRENT_TIMESTAMP
        '''
        execute_query(conn, db_type, query, (
            user_data.get('uid'),
            user_data.get('email'),
            user_data.get('displayName')
        ), commit=True)
        return True
    except Exception as e:
        print(f"Error upserting user: {e}")
        return False
    finally:
        conn.close()

def log_analytics_event(event_data):
    conn, db_type = get_db_connection()
    try:
        query = '''
            INSERT INTO analytics_events (user_id, event_type, metadata, session_id)
            VALUES (?, ?, ?, ?)
        '''
        execute_query(conn, db_type, query, (
            event_data.get('userId'),
            event_data.get('eventType'),
            event_data.get('metadata'),
            event_data.get('sessionId')
        ), commit=True)
        return True
    except Exception as e:
        print(f"Error logging event: {e}")
        return False
    finally:
        conn.close()

def get_all_articles(page=1, limit=50):
    conn, db_type = get_db_connection()
    try:
        offset = (page - 1) * limit
        query = "SELECT * FROM articles ORDER BY created_at DESC LIMIT ? OFFSET ?"
        params = (limit, offset)
        
        rows = execute_query(conn, db_type, query, params, fetch='all')
        
        # Get total count for pagination
        count_query = "SELECT COUNT(*) as total FROM articles"
        total_row = execute_query(conn, db_type, count_query, (), fetch='one')
        total = total_row['total'] if total_row else 0
        
        articles = []
        for row in rows:
            articles.append(dict(row))
            
        return {
            'articles': articles,
            'total': total,
            'page': page,
            'limit': limit
        }
    finally:
        conn.close()

def update_article(article_id, data):
    conn, db_type = get_db_connection()
    try:
        # Build dynamic update query
        fields = []
        params = []
        
        allowed_fields = [
            'title_en', 'title_hi', 'description_en', 'description_hi',
            'content', 'source', 'url', 'image_url', 'priority', 'category'
        ]
        
        for field in allowed_fields:
            if field in data:
                fields.append(f"{field} = ?")
                params.append(data[field])
        
        if not fields:
            return False
            
        params.append(article_id)
        query = f"UPDATE articles SET {', '.join(fields)} WHERE id = ?"
        
        execute_query(conn, db_type, query, tuple(params), commit=True)
        return True
    except Exception as e:
        print(f"Error updating article: {e}")
        return False
    finally:
        conn.close()

def delete_article(article_id):
    conn, db_type = get_db_connection()
    try:
        query = "DELETE FROM articles WHERE id = ?"
        execute_query(conn, db_type, query, (article_id,), commit=True)
        return True
    except Exception as e:
        print(f"Error deleting article: {e}")
        return False
    finally:
        conn.close()

def execute_raw_sql(query, params=()):
    conn, db_type = get_db_connection()
    try:
        # Very basic safety check - but rely on admin auth
        if not query.strip():
            return {'error': 'Empty query'}
            
        is_select = query.strip().upper().startswith('SELECT')
        
        if is_select:
            rows = execute_query(conn, db_type, query, params, fetch='all')
            results = [dict(row) for row in rows]
            return {'results': results, 'count': len(results)}
        else:
            execute_query(conn, db_type, query, params, commit=True)
            return {'status': 'success', 'message': 'Query executed successfully'}
            
    except Exception as e:
        return {'error': str(e)}
    finally:
        conn.close()

# --- Transport Helpers ---
def get_all_transport():
    conn, db_type = get_db_connection()
    try:
        rows = execute_query(conn, db_type, "SELECT * FROM transport ORDER BY departure_time", fetch='all')
        return [dict(row) for row in rows]
    finally:
        conn.close()

def save_transport(data):
    conn, db_type = get_db_connection()
    try:
        if 'id' in data and data['id']:
            # Update
            query = '''
                UPDATE transport SET operator_name=?, route_from=?, route_to=?, via=?, distance_km=?, 
                departure_time=?, arrival_time=?, days_of_operation=?, bus_type=? WHERE id=?
            '''
            params = (data['operator_name'], data['route_from'], data['route_to'], data['via'], data['distance_km'],
                      data['departure_time'], data['arrival_time'], data['days_of_operation'], data['bus_type'], data['id'])
        else:
            # Insert
            query = '''
                INSERT INTO transport (operator_name, route_from, route_to, via, distance_km, departure_time, arrival_time, days_of_operation, bus_type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            '''
            params = (data['operator_name'], data['route_from'], data['route_to'], data['via'], data['distance_km'],
                      data['departure_time'], data['arrival_time'], data['days_of_operation'], data['bus_type'])
        
        execute_query(conn, db_type, query, params, commit=True)
        return True
    finally:
        conn.close()

def delete_transport(id):
    conn, db_type = get_db_connection()
    try:
        execute_query(conn, db_type, "DELETE FROM transport WHERE id = ?", (id,), commit=True)
        return True
    finally:
        conn.close()

# --- Places Helpers ---
def get_all_places():
    conn, db_type = get_db_connection()
    try:
        rows = execute_query(conn, db_type, "SELECT * FROM places ORDER BY created_at DESC", fetch='all')
        return [dict(row) for row in rows]
    finally:
        conn.close()

def save_place(data):
    conn, db_type = get_db_connection()
    try:
        if 'id' in data and data['id']:
             query = '''
                UPDATE places SET name_en=?, name_hi=?, category=?, category_hi=?, area=?, area_hi=?, 
                description_en=?, description_hi=?, tags=?, image_url=? WHERE id=?
            '''
             params = (data['name_en'], data['name_hi'], data['category'], data['category_hi'], data['area'], data['area_hi'],
                      data['description_en'], data['description_hi'], data['tags'], data['image_url'], data['id'])
        else:
            query = '''
                INSERT INTO places (name_en, name_hi, category, category_hi, area, area_hi, description_en, description_hi, tags, image_url)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            '''
            params = (data['name_en'], data['name_hi'], data['category'], data['category_hi'], data['area'], data['area_hi'],
                      data['description_en'], data['description_hi'], data['tags'], data['image_url'])
        
        execute_query(conn, db_type, query, params, commit=True)
        return True
    finally:
        conn.close()

def delete_place(id):
    conn, db_type = get_db_connection()
    try:
        execute_query(conn, db_type, "DELETE FROM places WHERE id = ?", (id,), commit=True)
        return True
    finally:
        conn.close()

# --- User/Analytics Helpers ---
def get_all_users():
    conn, db_type = get_db_connection()
    try:
        rows = execute_query(conn, db_type, "SELECT * FROM users ORDER BY last_active_at DESC", fetch='all')
        return [dict(row) for row in rows]
    finally:
        conn.close()

def delete_user(id):
    conn, db_type = get_db_connection()
    try:
        execute_query(conn, db_type, "DELETE FROM users WHERE id = ?", (id,), commit=True)
        return True
    finally:
        conn.close()

def get_analytics_stats():
    conn, db_type = get_db_connection()
    try:
        users = execute_query(conn, db_type, "SELECT COUNT(*) as count FROM users", fetch='one')['count']
        events = execute_query(conn, db_type, "SELECT COUNT(*) as count FROM analytics_events", fetch='one')['count']
        today_events = execute_query(conn, db_type, "SELECT COUNT(*) as count FROM analytics_events WHERE timestamp >= date('now')", fetch='one')['count']
        
        return {
            'total_users': users,
            'total_events': events,
            'today_events': today_events
        }
    except:
        return {'total_users': 0, 'total_events': 0, 'today_events': 0}
    finally:
        conn.close()
