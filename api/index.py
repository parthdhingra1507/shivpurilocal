import sys
import os

# Add parent directory to path so we can import app
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Vercel serverless handler
try:
    from app import app
except Exception as e:
    import json
    import traceback
    import sys
    
    # Pure WSGI fallback app (no dependencies)
    def app(environ, start_response):
        status = '500 Internal Server Error'
        headers = [('Content-type', 'application/json')]
        start_response(status, headers)
        
        error_info = {
            'error': 'Application Import Failed (Pure Python Fallback)', 
            'details': str(e),
            'trace': traceback.format_exc(),
            'sys_path': sys.path,
            'cwd': os.getcwd()
        }
        return [json.dumps(error_info).encode('utf-8')]

def handler(request, context):
    return app(request.environ, context)
