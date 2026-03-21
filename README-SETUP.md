# Om Sree Heights Community Website

A modern, responsive community website with **monthly color themes**, **separated content management**, and **mobile-friendly design**.

## 🎨 Features

### Monthly Color Themes
The website automatically displays different color themes for each month:
- **January**: Winter Blue
- **February**: Love Red
- **March**: Spring Green
- **April**: Cherry Blossom Pink
- **May**: Sunny Gold
- **June**: Ocean Teal
- **July**: Vibrant Purple
- **August**: Sunset Orange
- **September**: Harvest Bronze
- **October**: Pumpkin Spice
- **November**: Grateful Brown
- **December**: Holiday Red

### Architecture

#### **Separation of Concerns**
- **Content**: `config.js` - All community information and content lives here
- **Styling**: `styles.css` - All UI/UX design and monthly themes
- **Structure**: `index.html` - HTML structure only
- **Logic**: `script.js` - JavaScript for dynamic rendering and interactivity

#### **Mobile Responsive**
- Fully responsive design for all screen sizes
- Mobile hamburger menu
- Touch-friendly interface
- Optimized for tablets and phones

## 📁 File Structure

```
community/
├── index.html                  # HTML structure (minimal, content-free)
├── styles.css                  # All styling & monthly themes
├── config.js                   # All content & configuration
├── script.js                   # Dynamic rendering & logic
├── README-SETUP.md            # This file
├── assets/
│   └── images/                # Images folder
│       ├── community-1.jpg
│       ├── community-2.jpg
│       ├── community-3.jpg
│       ├── community-4.jpg
│       ├── community-5.jpg
│       ├── community-6.jpg
│       ├── about-community.jpg
│       ├── placeholder.jpg    # Fallback image
│       └── (.other images)
└── LICENSE
```

## 🚀 Quick Start

### 1. Setup
- Extract files to your web server directory
- Add community images to `assets/images/` folder
- Replace placeholder paths with actual image URLs

### 2. Customize Content
Edit `config.js` to update:
- **Announcements**: `CONFIG.announcements[]`
- **Events**: `CONFIG.events[]`
- **Gallery Images**: `CONFIG.gallery[]`
- **About Section**: `CONFIG.about`
- **Contact Information**: `CONFIG.contact`

Example - Adding an announcement:
```javascript
{
    date: 'Mar 20, 2026',
    title: 'New Announcement',
    description: 'This is the announcement text.'
}
```

### 3. Customize Colors (Monthly Themes)
Edit `styles.css` to modify monthly colors:
```css
body.theme-march {
    --primary-color: #2e7d32;
    --secondary-color: #43a047;
    --accent-color: #66bb6a;
    --bg-light: #e8f5e9;
}
```

## 📝 JSON-Friendly Content Structure

All content in `config.js` follows a clean JSON structure:

```javascript
const CONFIG = {
    siteName: 'Om Sree Heights Community',
    announcements: [
        {
            id: 1,
            date: 'Mar 20, 2026',
            title: 'Title',
            description: 'Description'
        }
    ],
    events: [...],
    gallery: [...],
    about: {...},
    contact: {...}
};
```

## 🎯 Sections

### Header & Navigation
- Site logo and title
- Responsive navigation menu
- Sticky header
- Mobile hamburger menu

### Hero Section
- Large welcome banner
- Customizable title and subtitle
- Theme-colored gradient background

### Announcements
- Grid layout (responsive)
- Date, title, and description
- Hover effects

### Events
- Timeline-style event list
- Date, time, title, and description
- Responsive layout

### Gallery
- Image grid with hover effects
- Click to expand (modal view)
- Captions for each image

### About Section
- Text content
- Feature highlights with icons
- Image support

### Contact Section
- Contact information (address, phone, email, hours)
- Working contact form
- Responsive grid layout

## 💻 Editing Content Safely

To add/edit content **without touching HTML or CSS**:

1. Open `config.js`
2. Modify only the `CONFIG` object
3. Save the file
4. Refresh the webpage

The page will automatically re-render with new content!

## 🎨 Theme Customization

### Change Current Month's Theme
Users can manually select a month using the theme selector dropdown, or the theme automatically updates based on the system date.

### Add New Theme
1. Open `styles.css`
2. Add new theme class:
```css
body.theme-custom {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_COLOR;
    --accent-color: #YOUR_COLOR;
    --bg-light: #YOUR_COLOR;
}
```
3. Add theme name to `MONTHLY_THEMES` in `config.js`

## 📱 Mobile Optimization

- **Hamburger Menu**: Appears on screens < 768px
- **Responsive Grid**: Adjusts columns based on screen size
- **Flexible Typography**: Font sizes adjust for small screens
- **Touch-Friendly**: Larger tap targets
- **Optimized Images**: Uses CSS for efficient loading

## ⚙️ Managing Images

### Adding Images
1. Place images in `assets/images/`
2. Update paths in `config.js`:
```javascript
gallery: [
    {
        id: 1,
        src: 'assets/images/your-image.jpg',
        caption: 'Image Caption'
    }
]
```

### Image Fallback
If an image fails to load, a placeholder will display automatically.

## 🔄 Dynamic Content Management

You can update content programmatically using JavaScript console:

```javascript
// Add new announcement
addAnnouncement({
    date: 'Mar 25, 2026',
    title: 'New Event',
    description: 'Event details here'
});

// Update existing announcement
updateAnnouncement(1, {
    title: 'Updated Title',
    description: 'Updated description'
});

// Remove announcement
removeAnnouncement(1);
```

## 🌐 Deployment

### Local Testing
- Open `index.html` in a web browser
- Or serve with a local server: `python -m http.server`

### Production Deployment
1. Ensure all image paths are correct
2. Update `CONFIG` with real contact information
3. Test on multiple devices/browsers
4. Deploy to your web server

## 📞 Contact Form

The contact form (`handleFormSubmit` in `script.js`) currently:
- Validates input
- Shows success message
- Logs data to console

To send emails, integrate with a backend service (e.g., EmailJS, Formspree, or your own API).

## 🎓 Best Practices

1. **Keep Content Separate**: Always edit `config.js` for content, not HTML
2. **Update CSS Variables**: Use CSS custom properties for theming
3. **Test Responsive Design**: Check on mobile devices
4. **Optimize Images**: Use compressed images for faster loading
5. **Backup Configuration**: Keep copies of `config.js`

## 🐛 Troubleshooting

### Images Not Showing
- Check image paths in `config.js`
- Ensure images exist in `assets/images/`
- Verify file names match exactly (case-sensitive)

### Colors Not Changing
- Ensure CSS variables are defined in `:root` or theme class
- Check browser cache (Ctrl+Shift+Delete)
- Verify theme class is applied to body element

### Mobile Menu Not Working
- Check that JavaScript is enabled
- Verify screen width < 768px
- Test in browser developer tools

## 📄 License

See LICENSE file

## 🤝 Contributing

To contribute or report issues:
1. Update `config.js` for new content
2. Modify `styles.css` for design changes
3. Test thoroughly on all devices
4. Document major changes

---

**Happy building! Your community website is ready to go! 🚀**
