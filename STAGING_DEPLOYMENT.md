# 🚀 Staging Deployment Guide

## Overview
This guide helps you deploy the `staging` branch to test fixes before pushing to production.

## Current Setup
- **Production Branch**: `main` → https://shivpurilocal.in
- **Staging Branch**: `staging` → (to be configured)
- **Backend**: Render.com (https://shivpurilocal-backend.onrender.com)

---

## Option 1: Vercel Staging (Recommended for Frontend)

### Step 1: Configure Vercel for Staging
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your `shivpurilocal` project
3. Go to **Settings** → **Git**
4. Under "Production Branch", keep it as `main`
5. Vercel automatically creates preview deployments for other branches!

### Step 2: Access Your Staging URL
- Vercel automatically deploys the `staging` branch
- URL format: `shivpurilocal-git-staging-[your-username].vercel.app`
- Find it in: Vercel Dashboard → Your Project → Deployments → Filter by "staging" branch

### Step 3: Test the Staging Site
Visit your staging URL and test:
- ✅ Direct page loads: `/food`, `/places`, `/transport`, `/news`
- ✅ Dark mode toggle (🌙 button)
- ✅ Language switching
- ✅ Router navigation between pages

---

## Option 2: Render Staging (For Backend)

### Step 1: Create Staging Backend Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New** → **Web Service**
3. Connect your GitHub repo: `parthdhingra1507/shivpurilocal`
4. Configure:
   - **Name**: `shivpurilocal-backend-staging`
   - **Branch**: `staging`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Instance Type**: Free

### Step 2: Update Frontend to Use Staging Backend
If you created a staging backend, update `news.js`:

```javascript
const NewsApp = {
    API_URL: window.location.hostname === 'localhost'
        ? '/api/news'
        : window.location.hostname.includes('staging')
            ? 'https://shivpurilocal-backend-staging.onrender.com/api/news'
            : 'https://shivpurilocal-backend.onrender.com/api/news',
    // ... rest of code
};
```

---

## Workflow: Testing Changes

### 1. Make Changes Locally
```bash
# Make your code changes
git add .
git commit -m "Your change description"
```

### 2. Push to Staging
```bash
git checkout staging
git push origin staging
```

### 3. Test on Staging URL
- Wait 1-2 minutes for deployment
- Visit your Vercel staging URL
- Test all functionality

### 4. Merge to Production
```bash
# If staging tests pass
git checkout main
git merge staging
git push origin main
```

---

## Current Fixes in Staging Branch

✅ **Fixed Issues:**
1. Pages not loading on direct access (required manual reload)
2. Dark mode toggle not working
3. Router path event mismatch
4. Missing DOMContentLoaded checks
5. Missing window.i18n safety checks

**Files Changed:**
- `router.js` - Fixed path emission
- `food.js` - Added DOM ready check + i18n safety
- `places.js` - Added DOM ready check + i18n safety
- `transport.js` - Added DOM ready check
- `news.js` - Fixed event listener path
- `style.css` - Added dark mode CSS

---

## Quick Commands

```bash
# Switch to staging
git checkout staging

# Pull latest staging
git pull origin staging

# Push changes to staging
git push origin staging

# Switch back to main
git checkout main

# Merge staging to main (after testing)
git merge staging
git push origin main
```

---

## Testing Checklist

Before merging staging → main, verify:

- [ ] `/food` loads food items on first visit
- [ ] `/places` loads places on first visit
- [ ] `/transport` loads buses on first visit
- [ ] `/news` loads news articles on first visit
- [ ] Dark mode toggle works (🌙 button)
- [ ] Language toggle works (हिंदी/English)
- [ ] Router navigation works (clicking nav links)
- [ ] WhatsApp share buttons work
- [ ] No console errors in browser DevTools

---

## Troubleshooting

**Q: Staging deployment not showing changes?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check Vercel deployment logs
- Verify correct branch is deployed

**Q: Backend API not working on staging?**
- Check Render deployment logs
- Verify CORS settings allow staging domain
- Check API URL in `news.js`

**Q: How to rollback staging?**
```bash
git checkout staging
git reset --hard origin/main
git push origin staging --force
```

---

## Next Steps

1. **Find your Vercel staging URL** in Vercel Dashboard
2. **Test all fixes** using the checklist above
3. **If tests pass**, merge to main:
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```
4. **If tests fail**, make fixes on staging branch and repeat

---

## Support

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- GitHub Issues: https://github.com/parthdhingra1507/shivpurilocal/issues
