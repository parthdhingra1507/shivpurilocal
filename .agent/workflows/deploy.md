---
description: How to deploy changes to production
---

# Deployment Workflow

## Branches
- **`dev`** - Development branch (work here)
- **`main`** - Production branch (deployed to Vercel)

## Workflow

### 1. Make Changes (on dev branch)
```bash
git checkout dev
# Make your changes...
git add -A
git commit -m "Your commit message"
git push origin dev
```

### 2. Test Locally
```bash
python3 app.py
# Open http://localhost:3000 and test
```

### 3. Deploy to Production (merge to main)
```bash
git checkout main
git merge dev
git push origin main
# Vercel auto-deploys from main
```

### 4. Switch Back to Dev
```bash
git checkout dev
```

## Quick Commands

// turbo-all
```bash
# Check current branch
git branch

# Switch to dev
git checkout dev

# Switch to main
git checkout main
```

## Notes
- Never push directly to `main`
- Always test on `dev` first
- Vercel only deploys from `main` branch
- Render backend deploys from `main` branch
