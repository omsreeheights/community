# 2026 Calendar Feature

## Overview

The Om Sree Heights Community Portal now includes an interactive **2026 Calendar** with integrated event management. The calendar displays important community dates, festivals, and events throughout the year.

## Features

### Core Calendar Features

✅ **Full Year 2026 View** - Navigate through all 12 months  
✅ **Month Navigation** - Previous/Next buttons to browse months  
✅ **Current Date Highlighting** - Today's date shown in secondary color  
✅ **Event Markers** - Dates with events highlighted in accent color  
✅ **Date Selection** - Click any date to see details  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Color Theme Integration** - Calendar colors follow the monthly theme system  

### Interactive Elements

- **Navigation Buttons** - Easily jump between months
- **Date Selection** - Click dates to view event details
- **Info Banner** - Shows selected date or event information
- **Events List** - Displays upcoming events based on selected month
- **Visual Indicators** - Shows which dates have associated events

## 2026 Community Events

The calendar includes 19 pre-configured important dates:

| Date | Event | Description |
|------|-------|-------------|
| Jan 26 | Republic Day Celebration | Community gathering for national celebration |
| Feb 14 | Valentine's Day Event | Special community gathering |
| Feb 26 | Holi Celebration | Festival of colors celebration |
| Mar 25 | Society General Meeting | Monthly general meeting at 6:00 PM |
| Apr 01 | Festival of Joy | Community festival and celebrations |
| Apr 15 | Society General Meeting | Monthly general meeting |
| May 05 | Maintenance Reminder | Monthly maintenance fee due date |
| Jun 15 | Sports Day Preparation | Planning meeting for annual sports day |
| Jul 04 | Independence Day Preparation | Decorations and planning start |
| Aug 15 | Independence Day | National holiday and community celebration |
| Aug 25 | Janmashtami | Festival of Lord Krishna |
| Sep 20 | Back to School Event | Community support for students |
| Oct 02 | Gandhi Jayanti | National holiday |
| Oct 15 | Dussehra Celebration | Festival celebration and events |
| Oct 25 | Durga Puja | Cultural festival celebrations |
| Nov 08 | Diwali Preparation | Community gathering and decorations |
| Nov 15 | Diwali Celebration | Festival of lights - Grand celebration |
| Dec 15 | Annual General Body Meeting | Yearly community meeting |
| Dec 25 | Christmas Celebration | Holiday festivities |

## How to Use

### Navigating the Calendar

1. **Access Calendar** - Click the "Calendar" tab (📆) in the navigation
2. **Browse Months** - Use "← Previous" and "Next →" buttons to navigate
3. **Select Date** - Click any date in the current month to view details
4. **View Events** - Check the "Upcoming Events" section for event list

### Understanding the Colors

| Color | Meaning |
|-------|---------|
| Secondary Color | Today's date (current day) |
| Accent Color | Date with event/celebration |
| Light Gray | Dates from other months |
| White | Regular dates with no events |

### Legend

The calendar includes a legend explaining:
- **Today** - Highlighted with secondary color
- **Event Day** - Highlighted with accent color
- **Other Month** - Grayed out dates from adjacent months

## Customization

### Add New Event

**File:** `assets/js/script.js`  
**Location:** Find the `communityEvents` object

```javascript
const communityEvents = {
    '2026-01-26': { 
        title: 'Your Event Title', 
        description: 'Event description here' 
    },
    // Add more events...
};
```

**Format:**
- Date must be in `YYYY-MM-DD` format
- Title: Event name (short)
- Description: Event details (can be longer)

### Remove Event

Simply delete the date entry from the `communityEvents` object:

```javascript
// Remove this entire line to delete the event
'2026-02-14': { title: 'Valentine\'s Day Event', description: 'Special community gathering' },
```

### Modify Event Details

Edit the title or description:

```javascript
'2026-03-25': { 
    title: 'Updated Meeting Title',  // Change this
    description: 'New description'    // Or this
},
```

### Change Default Calendar Month

**File:** `assets/js/script.js`  
**Location:** Find calendar initialization

```javascript
let currentCalendarMonth = new Date().getMonth();  // 0 = January, 11 = December
let currentCalendarYear = 2026;
```

To start on a specific month:
```javascript
let currentCalendarMonth = 3;  // April (0-indexed)
```

## Technical Details

### Calendar Functions

**`initCalendar()`** - Initializes calendar and event listeners  
**`renderCalendar()`** - Renders the calendar grid for current month  
**`createDayElement()`** - Creates individual day elements  
**`selectDate(dateStr, element)`** - Handles date selection  
**`updateEventsList()`** - Updates upcoming events display  
**`previousMonth()`** - Navigate to previous month  
**`nextMonth()`** - Navigate to next month  

### CSS Classes

```css
.calendar-day             /* Individual calendar date */
.calendar-day.today       /* Current date styling */
.calendar-day.has-event   /* Date with event styling */
.calendar-day.selected    /* Selected date styling */
.calendar-day.other-month /* Date from adjacent months */
```

### Data Structure

```javascript
const communityEvents = {
    'YYYY-MM-DD': {
        title: string,           // Event name
        description: string      // Event details
    }
}
```

## Browser Support

✅ All modern browsers  
✅ Desktop, tablet, mobile  
✅ Touch devices  
✅ Screen readers (semantic HTML)  

## Accessibility

✅ Semantic HTML structure  
✅ Clear visual indicators  
✅ Keyboard navigation support  
✅ Color contrast meets WCAG AA  
✅ Large touch targets on mobile  
✅ Descriptive button text  

## Performance

- Lightweight calendar rendering
- Efficient event lookup (object-based)
- Smooth animations with CSS transitions
- No external dependencies
- Integrated with monthly theme system

## Testing Checklist

✅ Calendar loads on page load  
✅ All 12 months navigable  
✅ Today's date highlighted correctly  
✅ Event dates show markers  
✅ Date selection updates info banner  
✅ Upcoming events list displays correctly  
✅ Mobile layout responsive  
✅ Colors follow theme system  
✅ No console errors  

## Integration with Monthly Themes

The calendar automatically uses the website's monthly theme colors:
- Header background: Primary + Secondary gradient
- Navigation buttons: Secondary color
- Event indicator: Accent color
- Background: Light background color

Colors transition smoothly as the month changes.

## FAQ

**Q: Can I add events for previous years?**  
A: Yes, change the date format to any `YYYY-MM-DD` format needed.

**Q: What happens if I click a date without an event?**  
A: The banner shows the date (weekday, month, day, year) without event details.

**Q: Can I change the starting month?**  
A: Yes, see "Change Default Calendar Month" in Customization section.

**Q: Do event dates carry over if I change the year?**  
A: No, events are fixed to specific dates. To add events for other years, add them to the `communityEvents` object.

**Q: Is there a way to export the calendar?**  
A: The calendar is an HTML/CSS/JS implementation. You can use browser print or screenshot functionality.

**Q: Can residents add their own events?**  
A: Currently, events are managed by moderators. Backend integration coming in Phase 2.

## Future Enhancements (Phase 2)

🔲 User-submitted event requests  
🔲 Event RSVP system  
🔲 Calendar export (iCal, PDF)  
🔲 Event reminders/notifications  
🔲 Recurring events  
🔲 Event categories/filtering  
🔲 Admin dashboard for event management  

---

**Last Updated:** March 29, 2026  
**Feature Status:** ✓ Active  
**Events Configured:** 19  
**Year Coverage:** 2026  
**Mobile Responsive:** ✓ Yes
