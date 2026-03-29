# Content Management Guide for Om Sree Heights Community Portal

## Overview
The website now uses a **Content-Separated Architecture** where content is stored separately from the presentation layer. This makes it easy to update content without touching HTML/CSS/JS files.

## Directory Structure

```
community/
├── content/                          # Content folder (separate from presentation)
│   ├── notices/                      # Individual notice markdown files
│   │   ├── notice1.md
│   │   ├── notice2.md
│   │   └── ...add more as needed
│   │
│   ├── events/                       # Individual event markdown files
│   │   ├── event1.md
│   │   ├── event2.md
│   │   └── ...add more as needed
│   │
│   ├── gallery/                      # Individual gallery item markdown files
│   │   ├── gallery1.md
│   │   ├── gallery2.md
│   │   └── ...add more as needed
│   │
│   └── calendar-events.json          # Calendar events in JSON format
│
├── index.html                        # Main HTML (presentation only)
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   └── js/
│       ├── script.js                 # Main JavaScript
│       └── content-loader.js         # Loads content from markdown files
```

## How Content Loading Works

1. **Page Loads** → `index.html` loads with empty containers
2. **JavaScript Executes** → `content-loader.js` runs automatically
3. **Content Fetched** → Markdown files are fetched from `content/` folders
4. **Content Parsed** → YAML frontmatter is extracted and parsed
5. **HTML Generated** → Dynamic HTML is created and inserted into containers
6. **Page Displays** → Users see the rendered content

## Content File Formats

### Notice Files (content/notices/*.md)

```markdown
---
title: Notice Title Here
date: 2026-03-29
priority: high
---

This is the notice content that will be displayed.
You can use multiple paragraphs.
```

**Frontmatter Fields:**
- `title` - Notice headline
- `date` - Publication date (format: YYYY-MM-DD)
- `priority` - Optional: high, medium, low

### Event Files (content/events/*.md)

```markdown
---
title: Event Name
date: 2026-04-05
time: 08:00 AM - 12:00 PM
location: Community Garden
---

Detailed description of the event goes here.
Explain what the event is about, what to bring, etc.
```

**Frontmatter Fields:**
- `title` - Event name
- `date` - Event date (YYYY-MM-DD)
- `time` - Event time
- `location` - Where the event is held

### Gallery Files (content/gallery/*.md)

```markdown
---
title: Gallery Item Title
image: https://images.unsplash.com/photo-xxx
caption: Caption to display under the image
---
```

**Frontmatter Fields:**
- `title` - Image title
- `image` - Full URL to the image
- `caption` - Text shown below image

### Calendar Events (content/calendar-events.json)

```json
{
  "2026-01-26": { "name": "Republic Day", "description": "India's Republic Day celebration" },
  "2026-03-25": { "name": "Holi", "description": "Festival of Colors" },
  "2026-08-15": { "name": "Independence Day", "description": "India's Independence Day" }
}
```

**Format:**
- Key: Date in `YYYY-MM-DD` format
- Value: Object with `name` and `description`

## How to Add Content

### Adding a New Notice

1. Create a new file: `content/notices/notice3.md`
2. Add frontmatter and content:
   ```markdown
   ---
   title: Water Supply Maintenance
   date: 2026-04-01
   ---

   Water supply will be temporarily stopped on April 1st for maintenance.
   ```
3. File automatically loads on next page refresh (if order < 99)

### Adding a New Event

1. Create a new file: `content/events/event3.md`
2. Add frontmatter:
   ```markdown
   ---
   title: Community Sports Day
   date: 2026-05-10
   time: 10:00 AM - 3:00 PM
   location: Sports Complex
   ---

   Join us for a fun day of community sports...
   ```

### Adding Gallery Items

1. Create a new file: `content/gallery/gallery3.md`
2. Add with image URL:
   ```markdown
   ---
   title: New Community Event
   image: https://your-image-url.com/photo.jpg
   caption: Our community gathered for the event
   ---
   ```

### Adding Calendar Events

Edit `content/calendar-events.json` and add:
```json
{
  "2026-05-01": { "name": "May Day", "description": "Workers' Day celebration" }
}
```

## Naming Conventions

- **Notices**: `notice1.md`, `notice2.md`, `notice3.md` (sequential)
- **Events**: `event1.md`, `event2.md`, `event3.md` (sequential)
- **Gallery**: `gallery1.md`, `gallery2.md`, `gallery3.md` (sequential)

The content-loader loads files in alphabetical/numeric order, so:
- `notice1.md` appears first
- `notice10.md` appears before `notice2.md` (lexicographic sort)

**Pro Tip**: Use zero-padding for consistent ordering: `notice01.md`, `notice02.md`, etc.

## How to Update Content

### Update an existing notice:
1. Open `content/notices/notice1.md`
2. Edit the markdown content
3. Save and refresh browser

### Update event date/time:
1. Open `content/events/event1.md`
2. Modify the frontmatter fields
3. Save and refresh

### Delete content:
- Simply delete the markdown file from the folder
- Content automatically disappears on next page load

## Benefits of This Approach

✅ **Separation of Concerns**: Content is separate from code
✅ **Easy Updates**: Non-technical users can edit markdown files
✅ **Version Control**: Track content changes in Git
✅ **Scalability**: Add hundreds of items without touching HTML/CSS/JS
✅ **Maintainability**: No need to find content within HTML tags
✅ **Flexibility**: Support multiple content types with different metadata
✅ **Future-Proof**: Can upgrade to database/CMS without changing HTML

## Technical Implementation

**content-loader.js** handles:
- Fetching markdown files from `content/` folders
- Parsing YAML frontmatter
- Extracting metadata and content
- Generating HTML from templates
- Injecting rendered HTML into page containers
- Loading calendar events from JSON
- Error handling (gracefully skips missing files)

**Key Functions:**
- `loadContent()` - Main init function
- `parseFrontmatter()` - Extracts frontmatter YAML
- `loadNotices()` - Loads all notices
- `loadEvents()` - Loads all events
- `loadGallery()` - Loads all gallery items
- `loadCalendarEvents()` - Loads calendar events

## Troubleshooting

**Content not appearing?**
- Check browser console for errors (F12 → Console)
- Verify markdown files exist in correct folders
- Check file naming (sequential numbers)
- Clear browser cache (Ctrl+Shift+Delete)

**Images not loading in gallery?**
- Verify image URL is complete and accessible
- Use HTTPS URLs for external images
- Test URL in browser address bar

**Calendar events not showing?**
- Verify JSON syntax (use https://jsonlint.com)
- Check date format (must be YYYY-MM-DD)
- Ensure decimal quotes in JSON file

## Next Steps for Enhancement

1. Add a web-based content editor (no file editing needed)
2. Connect to a database instead of markdown files
3. Implement automatic image hosting service
4. Add content versioning and history
5. Create API endpoint for mobile app access
6. Add admin panel for content management
