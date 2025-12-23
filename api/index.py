from flask import Flask, jsonify, request
import os
import sys

# DB Dependencies
try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
except ImportError:
    psycopg2 = None
    RealDictCursor = None

app = Flask(__name__)

# --- Inlined DB Logic to avoid import issues ---

def get_db_connection():
    db_url = os.environ.get('DATABASE_URL')
    if db_url and psycopg2:
        # PostgreSQL (Render deployment)
        conn = psycopg2.connect(db_url, sslmode='require')
        return conn, 'postgres'
    else:
        # Fallback (mostly for local or if env missing)
        # Note: SQLite won't work well in Vercel functions as they are ephemeral
        return None, 'none'

def execute_query(conn, db_type, query, params=(), commit=False):
    if not conn:
        return False
        
    if db_type == 'postgres':
        query = query.replace('?', '%s')
        cur = conn.cursor(cursor_factory=RealDictCursor)
    else:
        return False # Should not happen in prod if configured

    try:
        cur.execute(query, params)
        if commit:
            conn.commit()
            return True
        return cur.fetchall()
    except Exception as e:
        print(f"DB Error: {e} | Query: {query}", file=sys.stderr)
        if commit:
            conn.rollback()
        return False
    finally:
        cur.close()

def upsert_user(user_data):
    conn, db_type = get_db_connection()
    if not conn:
        print("No DB connection available", file=sys.stderr)
        return False
        
    try:
        # Postgres UPSERT syntax
        query = '''
            INSERT INTO users (id, email, display_name, last_active_at, utm_source, utm_medium, utm_campaign)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                display_name = excluded.display_name,
                email = excluded.email,
                last_active_at = CURRENT_TIMESTAMP,
                utm_source = COALESCE(excluded.utm_source, users.utm_source),
                utm_medium = COALESCE(excluded.utm_medium, users.utm_medium),
                utm_campaign = COALESCE(excluded.utm_campaign, users.utm_campaign)
        '''
        return execute_query(conn, db_type, query, (
            user_data.get('uid'),
            user_data.get('email'),
            user_data.get('displayName'),
            user_data.get('utm_source'),
            user_data.get('utm_medium'),
            user_data.get('utm_campaign')
        ), commit=True)
    finally:
        if conn:
            conn.close()

# -----------------------------------------------

@app.route('/api/user/sync', methods=['POST', 'GET'])
def sync_user():
    if request.method == 'GET':
        return jsonify({'status': 'ok', 'message': 'User sync endpoint ready'})
        
    try:
        data = request.json
        if not data or not data.get('uid'):
             return jsonify({'error': 'Missing UID'}), 400
             
        success = upsert_user(data)
        
        if success:
            return jsonify({'status': 'synced', 'db': 'postgres'})
        else:
            # If DB failed but app is running, return OK but warn
            # This prevents frontend blocking if DB is just unreachable temporarily
            print(f"DB Sync failed for {data.get('email')}", file=sys.stderr)
            return jsonify({'status': 'synced_fallback', 'warning': 'db_connection_failed'}), 200
            
    except Exception as e:
        print(f"Sync Exception: {e}", file=sys.stderr)
        return jsonify({'error': str(e)}), 500

# --- Analytics Logic ---

def log_event(event_data):
    conn, db_type = get_db_connection()
    if not conn:
        print("No DB connection available for analytics", file=sys.stderr)
        return False
        
    try:
        # Check if table exists (lazy check via error is messy, better to just try insert)
        query = '''
            INSERT INTO analytics_events (user_id, event_type, metadata, session_id, utm_source, utm_medium, utm_campaign)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        '''
        return execute_query(conn, db_type, query, (
            event_data.get('userId'),
            event_data.get('eventType'),
            event_data.get('metadata'),
            event_data.get('sessionId'),
            event_data.get('utm_source'),
            event_data.get('utm_medium'),
            event_data.get('utm_campaign')
        ), commit=True)
    except Exception as e:
        print(f"Analytics logging failed: {e}", file=sys.stderr)
        return False
    finally:
        if conn:
            conn.close()

@app.route('/api/analytics/log', methods=['POST'])
def log_analytics():
    try:
        data = request.json
        if not data or not data.get('eventType'):
             return jsonify({'error': 'Missing eventType'}), 400
             
        # Async-like fire and forget (we wait, but client doesn't care much)
        success = log_event(data)
        
        return jsonify({'status': 'logged', 'success': success})
            
    except Exception as e:
        print(f"Analytics Exception: {e}", file=sys.stderr)
        # Don't fail the request, just return error
        return jsonify({'error': str(e)}), 500

# --- Migration Logic (Re-enabled for Analytics Table) ---
@app.route('/api/admin/migrate_schema', methods=['GET'])
def migrate_schema():
    # Basic security check
    auth_key = request.headers.get('X-Admin-Key')
    if auth_key != 'shivpuri2025':
        return jsonify({'error': 'Unauthorized'}), 401

    conn, db_type = get_db_connection()
    if not conn:
        return jsonify({'error': 'No DB connection'}), 500

    results = []
    try:
        # Postgres-specific table creation (Vercel uses Postgres)
        # Using SERIAL PRIMARY KEY for ID
        create_events = '''
            CREATE TABLE IF NOT EXISTS analytics_events (
                id SERIAL PRIMARY KEY,
                user_id TEXT,
                event_type TEXT NOT NULL,
                metadata TEXT,
                session_id TEXT,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                utm_source TEXT,
                utm_medium TEXT,
                utm_campaign TEXT
            )
        '''
        execute_query(conn, db_type, create_events, commit=True)
        results.append("Ensured analytics_events table exists")
        
        # Also ensure columns exist if table was already there without them
        alter_cmds = [
            "ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS utm_source TEXT;",
            "ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS utm_medium TEXT;",
            "ALTER TABLE analytics_events ADD COLUMN IF NOT EXISTS utm_campaign TEXT;"
        ]
        
        for cmd in alter_cmds:
             execute_query(conn, db_type, cmd, commit=True)
             results.append(f"Executed: {cmd}")

        return jsonify({'status': 'success', 'results': results})
    except Exception as e:
        return jsonify({'error': str(e), 'results': results}), 500
    finally:
        if conn:
            conn.close()

# -----------------------------------------------

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return jsonify({
        'status': 'alive',
        'path': path,
        'info': 'Standalone API handler'
    })


