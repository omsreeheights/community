// ===== CONFIGURATION FILE =====
// This file separates ALL CONTENT from styling/UI
// Modify this file to change content without touching CSS or HTML structure

const CONFIG = {
    // Site metadata
    siteName: 'Om Sree Heights Community',
    location: 'Hislop Road, Kowkoor Village, Alwal Mandal, Medchal-Malkajgiri, Telangana 500010',
    email: 'contact@omsreeheights.com',
    phone: '+91-9876-543210',
    
    // Hero section content
    hero: {
        title: 'Welcome to Our Community',
        subtitle: 'Hislop Road, Kowkoor Village, Alwal Mandal'
    },

    // Announcements
    announcements: [
        {
            id: 1,
            date: 'Mar 20, 2026',
            title: 'Maintenance Fund Update',
            description: 'Please note that quarterly maintenance collection will be processed by March 31st. Contact management office for payment details.'
        },
        {
            id: 2,
            date: 'Mar 18, 2026',
            title: 'Community Garden Project',
            description: 'We are excited to announce the launch of our new community garden. Interested members are invited to participate in the planning meeting.'
        },
        {
            id: 3,
            date: 'Mar 15, 2026',
            title: 'New Security Gate Installation',
            description: 'Installation of new security gates at main entrance will begin next month. This is part of our community safety enhancement initiative.'
        },
        {
            id: 4,
            date: 'Mar 10, 2026',
            title: 'Water Supply Maintenance',
            description: 'Scheduled maintenance on water supply network. Water will be unavailable on March 14th from 6 AM to 12 PM.'
        }
    ],

    // Events
    events: [
        {
            id: 1,
            month: 'Apr',
            day: '05',
            title: 'Spring Community Cleanup Drive',
            description: 'Join us for a community-wide cleanup to beautify our neighborhood.',
            time: '7:00 AM - 10:00 AM'
        },
        {
            id: 2,
            month: 'Apr',
            day: '15',
            title: 'Community Fitness Marathon',
            description: 'A fun walk/run event for all age groups. Registration at the community center.',
            time: '6:00 AM - 9:00 AM'
        },
        {
            id: 3,
            month: 'May',
            day: '02',
            title: 'Summer Festival Celebration',
            description: 'Cultural programs, food stalls, and entertainment for the whole family.',
            time: '4:00 PM - 9:00 PM'
        },
        {
            id: 4,
            month: 'May',
            day: '20',
            title: 'Residents General Assembly',
            description: 'Quarterly meeting to discuss community matters and future projects.',
            time: '6:30 PM - 8:30 PM'
        }
    ],

    // Gallery images (content configuration)
    gallery: [
        {
            id: 1,
            src: 'assets/images/community-1.jpg',
            caption: 'Community Garden'
        },
        {
            id: 2,
            src: 'assets/images/community-2.jpg',
            caption: 'Sports Facility'
        },
        {
            id: 3,
            src: 'assets/images/community-3.jpg',
            caption: 'Entrance Area'
        },
        {
            id: 4,
            src: 'assets/images/community-4.jpg',
            caption: 'Recreation Center'
        },
        {
            id: 5,
            src: 'assets/images/community-5.jpg',
            caption: 'Common Area'
        },
        {
            id: 6,
            src: 'assets/images/community-6.jpg',
            caption: 'Night View'
        }
    ],

    // About Section
    about: {
        title: 'About Om Sree Heights',
        mainText: 'Om Sree Heights is a well-established residential community dedicated to providing an excellent living environment for all our residents. With modern amenities and a strong commitment to community welfare, we foster a sense of belonging and mutual cooperation.',
        additionalText: 'Our cooperative society is governed by elected representatives who work tirelessly to maintain the property, organize community events, and ensure the well-being of all residents.',
        features: [
            { title: '24/7 Security', description: 'Round-the-clock security personnel and CCTV surveillance' },
            { title: 'Modern Amenities', description: 'Community center, gym, sports facilities, and gardens' },
            { title: 'Regular Maintenance', description: 'Professional maintenance team ensuring clean premises' },
            { title: 'Community Events', description: 'Regular cultural, sports, and social activities' }
        ]
    },

    // Contact Information
    contact: {
        address: {
            icon: '📍',
            title: 'Address',
            details: 'Hislop Road, Kowkoor Village\nAlwal Mandal\nMedchal-Malkajgiri, Telangana 500010'
        },
        phone: {
            icon: '📞',
            title: 'Phone',
            details: '+91-9876-543210\n+91-9876-543211'
        },
        email: {
            icon: '📧',
            title: 'Email',
            details: 'contact@omsreeheights.com\nmanagement@omsreeheights.com'
        },
        hours: {
            icon: '🕐',
            title: 'Office Hours',
            details: 'Monday - Friday: 10:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed'
        }
    }
};

// ===== MONTHLY COLOR THEMES =====
// Map month numbers (0-11) to theme classes
const MONTHLY_THEMES = [
    'theme-january',
    'theme-february',
    'theme-march',
    'theme-april',
    'theme-may',
    'theme-june',
    'theme-july',
    'theme-august',
    'theme-september',
    'theme-october',
    'theme-november',
    'theme-december'
];

const MONTHLY_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
