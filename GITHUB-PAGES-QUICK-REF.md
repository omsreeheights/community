# GitHub Pages Quick Reference

## 🚀 30-Second Setup

### 1. Commit All Files
```bash
cd c:\sw-dev\github\trisandhya\community
git add .
git commit -m "Add community website"
git push origin main
```

### 2. Enable GitHub Pages
- Go to: https://github.com/trisandhya/community/settings/pages
- Source: `main` branch
- Folder: `/ (root)`
- Click Save

### 3. Wait 1-2 Minutes ⏳

### 4. Visit Your Site
```
https://trisandhya.github.io/community/
```

---

## 📝 Common Commands

```bash
# Update content
git add config.js
git commit -m "Update announcements"
git push origin main

# Update images
git add assets/
git commit -m "Add new photos"
git push origin main

# Update styles
git add styles.css
git commit -m "Update colors"
git push origin main

# Check status
git status

# View history
git log --oneline
```

---

## 🌐 Your Website URLs

| Purpose | URL |
|---------|-----|
| Main Website | https://omsreeheights.github.io/community/ |
| Repository | https://github.com/omsreeheights/community |
| Settings | https://github.com/omsreeheights/community/settings/pages |
| Actions | https://github.com/omsreeheights/community/actions |

---

## ✅ What's Deployed

- ✓ `index.html` - Website structure
- ✓ `styles.css` - 12 monthly color themes
- ✓ `config.js` - All content (announcements, events, gallery, etc.)
- ✓ `script.js` - Dynamic features
- ✓ `assets/images/` - Your photos folder

## 🔄 Update Workflow

1. Edit content in `config.js`
2. Test locally
3. Commit: `git add . && git commit -m "message"`
4. Push: `git push origin main`
5. Website updates in 1-2 minutes

---

**Ready? Start with Step 1 above!**
