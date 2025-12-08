#!/bin/bash
echo "🚀 Starting deployment..."

# Add all changes
git add .

# Commit changes
echo "📦 Committing changes..."
git commit -m "Update content and design"

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
echo "NOTE: You may be asked for your GitHub username and password (or token)."
git push

echo "✅ Done! Netlify will update your site automatically."
