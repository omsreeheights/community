# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Option 1: Test Locally (Fastest)
```bash
# 1. Navigate to project directory
cd community

# 2. Start local server (choose one):
# Python 3:
python -m http.server 8000

# Python 2:
python -m SimpleHTTPServer 8000

# Node.js:
npx http-server

# 3. Open browser
# http://localhost:8000
```

### Option 2: Deploy to GitHub Pages
```bash
# 1. Create repository on GitHub
# Go to github.com and create new repo "community"

# 2. Initialize git
cd community
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/community.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages
# Repository Settings → Pages → Deploy from branch → main → Save

# 4. Visit your site
# https://YOUR_USERNAME.github.io/community/
```

## 📝 Basic Customization

### Update Contact Information
**File:** `index.html` (Find "Contact Us" section)

```html
<!-- Update phone -->
<a href="tel:+914042345678">+91 40 4234 5678</a>

<!-- Update email -->
<a href="mailto:info@omsreeheights.com">info@omsreeheights.com</a>

<!-- Update address -->
<p>Hislop Road...</p>
```

### Change Colors
**File:** `assets/css/style.css` (Top of file)

```css
:root {
    --primary-color: #2c3e50;      /* Main color - change this */
    --secondary-color: #3498db;    /* Accent color - change this */
    --accent-color: #e74c3c;       /* Highlight - change this */
    /* ... */
}
```

### Add a Notice
**File:** `index.html` (Find "Notice Board" section)

```html
<div class="notice-item">
    <div class="notice-header">
        <h3>Your Notice Title</h3>
        <span class="notice-date">March 29, 2026</span>
    </div>
    <p>Your notice text here...</p>
</div>
```

### Add Gallery Images
**Steps:**
1. Add image files to `assets/images/`
2. Edit `index.html` Gallery section:
```html
<div class="gallery-item">
    <img src="assets/images/your-image.png" alt="Description">
    <p class="gallery-caption">Caption</p>
</div>
```

## ✅ Checklist Before Publishing

- [ ] Update all contact information
- [ ] Replace placeholder images with real photos
- [ ] Update event details and dates
- [ ] Check colors match brand
- [ ] Test on mobile device
- [ ] Test all forms work
- [ ] Test all tabs function
- [ ] Links open correctly
- [ ] No console errors (F12)

## 📂 File Locations

```
⚙️ EDIT THESE:
├── index.html                    ← Content & HTML
├── assets/css/style.css          ← Colors, sizes, styling
├── assets/js/script.js           ← Form behavior, features
└── assets/images/                ← Add your photos here

📄 INFORMATION FILES (Read these):
├── README.md                     ← Full documentation
├── DEPLOYMENT.md                 ← Publishing guide
├── PROJECT_STRUCTURE.md          ← File details
├── CONTRIBUTING.md               ← How to contribute
└── LICENSE                       ← Legal info
```

## 🔧 Troubleshooting

### Images Don't Show
- Check file path uses forward slashes: `assets/images/photo.png`
- Verify file exists in `assets/images/` folder
- Try Ctrl+F5 to clear cache

### Styles Look Wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is saved without errors
- Verify `<link>` tags point to correct files

### Forms Don't Work
- Check browser console (F12)
- Verify JavaScript file is loaded
- Ensure form IDs match in HTML and JavaScript

### Site Not Visible Online
- Verify GitHub repository is **public**
- Go to Settings > Pages > Check deployment status
- Wait 2-3 minutes after pushing changes
- Try "Enforce HTTPS" in Pages settings

## 📞 Integration Options

### Email Forms (Choose One)

**Formspree (Easiest - Free):**
1. Go to formspree.io
2. Submit form once to get ID
3. Add to HTML: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

**Firebase (Advanced - Free tier):**
1. Create account at firebase.google.com
2. Create Firestore database
3. Add JavaScript SDK
4. Store form data in cloud

**SendGrid (Email focus):**
1. Create account at sendgrid.com
2. Get API key
3. Use with NodeJS backend or Zapier

## 📊 Analytics (Optional)

**Google Analytics:**
1. Create account at google.com/analytics
2. Get tracking ID
3. Add code to `index.html` head:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

## 🎨 Design Tips

### Brand Colors
- Use 2-3 main colors maximum
- Ensure good contrast for accessibility
- Test colors on mobile too

### Images
- Use high-quality photos (2MB max per image)
- Resize to appropriate dimensions
- Use responsive image sizes
- Compress before uploading

### Content
- Keep notices brief and clear
- Update regularly (weekly minimum)
- Add dates to all posts
- Remove old/expired content

### Accessibility
- Use descriptive link text
- Add alt text to images
- Use good color contrast
- Test keyboard navigation

## 📱 Mobile Testing

**DevTools (Right-click → Inspect):**
- Select device toolbar (Ctrl+Shift+M)
- Test layouts at 320px, 480px, 768px, 1024px
- Check touch interactions work

**Real Devices:**
- Test on iPhone and Android
- Check forms are easy to fill
- Verify links are tappable

## 🔒 Security Notes

✅ No personal data stored
✅ All HTTPS (automatic)
✅ No server vulnerabilities
✅ Static files only

⚠️ If adding backend:
- Never expose API keys in code
- Use environment variables
- Validate all form inputs

## 📚 Learn More

- **HTML:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Git:** https://guides.github.com/
- **GitHub Pages:** https://pages.github.com/

---

**Need Help?**
- Read the full README.md
- Check DEPLOYMENT.md guide
- Review PROJECT_STRUCTURE.md
- Create a GitHub Issue for support

**Ready?** Start with Option 1 above! 🎉
