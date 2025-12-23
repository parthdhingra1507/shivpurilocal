import sys
import os

# Add parent directory to path so we can import app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from app import app
except Exception as e:
    # Error handling for import failure
    from flask import Flask, jsonify
    import traceback
    
    # Print debug info to Vercel logs
    print(f"Error importing app: {e}", file=sys.stderr)
    print(f"CWD: {os.getcwd()}", file=sys.stderr)
    try:
        print(f"Files in CWD: {os.listdir('.')}", file=sys.stderr)
        print(f"Files in parent: {os.listdir('..')}", file=sys.stderr)
    except:
        pass
        
    app = Flask(__name__)
    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        return jsonify({
            'error': 'Application Import Failed', 
            'details': str(e),
            'trace': traceback.format_exc(),
            'cwd': os.getcwd(),
            'contents': str(os.listdir('.'))
        }), 500

# Vercel looks for 'app' variable
# No need for handler() function if 'app' is a WSGI application

