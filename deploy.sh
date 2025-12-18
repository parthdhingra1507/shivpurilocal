#!/bin/bash
# Deploy script with auto cache-busting
# Run this before every git push

# Generate version from timestamp
VERSION=$(date '+%Y%m%d-%H%M')

echo "🚀 Deploying version: $VERSION"
echo ""

# Update version in all HTML files
echo "📝 Updating asset versions in HTML files..."
for file in *.html; do
    # Update CSS versions
    sed -i '' "s/style\.css?v=[^\"']*/style.css?v=$VERSION/g" "$file"
    sed -i '' "s/forum\.css?v=[^\"']*/forum.css?v=$VERSION/g" "$file"
    
    # Update JS versions  
    sed -i '' "s/sw-register\.js?v=[^\"']*/sw-register.js?v=$VERSION/g" "$file"
    sed -i '' "s/common\.js?v=[^\"']*/common.js?v=$VERSION/g" "$file"
    sed -i '' "s/i18n\.js?v=[^\"']*/i18n.js?v=$VERSION/g" "$file"
    sed -i '' "s/router\.js?v=[^\"']*/router.js?v=$VERSION/g" "$file"
    sed -i '' "s/transport\.js?v=[^\"']*/transport.js?v=$VERSION/g" "$file"
    sed -i '' "s/places\.js?v=[^\"']*/places.js?v=$VERSION/g" "$file"
    sed -i '' "s/food\.js?v=[^\"']*/food.js?v=$VERSION/g" "$file"
    sed -i '' "s/news\.js?v=[^\"']*/news.js?v=$VERSION/g" "$file"
    sed -i '' "s/forum\.js?v=[^\"']*/forum.js?v=$VERSION/g" "$file"
    
    echo "  ✓ $file"
done

# Update version.js
if [ -f "version.js" ]; then
    sed -i '' "s/APP_BUILD = '[^']*'/APP_BUILD = '$VERSION'/g" version.js
    echo "  ✓ version.js"
fi

echo ""
echo "✅ All files updated to version $VERSION"
echo ""

# Git operations
echo "📦 Committing changes..."
git add -A
git commit -m "Deploy v$VERSION - auto cache bust"

echo ""
echo "⬆️ Pushing to GitHub..."
git push

echo ""
echo "🎉 Deployed! Site will update automatically."
