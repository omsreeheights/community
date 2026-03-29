# Deployment & Maintenance Guide

## GitHub Pages Deployment

### Initial Setup (One-Time)

1. **Create GitHub Repository:**
   - Go to github.com
   - Create new repository: `community`
   - Add description: "Om Sree Heights Community Portal"
   - Choose public (to enable GitHub Pages)

2. **Initialize Local Repository:**
   ```bash
   cd community
   git init
   git add .
   git commit -m "Initial commit - Om Sree Heights Community Portal v1.0"
   ```

3. **Add Remote and Push:**
   ```bash
   git remote add origin https://github.com/omsreeheights/community.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` + `/ (root)`
   - Click Save
   - Wait 1-2 minutes for deployment

5. **Verify Deployment:**
   - Site available at: `https://omsreeheights.github.io/community/`
   - Check Status in Settings → Pages

### Custom Domain Setup (Optional)

1. **Point Domain:**
   - Update DNS records with GitHub's IPs
   - Add CNAME record: `www` → `omsreeheights.github.io`

2. **Configure in Repository:**
   - Settings → Pages → Custom domain
   - Enter: `omsreeheights.com`
   - Check "Enforce HTTPS"

## Regular Maintenance Tasks

### Weekly Tasks
- [ ] Review notice board entries
- [ ] Check feedback submissions (if backend integrated)
- [ ] Monitor newsletter subscriptions

### Monthly Tasks
- [ ] Update gallery with new community photos
- [ ] Post new events
- [ ] Review and respond to contact form messages
- [ ] Archive old newsletters
- [ ] Check for broken links

### Quarterly Tasks
- [ ] Review website analytics
- [ ] Update content for accuracy
- [ ] Test all forms and features
- [ ] Review performance metrics
- [ ] Plan upcoming events

### Yearly Tasks
- [ ] Major content review and update
- [ ] Security audit
- [ ] Performance optimization
- [ ] Gather user feedback for improvements

## Updating Content

### Add a Notice Board Post

1. Edit `index.html`
2. Find the `#notice-board` section
3. Add new notice item before existing ones:
   ```html
   <div class="notice-item">
       <div class="notice-header">
           <h3>Your Notice Title</h3>
           <span class="notice-date">Date</span>
       </div>
       <p>Your notice content here...</p>
   </div>
   ```
4. Commit and push changes

### Add an Event

1. Edit `index.html`
2. Find the `#events` section
3. Add new event:
   ```html
   <div class="event-item">
       <div class="event-header">
           <h3>Event Title</h3>
           <span class="event-date">Date</span>
       </div>
       <p class="event-description">Event description...</p>
       <div class="event-gallery">
           <img src="assets/images/event.png" alt="Event name">
       </div>
   </div>
   ```

### Add Gallery Images

1. Save high-quality images to `assets/images/`
2. Keep file sizes reasonable (< 500KB per image)
3. Edit HTML gallery section and add:
   ```html
   <div class="gallery-item">
       <img src="assets/images/image-name.png" alt="Description">
       <p class="gallery-caption">Image Caption</p>
   </div>
   ```

## Backup & Recovery

### Automatic Backups
- GitHub provides automatic version control
- All changes are tracked and reversible
- Access commit history: Repository → Commits

### Manual Backup
```bash
# Clone entire history
git clone https://github.com/omsreeheights/community.git backup-2026-03

# Create local archives
git archive --format zip --output community-backup.zip HEAD
```

## Performance Optimization

### Image Optimization
```bash
# Resize images to appropriate dimensions
# Compress: Use ImageOptim, TinyPNG, or equivalent
# Use WebP format for smaller file sizes
```

### Caching Headers
GitHub Pages automatically sets cached headers for static assets.

### CDN Considerations
- GitHub Pages uses Cloudflare CDN (global distribution)
- No additional configuration needed

## Monitoring & Analytics

### Google Analytics Setup (Optional)

1. Get Google Analytics ID
2. Add to HTML head:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_ID');
   </script>
   ```

### GitHub Pages Insights
- Check Settings → Pages for deployment status
- Monitor repository traffic: Insights → Traffic

## Security Best Practices

### General Security
✅ GitHub Pages is HTTPS-enabled by default
✅ No server-side code execution (static only)
✅ Regular security updates by GitHub

### Form Security Notes
- Current forms show browser alerts (demo)
- For production, use Formspree/Firebase
- Never expose API keys in frontend code
- Use environment variables for sensitive data

### Privacy Compliance
- No user data collected by default
- If using analytics/forms, add Privacy Policy
- Comply with GDPR requirements (if applicable)

## Troubleshooting

### Site Not Visible
```
Solution:
1. Check repository is public
2. Verify Settings → Pages is enabled
3. Wait 2-3 minutes for deployment
4. Clear browser cache and reload
```

### Images Not Loading
```
Solution:
1. Check file paths are relative (e.g., assets/images/image.png)
2. Verify image files exist in repository
3. Check filename capitalization
4. Try force-refresh (Ctrl+F5)
```

### Changes Not Reflecting
```
Solution:
1. Verify git push was successful
2. Wait 1-2 minutes for GitHub Pages rebuild
3. Check Actions tab for deployment status
4. Clear cache: Ctrl+Shift+Delete
```

### Styling Issues
```
Solution:
1. Verify CSS files are linked correctly
2. Check responsive.css is properly named
3. Check for CSS syntax errors
4. Verify media queries are working
```

## Rollback Changes

If you need to revert to a previous version:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert <commit-hash>
git push origin main

# Or reset to previous state
git reset --hard <commit-hash>
git push origin main --force
```

## Cost Analysis

| Component | Cost |
|-----------|------|
| GitHub Pages Hosting | FREE |
| Custom Domain (optional) | $10-15/year |
| Email Service (optional) | FREE - $50/month |
| Analytics (optional) | FREE |
| **TOTAL** | **FREE** |

## Support Resources

- **GitHub Pages Docs:** https://pages.github.com/
- **GitHub Guides:** https://guides.github.com/
- **Markdown Help:** https://guides.github.com/features/mastering-markdown/
- **Community Issues:** Create GitHub Issue

---

**Document Version:** 1.0
**Last Updated:** March 29, 2026
**Maintained By:** Om Sree Heights Management
