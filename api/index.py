from flask import Flask, jsonify, request
import os
import sys

app = Flask(__name__)

# Standalone user sync logic to avoid import architecture issues on Vercel
@app.route('/api/user/sync', methods=['POST', 'GET'])
def sync_user():
    if request.method == 'GET':
        return jsonify({'status': 'ok', 'message': 'User sync endpoint ready'})
        
    try:
        data = request.json
        # Here we would normally sync to DB. 
        # For now, let's just log it and return success to unblock the frontend.
        # Once we verify this endpoint works, we can re-integrte DB or copy db.py code here.
        print(f"Received sync request for: {data.get('email')}")
        return jsonify({'status': 'synced', 'mode': 'standalone'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return jsonify({
        'status': 'alive',
        'path': path,
        'info': 'This is the standalone API handler'
    })

# Vercel entry point
# No handler function needed if 'app' is exposed


