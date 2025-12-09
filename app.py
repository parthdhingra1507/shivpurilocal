from flask import Flask, jsonify, request
from flask_cors import CORS
from db import get_recent_articles, get_article_by_id, init_db
from scraper import run_background_scraper

import os
app = Flask(__name__, root_path=os.path.dirname(os.path.abspath(__file__)))
CORS(app)

@app.route('/')
def home():
    # Try to serve index.html if it exists (for static deployments alongside backend)
    try:
        return app.send_static_file('index.html')
    except:
        return jsonify({'status': 'Shivpuri Local Backend Running', 'endpoints': ['/api/news', '/api/article/<id>']})

@app.route('/api/news', methods=['GET'])
def get_news():
    lang = request.args.get('lang', 'en')
    articles = get_recent_articles(limit=50, lang=lang)
    return jsonify(articles)

@app.route('/api/article/<int:article_id>', methods=['GET'])
def get_article(article_id):
    article = get_article_by_id(article_id)
    if article:
        return jsonify(article)
    return jsonify({'error': 'Not found'}), 404

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    # Initialize DB and start scraper thread
    print("Starting server...")
    run_background_scraper()
    
    # Run server
    app.run(port=3000, host='0.0.0.0')
