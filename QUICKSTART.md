# Quick Start Guide - Om Sree Heights Community Website

## 🎯 What You Have

A **fully functional, production-ready community website** with:

✅ **12 Monthly Color Themes** - Automatically changes based on date
✅ **Mobile Responsive** - Works perfectly on phones, tablets, desktops
✅ **Content Management** - All content in one easy-to-edit file
✅ **No Database Needed** - Static site, fast and secure
✅ **Easy Customization** - Change text, images, colors without coding

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Open the Website
```bash
# Option A: Open directly in browser
# Windows: Double-click index.html

# Option B: Use a local server (recommended)
python -m http.server
# Then go to http://localhost:8000
```

### Step 2: Edit Community Information
Open `config.js` and change:

```javascript
const CONFIG = {
    siteName: 'Om Sree Heights Community',      // ← Your community name
    location: '...',                              // ← Your location
    email: 'contact@omsreeheights.com',          // ← Your email
    phone: '+91-9876-543210',                    // ← Your phone
    
    // ... rest of the content follows
};
```

### Step 3: Add Your Images
1. Prepare your community images (JPG or PNG)
2. Copy them to `assets/images/` folder
3. Update image paths in `config.js`:

```javascript
gallery: [
    {
        id: 1,
        src: 'assets/images/your-photo.jpg',     // ← Update filename
        caption: 'Your Description'               // ← Update caption
    }
]
```

### Step 4: Customize Monthly Colors (Optional)
Edit `styles.css` to change theme colors:

```css
body.theme-march {
    --primary-color: #2e7d32;      /* Main color */
    --secondary-color: #43a047;    /* Secondary color */
    --accent-color: #66bb6a;       /* Accent color */
    --bg-light: #e8f5e9;           /* Light background */
}
```

---

## 📋 Content Sections - What to Edit

All content is in `config.js`. Here's what each section contains:

### 1. Announcements
```javascript
announcements: [
    {
        id: 1,
        date: 'Mar 20, 2026',
        title: 'Announcement Title',
        description: 'What happened or needs to happen'
    }
]
```

**Example Use Cases:**
- Maintenance notices
- Payment due dates
- Rule changes
- Special announcements

### 2. Events
```javascript
events: [
    {
        id: 1,
        month: 'Apr',
        day: '05',
        title: 'Event Name',
        description: 'What will happen at the event',
        time: '7:00 AM - 10:00 AM'
    }
]
```

**Example Use Cases:**
- Community cleanup
- Sports events
- Monthly meetings
- Celebrations

### 3. Gallery
```javascript
gallery: [
    {
        id: 1,
        src: 'assets/images/photo.jpg',
        caption: 'Photo Description'
    }
]
```

**Example Use Cases:**
- Community photos
- Event pictures
- Facility images
- Member activities

### 4. About Section
```javascript
about: {
    title: 'About Your Community',
    mainText: 'Main description...',
    additionalText: 'More information...',
    features: [
        { title: 'Feature 1', description: 'Description...' }
    ]
}
```

### 5. Contact Information
```javascript
contact: {
    address: {
        icon: '📍',
        title: 'Address',
        details: 'Your address here'
    },
    phone: {
        icon: '📞',
        title: 'Phone',
        details: 'Your phone number'
    },
    // ... more contact details
}
```

---

## 🎨 Color Themes - Complete List

Each month has custom colors that apply automatically:

| Month | Theme Name | Primary Color |
|-------|-----------|---------------|
| January | Winter Blue | #003d82 |
| February | Love Red | #c41e3a |
| March | Spring Green | #2e7d32 |
| April | Cherry Blossom | #d81b60 |
| May | Sunny Gold | #f57f17 |
| June | Ocean Teal | #0097a7 |
| July | Vibrant Purple | #512da8 |
| August | Sunset Orange | #e65100 |
| September | Harvest Bronze | #6d4c41 |
| October | Pumpkin Spice | #ff6f00 |
| November | Grateful Brown | #5d4037 |
| December | Holiday Red | #b71c1c |

---

