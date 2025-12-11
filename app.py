from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Serve static files
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

@app.route('/article')
def article():
    return send_from_directory('.', 'article.html')

# Health check
@app.route('/health')
def health():
    return jsonify({'status': 'ok'})

# Static files
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    print("🚀 Shivpuri Local Server Running on http://localhost:3000")
    app.run(port=3000, host='0.0.0.0')
