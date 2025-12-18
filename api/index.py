import sys
import os

# Add parent directory to path so we can import app
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Vercel serverless handler
try:
    from app import app
except Exception as e:
    from flask import Flask, jsonify
    import traceback
    import sys
    app = Flask(__name__)
    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        return jsonify({
            'error': 'Application Import Failed', 
            'details': str(e),
            'trace': traceback.format_exc(),
            'sys_path': sys.path,
            'cwd': os.getcwd(),
            'listdir_root': os.listdir(os.path.dirname(os.path.abspath(__file__)) + '/..') if os.path.exists(os.path.dirname(os.path.abspath(__file__)) + '/..') else 'N/A'
        }), 500

def handler(request, context):
    return app(request.environ, context)
