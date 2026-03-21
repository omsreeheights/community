# Administrator Guide - Content Management

This guide is for community leaders who need to manage the website content.

---

## 📝 What is config.js?

`config.js` is a simple **text file that holds ALL your community information**:
- Announcements
- Events
- Photos
- About us
- Contact details

**When you change something in `config.js`, the website automatically shows the changes!**

---

## ✏️ How to Edit Content

### Before You Start
1. **Install a text editor**: VS Code, Notepad++, or even Notepad works
2. **Open the file**: Right-click `config.js` → "Open with..." → Select your editor
3. **Make changes**: Edit only the text inside quotes `"like this"`

### Important Rules
- ⚠️ Don't delete `{`, `}`, `[`, `]`, or `,` symbols
- ⚠️ Always keep text inside quotes `""`
- ⚠️ Save the file after making changes
- ✅ Refresh the website to see changes

---

## 📢 Adding an Announcement

**In `config.js`, find:**
```javascript
announcements: [
    {
        id: 1,
        date: 'Mar 20, 2026',
        title: 'Maintenance Fund Update',
        description: 'Please note that quarterly...'
    },
```

**Add your announcement BEFORE the first one:**
```javascript
announcements: [
    {
        id: 0,
        date: 'Mar 25, 2026',
        title: 'YOUR ANNOUNCEMENT TITLE',
        description: 'Your announcement text goes here. You can write multiple sentences.'
    },
    {
        id: 1,
        date: 'Mar 20, 2026',
        title: 'Maintenance Fund Update',
        description: 'Please note that quarterly...'
    },
```

**Fields:**
- `id`: Just change to 0 (will be converted automatically)
- `date`: Use format `'MMM DD, YYYY'` like `'Apr 15, 2026'`
- `title`: Your announcement title
- `description`: Detailed text about the announcement

---

## 🎉 Adding an Event

**Find the `events:` section:**
```javascript
events: [
    {
        id: 1,
        month: 'Apr',
        day: '05',
        title: 'Spring Community Cleanup Drive',
        description: 'Join us for a community-wide cleanup...',
        time: '7:00 AM - 10:00 AM'
    },
```

**Add your event:**
```javascript
{
    id: 2,
    month: 'May',
    day: '10',
    title: 'YOUR EVENT NAME',
    description: 'What the event is about and what people should do',
    time: '6:00 PM - 8:00 PM'
},
```

**Fields:**
- `id`: Unique number (1, 2, 3, etc.)
- `month`: 3-letter month (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)
- `day`: Date as 2 digits (01-31)
- `title`: Event name
- `description`: What happens at the event
- `time`: Start time - End time

---

## 📸 Adding Photos to Gallery

### Step 1: Prepare Your Photo
- Take a photo or screenshot
- Save it in `assets/images/` folder
- Use format: JPG or PNG
- Good size: 800x600 pixels or larger

### Step 2: Add to config.js
**Find the `gallery:` section:**
```javascript
gallery: [
    {
        id: 1,
        src: 'assets/images/community-1.jpg',
        caption: 'Community Garden'
    },
```

**Add your photo:**
```javascript
{
    id: 7,
    src: 'assets/images/my-new-photo.jpg',
    caption: 'Description of what this photo shows'
}
```

**Fields:**
- `id`: New unique number (7, 8, 9, etc.)
- `src`: Path to your image - **must match filename exactly!**
- `caption`: Description shown when hovering over photo

---

## 👥 Updating About Section

**Find:**
```javascript
about: {
    title: 'About Om Sree Heights',
    mainText: 'Om Sree Heights is a well-established...',
    additionalText: 'Our cooperative society is governed...',
    features: [
        { title: '24/7 Security', description: '...' },
        { title: 'Modern Amenities', description: '...' },
        ...
    ]
}
```

**Edit:**
- `title`: About section heading
- `mainText`: First paragraph
- `additionalText`: Second paragraph
- `features`: List of community features (up to 4)

---

## 📞 Updating Contact Information

**Find the `contact:` section:**
```javascript
contact: {
    address: {
        icon: '📍',
        title: 'Address',
        details: 'Hislop Road, Kowkoor Village\nAlwal Mandal...'
    },
    phone: {
        icon: '📞',
        title: 'Phone',
        details: '+91-9876-543210\n+91-9876-543211'
    },
    email: {
        icon: '📧',
        title: 'Email',
        details: 'contact@omsreeheights.com\nmanagement@...'
    },
    hours: {
        icon: '🕐',
        title: 'Office Hours',
        details: 'Monday - Friday: 10:00 AM - 6:00 PM...'
    }
}
```

