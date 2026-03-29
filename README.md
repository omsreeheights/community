# Om Sree Heights 
Society Name: Om Sree Heights Flat Owners Maintenance Mutually Aided Cooperative Society Ltd.
Hislop Road,
Village - Kowkoor,
Mandal- Alwal,
District- Medchal-Malkajgiri,
Telangana, 500010

------------------------------------------
Requirements:
1. Mobile friendly Responsive web design 
2. Single web page design 
3. prefer to not use scrolling in main page.
4. Sub pages will require scrolling vertical and horizontal 
5. sections are referred as tabs in the main page 
6. Sections required for apartment community for 
    a. Notice Board 
    b. Events  notifications and 
        Events gallary video / images 
    c. Gallery 
    d. Contact Us 
    e. Feedback form
    f. Weekly newsletters 
    g. archives 
Phase -2 

7. Login and access to privileges pages 

---

## Development Setup

### Prerequisites
- Git
- GitHub account
- Basic knowledge of HTML/CSS/JavaScript

### Project Structure

```
community/
├── index.html                 # Main page
├── assets/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   └── responsive.css    # Mobile/tablet responsive styles
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── images/
│       ├── placeholder-gallery.png
│       └── placeholder-event.png
├── .gitignore                # Git ignore file
├── LICENSE                   # License file
└── README.md                # This file
```

### Installation & Local Testing

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/community.git
   cd community
   ```

2. **Local Testing:**
   - Option A: Open `index.html` directly in your browser
   - Option B: Use a local server
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js http-server
     npx http-server
     ```
   - Then visit `http://localhost:8000`

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit - Om Sree Heights Community Portal"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Under "Pages" section:
     - Select "Deploy from a branch"
     - Branch: Select `main` (or `master`)
     - Folder: Select `/ (root)`
     - Click "Save"

3. **Access Your Website:**
   - Your site will be available at: `https://yourusername.github.io/community/`
   - Or if using a custom domain, configure DNS settings

### Customization Guide

#### Add Real Images
1. Replace placeholder images in `assets/images/` with actual community photos
2. Update image references in `index.html` if using different filenames

#### Update Contact Information
1. Edit `index.html` - Contact section
2. Update phone, email, and address

#### Modify Colors
1. Edit `assets/css/style.css`
2. Update CSS custom properties (variables) in the `:root` section:
   ```css
   :root {
       --primary-color: #2c3e50;      /* Main header color */
       --secondary-color: #3498db;    /* Accent color */
       --accent-color: #e74c3c;       /* Highlight color */
       /* ... other colors */
   }
   ```

#### Add Newsletter/Feedback Backend
The current implementation includes form validation but stores data in browser memory only.
To persist data, integrate with:
- Formspree (Easy, free form submissions)
- Firebase (Real-time database)
- SendGrid API (Email notifications)

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

### Features

✅ **Phase 1 Features Implemented:**
- Mobile-friendly responsive design
- Single-page layout with tab navigation
- Notice Board with announcement management
- Events & notifications with image gallery
- Photo/Video Gallery (responsive grid)
- Contact Us with contact information and message form
- Feedback Form with category selection
- Weekly Newsletter subscription and archives section
- Smooth animations and transitions
- Accessible form validation
- Mobile-optimized navigation

🔄 **Browser Compatibility:**
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility

The website follows WCAG 2.1 guidelines:
- Semantic HTML structure
- Proper heading hierarchy
- Form labels and validation messages
- Color contrast ratios
- Keyboard navigation support

### SEO Optimization

- Meta descriptions included
- Semantic HTML tags
- Mobile-first responsive design
- Fast loading performance
- Sitemap generation (optional, add `sitemap.xml`)

### License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

### Support & Contribution

For issues, suggestions, or contributions:
1. Create an issue on GitHub
2. Submit a pull request
3. Contact community management

### Maintenance

**Regular Updates:**
- Update notice board with announcements
- Add new events and galleries
- Update contact information as needed
- Review and respond to feedback submissions

---

**Last Updated:** March 29, 2026
**Website Version:** 1.0 (Phase 1)
**Status:** Ready for Deployment ✓

   