## 💡 Common Tasks

### Add a New Announcement
1. Open `config.js`
2. Find `announcements: [` section
3. Add before the first announcement:
```javascript
{
    id: 1,
    date: 'Today\'s Date',
    title: 'Your Title',
    description: 'Your message'
},
```
4. Refresh the page ↻

### Add an Event
1. Open `config.js`
2. Find `events: [` section
3. Add a new event object with date, title, description, time
4. Refresh the page ↻

### Add Gallery Images
1. Save your image to `assets/images/` folder
2. Add to `gallery: [` in `config.js`:
```javascript
{
    id: 1,
    src: 'assets/images/my-image.jpg',
    caption: 'My Photo'
}
```
3. Refresh the page ↻

### Change the Color Theme
Users can select different months from the dropdown, or edit this line in `script.js`:
```javascript
function setTheme(monthIndex) {
    // monthIndex: 0=Jan, 1=Feb, 2=Mar, ... 11=Dec
    document.body.classList.add(MONTHLY_THEMES[monthIndex]);
}
```

---

## 📱 Mobile Responsive Features

The website automatically adapts to:
- **Phones**: Single column layout, hamburger menu
- **Tablets**: 2-column layout, optimized spacing
- **Desktops**: Multi-column layout, full features

**Test on mobile:**
- Open in browser → Press F12 → Click phone icon
- Or test on actual phone

---

## 🔌 Advanced Features

### Contact Form
The contact form automatically:
- Collects messages from visitors
- Validates input
- Shows confirmation message
- Logs data to console

To enable email sending:
1. Use EmailJS (free service)
2. Or integrate with your email provider
3. Edit `handleFormSubmit()` in `script.js`

### Dynamic Content Update (Console)
You can update content via browser console:

```javascript
// Add new announcement
addAnnouncement({
    date: 'Mar 25, 2026',
    title: 'New Announcement',
    description: 'Details here'
});

// Remove announcement
removeAnnouncement(1);

// Update announcement
updateAnnouncement(1, {
    title: 'Updated Title'
});
```

---

## 🌐 Deployment

### Option 1: Free Hosting (Recommended)
- **Netlify**: Drag & drop folder, automatic HTTPS
  - Deploy: `index.html`, `styles.css`, `config.js`, `script.js`, `assets/`
- **GitHub Pages**: Push to GitHub, enable pages
- **Vercel**: Auto-deploy from GitHub

### Option 2: Your Own Server
- Upload all files to your web server
- Ensure all paths are correct
- Test before going live

---

## ✅ Checklist for Going Live

- [ ] Add your community logo/images
- [ ] Update all contact information
- [ ] Add real announcements/events
- [ ] Fill in About section
- [ ] Test on mobile devices
- [ ] Test all links and forms
- [ ] Update color themes if desired
- [ ] Set up email for contact form
- [ ] Deploy to hosting

---

## 🆘 Troubleshooting

### Images not showing
- ❌ File name doesn't match? Check spelling
- ❌ Wrong path? Should be `assets/images/filename.jpg`
- ❌ Browser cache? Press Ctrl+Shift+Delete

### Colors not changing
- ❌ Month selected wrong? Use theme selector
- ❌ CSS not loading? Refresh (Ctrl+Shift+R)
- ❌ Browser cache? Clear it

### Mobile menu not opening
- ❌ Window too wide? Make it smaller
- ❌ JavaScript disabled? Enable it
- ❌ Browser issue? Try Firefox/Chrome

---

## 📚 File Reference

| File | Purpose |
|------|---------|
| `index.html` | Website structure (don't edit for content) |
| `styles.css` | All colors and design |
| `config.js` | **← Edit this for content!** |
| `script.js` | Dynamic functionality |
| `assets/images/` | Your photos folder |

---

## 🎓 Remember

✨ **You only need to edit `config.js` to change content!**

Never touch HTML unless you know what you're doing. All changes should be in the `CONFIG` object.

---

## 📞 Support

For detailed setup: See `README-SETUP.md`

Happy building! 🚀