**Update your details:**
- Replace the text inside `'details: ...'`
- Use `\n` to create new lines
- Keep the emojis (📍📞📧🕐) or use different ones

---

## 🎨 Changing Website Colors

### Method 1: Manual Monthly Rotation (Easiest)
The website automatically changes colors based on the month!

Or let visitors manually select:
- Look for dropdown on website
- Select different month
- Colors change instantly

### Method 2: Customize Colors (Advanced)

**In `styles.css`, find your month:**
```css
body.theme-march {
    --primary-color: #2e7d32;      /* Main header color */
    --secondary-color: #43a047;    /* Secondary elements */
    --accent-color: #66bb6a;       /* Buttons and highlights */
    --bg-light: #e8f5e9;           /* Light background */
}
```

**Change color codes:**
- Find a color online: [colorpicker.com](https://colorpicker.com)
- Copy the hex code: `#2e7d32`
- Replace in file

**Color placement:**
- `primary-color`: Header and main buttons
- `secondary-color`: Secondary buttons and text
- `accent-color`: Highlights and hover effects
- `bg-light`: Background color

---

## 🚀 Testing Your Changes

### Step 1: Save the File
- In your editor: Ctrl+S (Windows) or Cmd+S (Mac)

### Step 2: Refresh Website
- In browser: F5 or Ctrl+R

### Step 3: Verify Changes
- Website should show your updates
- Check all sections updated correctly
- Test on mobile phone

---

## ⚠️ Common Mistakes

### ❌ Forgetting Commas
```javascript
// WRONG - missing comma after first item
{
    id: 1,
    date: 'Mar 20, 2026'  // ← Missing comma here!
    title: 'Title',
}

// RIGHT
{
    id: 1,
    date: 'Mar 20, 2026',  // ← Comma added
    title: 'Title',
}
```

### ❌ Breaking Quotes
```javascript
// WRONG
description: 'He said "hello" to me'  // ← Quotes conflict!

// RIGHT
description: 'He said \'hello\' to me'  // ← Use backslash before quote
```

### ❌ Wrong Image Path
```javascript
// WRONG - file doesn't exist
src: 'assets/images/photo.jpg'  // ← But file is named "Photo.jpg"

// RIGHT - must match exactly
src: 'assets/images/Photo.jpg'  // ← Capital P matches filename
```

### ❌ Format Issues
```javascript
// WRONG - date format
date: 'March 20th, 2026'  // ← Wrong format!

// RIGHT - use proper format
date: 'Mar 20, 2026'  // ← Correct format
```

---

## 🔍 Checking for Errors

If the website breaks after editing:

1. **Check for missing commas** - Most common error
2. **Check quotes** - Make sure they're paired
3. **Check braces** - `{` should have matching `}`
4. **Check brackets** - `[` should have matching `]`
5. **Visual check**: Try opening `config.js` in VS Code - it highlights errors in red

---

## 📋 Backup Your Work

Before making big changes:

1. **Copy the original file**:
   - Right-click `config.js`
   - Copy → Paste
   - Rename to `config-backup.js`

2. **If something breaks**:
   - Delete the broken version
   - Rename backup back to `config.js`

---

## 📱 Testing on Mobile

To see how the website looks on phones:

1. **Open website in browser**
2. **Press F12** to open developer tools
3. **Click phone icon** (top left of developer panel)
4. **Select different phones** to see how it looks
5. **Test all sections** - scroll and click

---

## 💾 Saving Changes

### Using VS Code (Recommended)
1. Open `config.js`
2. Make changes
3. Press Ctrl+S
4. Website updates automatically!

### Using Notepad
1. Right-click `config.js`
2. Open with Notepad
3. Make changes
4. File → Save
5. Refresh website

---

## 📞 Need Help?

**Website shows broken images?**
- Make sure image is in `assets/images/` folder
- Check filename spelling matches exactly
- Use only letters, numbers, hyphens, underscores

**Website shows errors?**
- Check for missing commas
- Check for unclosed quotes
- Check brackets are balanced

**Colors not changing?**
- Make sure you saved the file
- Refresh browser (Ctrl+Shift+R for hard refresh)
- Try different month in dropdown

---

## ✅ Tips for Success

✓ Save frequently (Ctrl+S)
✓ Make one change at a time
✓ Test after each change
✓ Keep a backup copy
✓ Don't edit HTML or CSS unless you know what you're doing
✓ Keep text in quotes and data in braces/brackets

---

## 🎓 Learning More

For technical details: See `README-SETUP.md`
For quick start: See `QUICKSTART.md`

---

**You've got this! Your community website is ready! 🎉**
