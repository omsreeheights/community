# Monthly Theme System

## Overview

The Om Sree Heights website now features an **automatic monthly color theme system** that changes the color scheme based on the current month and date. The themes are carefully designed to reflect seasonal celebrations and cultural festivals throughout the year.

## How It Works

### Automatic Detection
- The system automatically detects the current month on page load
- Checks every minute for date changes (in case the website stays open past midnight)
- When the month changes, the theme automatically updates
- No user action or page refresh required!

### Smooth Transitions
- Color changes happen smoothly with 0.6-second transitions
- All elements that use theme colors fade to new colors elegantly
- Creates a seamless visual experience

## Monthly Themes

| Month | Theme | Primary Color | Secondary Color | Accent Color | Festival/Reason |
|-------|-------|---------------|-----------------|--------------|-----------------|
| January | Winter | Deep Blue (#1a5276) | Light Blue (#2874a6) | Golden (#f39c12) | New Year |
| February | Spring | Deep Red (#7b241c) | Vibrant Red (#d63031) | Pink (#ff6b9d) | Valentine's Day / Spring Start |
| March | Holi | Green (#27ae60) | Teal (#16a085) | Orange (#f39c12) | Holi Festival |
| April | Summer | Orange (#e67e22) | Golden (#f39c12) | Red (#c0392b) | Summer Season |
| May | May Fest | Purple (#8e44ad) | Light Purple (#9b59b6) | Sky Blue (#3498db) | Mid-Year Festival |
| June | Monsoon | Teal (#16a085) | Bright Teal (#1abc9c) | Blue (#2980b9) | Monsoon Season |
| July | Midsummer | Blue (#2980b9) | Sky Blue (#3498db) | Green (#27ae60) | Peak Summer |
| August | Independence | Red (#c0392b) | Orange (#f39c12) | Green (#0e3c26) | Indian Independence Day |
| September | Education | Dark Slate (#2c3e50) | Slate (#34495e) | Blue (#3498db) | Back to School |
| October | Festive | Deep Red (#7b241c) | Bright Red (#d63031) | Gold (#f39c12) | Dussehra / Durga Puja |
| November | Diwali | Gold (#f39c12) | Orange (#e67e22) | Red (#c0392b) | Diwali Festival |
| December | Winter Celebration | Green (#27ae60) | Red (#c0392b) | Cream (#fff9e6) | Christmas / Year End |

## What Changes

The following elements update with the monthly theme:

✅ **Header** - Background gradient using primary and secondary colors  
✅ **Navigation Tabs** - Tab styling and active states  
✅ **Content Cards** - Notice board, events, gallery items  
✅ **Buttons** - Submit and action buttons  
✅ **Footer** - Footer background  
✅ **Accents** - Borders, highlights, and emphasis elements  
✅ **Background Colors** - Subtle light backgrounds for sections  

## Technical Details

### CSS Variables Updated
```css
--primary-color      /* Main header and footer color */
--secondary-color    /* Tab and button backgrounds */
--accent-color       /* Active states and highlights */
--light-bg           /* Card and section backgrounds */
```

### JavaScript Functions

**`initMonthlyTheme()`** - Initializes theme on page load  
**`applyMonthlyTheme()`** - Applies colors from current month's palette  
**`checkDateChange()`** - Runs every 60 seconds to detect month changes  
**`getMonthName(monthNum)`** - Converts month number to name  
**`displayThemeInfo()`** - Shows theme indicator (localhost only)  

### Theme Information Indicator

A small theme indicator appears in the bottom-left corner when viewing on **localhost** (development mode):
- Shows current theme name
- Shows month name
- Fades to 60% opacity (can hover to see better)
- Hidden in production (GitHub Pages)

## Customization

### Modify a Month's Theme

**File:** `assets/js/script.js`  
**Location:** Find the `monthlyThemes` object

```javascript
monthlyThemes = {
    0: { // January
        name: 'Winter',
        primary: '#1a5276',      // Change this color
        secondary: '#2874a6',    // Change this color
        accent: '#f39c12',       // Change this color
        light_bg: '#d6eaf8'      // Change this color
    },
    // ... other months
}
```

### Add a New Color Alternative

Edit the theme object (e.g., add a border color):

```javascript
0: {
    name: 'Winter',
    primary: '#1a5276',
    secondary: '#2874a6',
    accent: '#f39c12',
    light_bg: '#d6eaf8',
    border_color: '#0d3b66'  // Add new variable
}
```

Then update the JavaScript to apply it:

```javascript
root.style.setProperty('--border-color', theme.border_color);
```

### Disable Theme Indicator

In `assets/js/script.js`, find `displayThemeInfo()` function and comment out:

```javascript
// if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
//     document.body.appendChild(themeInfo);
// }
```

Or remove the entire `displayThemeInfo()` call.

## Accessibility Considerations

✅ Color choices maintain WCAG AA contrast ratios  
✅ Text remains readable on all theme backgrounds  
✅ Transitions are smooth but can be disabled in user preferences  
✅ Theme changes don't affect keyboard navigation  

## Browser Support

The monthly theme system works on all modern browsers:

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)  

## Performance Impact

⚡ **Minimal performance impact:**
- One theme check per minute (lightweight)
- CSS transitions use GPU acceleration
- No layout recalculations
- Total JavaScript: ~8 KB

## API Reference

### monthlyThemes Object

```javascript
monthlyThemes = {
    [monthNumber]: {
        name: string,              // Display name of theme
        primary: hexColor,         // Primary color
        secondary: hexColor,       // Secondary color
        accent: hexColor,          // Accent color
        light_bg: hexColor         // Light background color
    }
}
```

### Functions

**`applyMonthlyTheme()`**
- Applies the current month's color palette
- Triggers smooth transitions
- Logs theme info to console

**`checkDateChange()`**
- Checks if month has changed
- Calls `applyMonthlyTheme()` if needed
- Runs every 60 seconds automatically

**`getMonthName(monthNum: number): string`**
- Returns full month name
- Example: `getMonthName(0)` → "January"

## Testing

### Test Locally

1. Open website in browser
2. Check browser console (F12)
3. You should see: `🎨 Monthly Theme Applied: [Theme Name] (Month Name)`
4. Look for theme indicator in bottom-left corner
5. Verify colors match expected theme

### Test Theme Change

To simulate a month change without waiting:

1. Open browser console (F12)
2. Run: `currentMonth = 3; applyMonthlyTheme();`
3. Theme should change to "Summer" theme
4. Colors and styling should update smoothly

### Testing Checklist

✅ Theme loads on page load  
✅ Correct theme for current month  
✅ Colors transition smoothly  
✅ All elements update (header, tabs, buttons, footer)  
✅ Forms remain functional with new colors  
✅ Text remains readable  
✅ No console errors  

## FAQ

**Q: Will the theme change if I keep the website open past midnight?**  
A: Yes! The system checks every minute and automatically updates when the month changes.

**Q: Can visitors customize the theme?**  
A: Currently, themes are automatic and match the date. Future versions could add theme selector.

**Q: Do the themes affect mobile users?**  
A: Yes! The themes work identically on all devices - desktop, tablet, mobile.

**Q: What if I don't like the current month's theme?**  
A: You can modify any theme in the `monthlyThemes` object in `assets/js/script.js`.

**Q: Does this affect performance?**  
A: No, the impact is negligible - just a date check each minute and CSS transitions.

**Q: Can I test different months?**  
A: Yes! Use the console method mentioned in the Testing section above.

---

**Last Updated:** March 29, 2026  
**Feature Status:** ✓ Active  
**Browser Support:** All Modern Browsers
