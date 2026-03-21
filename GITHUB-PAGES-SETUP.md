# GitHub Pages Deployment Guide

## 🚀 Publish Your Website Using GitHub Pages

This guide will help you publish your Om Sree Heights Community website on GitHub Pages using the main branch.

---

## 📋 Prerequisites

- GitHub account
- Repository already created (which you have)
- Git installed on your computer
- All website files ready (✅ You have these)

---

## 🔧 Setup Steps

### Step 1: Ensure All Files Are Committed

Run these commands in your terminal:

```bash
cd c:\sw-dev\github\omsreeheights\community

# Check git status
git status

# Add all files
git add .

# Commit files
git commit -m "Add community website with monthly themes"

# Push to main branch
git push origin main
```

### Step 2: Enable GitHub Pages

1. **Go to your GitHub repository** on the web
   - URL: `https://github.com/omsreeheights/community`

2. **Click on "Settings"** (top right)

3. **In the left sidebar, find "Pages"** under "Code and automation"

4. **Configure GitHub Pages:**
   - **Source**: Select `main` branch
   - **Folder**: Select `/ (root)` 
   - **Click Save**

5. **Wait for deployment** (usually takes 1-2 minutes)

### Step 3: Your Website is Live! 🎉

Your website will be available at:
```
https://omsreeheights.github.io/community/
```

---

## 📝 Editing Content After Publishing

Since your content is in `config.js`, updating the website is simple:

1. **Edit `config.js`** locally
2. **Commit and push:**
   ```bash
   git add config.js
   git commit -m "Update community announcements"
   git push origin main
   ```
3. **Website updates automatically** (within 1-2 minutes)

---

## 🔄 Automatic Deployment with GitHub Actions (Optional)

If you want to add a workflow for automatic status checks:

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v1
```

This is optional and automatically deployed when you push.

---

## ✅ Verify Everything Works

1. **Push your code:**
   ```bash
   git push origin main
   ```

2. **Check deployment status:**
   - Go to your GitHub repo
   - Click "Deployments" on the right sidebar
   - You should see "github-pages" deployment

3. **Visit your website:**
   - Open: `https://omsreeheights.github.io/community/`

4. **Test on mobile:**
   - Open the site on your phone
   - Test theme selector
   - Verify all sections load

---

## 📁 File Structure (For Reference)

```
community/
├── index.html                    ✓ (serves as homepage)
├── styles.css                    ✓
├── config.js                     ✓
├── script.js                     ✓
├── assets/
│   └── images/                   ✓ (your photos)
├── .github/
│   └── workflows/
│       └── pages.yml             (optional)
└── .nojekyll                     (speeds up deployment)
```

---

## 🎨 Testing Before Publishing

### Option 1: Local Server (Python)
```bash
cd community
python -m http.server
# Visit http://localhost:8000
```

### Option 2: Live Server (VS Code Extension)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Browser Preview
1. Open `index.html` directly in browser
2. Test all features

---

## 🐛 Troubleshooting

### Website shows 404 error
- ❌ Check repository name in URL
- ❌ Verify GitHub Pages is enabled
- ❌ Wait 2-3 minutes for deployment

### Images not loading
- ❌ Check `assets/images/` folder exists
- ❌ Verify image filenames match `config.js`
- ❌ Ensure images use lowercase paths

### Content not updating
- ❌ Did you commit changes? (`git add .`)
- ❌ Did you push to main? (`git push origin main`)
- ❌ Refresh browser (Ctrl+Shift+R)

### Build failed notification
- Check the "Actions" tab in GitHub
- Look at the failed workflow log
- Usually caused by file path issues

---

## 🔐 Custom Domain (Optional)

If you have a custom domain (e.g., `www.omsreeheights.com`):

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Update DNS records at your domain provider:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   
   CNAME: omsreeheights.github.io
   ```
4. Click "Save" and wait for GitHub to verify

---

## 📊 Monitoring Your Site

### View Deployment Logs
1. Go to repository on GitHub
2. Click **Actions** tab
3. Click latest deployment
4. See real-time logs

### Check Website Status
1. Go to **Deployments** section
2. See active deployments
3. View deployment history

---

## 🔄 Updating the Website

### Update Content (No Code Knowledge Needed)
```bash
# 1. Edit config.js with new announcements/events
# 2. Save the file
git add config.js
git commit -m "Update announcements"
git push origin main
```

### Update Images
```bash
# 1. Add new images to assets/images/
# 2. Update config.js with new image references
git add .
git commit -m "Add new community photos"
git push origin main
```

### Update Colors/Design
```bash
# 1. Edit styles.css for theme colors
git add styles.css
git commit -m "Update March theme colors"
git push origin main
```

---

## 📞 Important URLs

| What | URL |
|------|-----|
| **Website** | `https://omsreeheights.github.io/community/` |
| **Repository** | `https://github.com/omsreeheights/community` |
| **Settings** | `https://github.com/omsreeheights/community/settings/pages` |
| **Actions** | `https://github.com/omsreeheights/community/actions` |

---

## ✨ Pro Tips

1. **Frequent Updates?**
   - Use GitHub web editor to quickly edit `config.js`
   - Changes live within 2 minutes

2. **Backup Your Work?**
   - Every commit is automatically backed up
   - Can revert to any previous version

3. **SEO Optimization?**
   - Add meta tags to `index.html`
   - Set description and keywords in config

4. **Analytics?**
   - Add Google Analytics code to `script.js`
   - Monitor visitor behavior

---

## ✅ Checklist for Going Live

- [ ] All files committed to main branch
- [ ] GitHub Pages enabled in Settings
- [ ] Visited your website URL
- [ ] Tested on mobile
- [ ] Tested color themes
- [ ] Checked all links work
- [ ] Images display correctly
- [ ] Contact form loads

---

## 🎓 Next Steps

1. **Add your community photos** to `assets/images/`
2. **Update `config.js`** with real information
3. **Test locally** before pushing
4. **Push to GitHub** (`git push origin main`)
5. **Visit your live website** in 1-2 minutes

---

## 📞 Support

For general GitHub Pages help:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)

For website customization:
- See `QUICKSTART.md`
- See `ADMIN-GUIDE.md`

---

**Your community website is ready to go live! 🚀**
