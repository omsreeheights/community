// ===== CONFIGURATION FILE =====
// This file separates ALL CONTENT from styling/UI
// Modify this file to change content without touching CSS or HTML structure

const CONFIG = {
    // Site metadata
    siteName: 'Om Sree Heights Community',
    cooperativeName: 'Om Sree Heights Flat Owners Maintenance Mutually Aided Cooperative Society Ltd',
    totalFlats: 600,
    location: 'Hislop Road, Kowkoor Village, Alwal Mandal, Medchal-Malkajgiri, Telangana, India 500010',
    managementEmail: 'management@omsreeheights.com',
    complaintsEmail: 'complaints@omsreeheights.com',
    generalEmail: 'contact@omsreeheights.com',
    managementPhone: '+91-9876-543210',
    emergencyPhone: '+91-9876-543211',
    officePhone: '+91-9876-543212',
    
    // Hero section content
    hero: {
        title: 'Welcome to Om Sree Heights Community',
        subtitle: 'A thriving residential community of 600 flats dedicated to mutual cooperation and welfare'
    },

    // Announcements - Critical notices and updates
    announcements: [
        {
            id: 1,
            date: 'Mar 21, 2026',
            title: 'Q1 Maintenance Collection Due (March 2026)',
            description: 'Quarterly maintenance charges for Q1 (Jan-Mar 2026) are due by March 31st. Payment can be made at the Management Office or through online banking. Account details available on notice board. Late payments will incur a 2% monthly interest.'
        },
        {
            id: 2,
            date: 'Mar 18, 2026',
            title: 'Annual General Meeting - April 5, 2026',
            description: 'The Annual General Meeting (AGM) will be held on April 5, 2026 at 6:00 PM in the Community Hall. Important topics: Budget approval, Board elections, infrastructure projects. All flat owners are encouraged to attend. Proxy voting available.'
        },
        {
            id: 3,
            date: 'Mar 15, 2026',
            title: 'New Security Protocol Implementation',
            description: 'Effective April 1st, new security protocols will be in place. All visitors must register at the main gate. Delivery personnel should use the dedicated service entrance. Residential passes will be renewed. Guards will enforce these rules strictly.'
        },
        {
            id: 4,
            date: 'Mar 12, 2026',
            title: 'Scheduled Water Tank Maintenance',
            description: 'Water tank maintenance is scheduled for March 22nd from 10 AM to 4 PM. Water supply will be unavailable during this period. Residents are requested to store sufficient water. We regret any inconvenience.'
        },
        {
            id: 5,
            date: 'Mar 10, 2026',
            title: 'Parking Zone Updates - Important Notice',
            description: 'New parking regulations are now in effect. Each flat is entitled to 1 designated parking space in their zone. Additional vehicle parking requires special permission from management. Violators will be fined ₹500 per day.'
        },
        {
            id: 6,
            date: 'Mar 8, 2026',
            title: 'Community Garden Expansion Phase 2',
            description: 'We are pleased to announce Phase 2 of our community garden project. Residents interested in gardening can register at the office. Free seedlings and tools will be provided. Next meeting: March 25th at 5 PM near the garden.'
        },
        {
            id: 7,
            date: 'Mar 5, 2026',
            title: 'Electricity Meter Audit - Notification',
            description: 'Annual electricity meter audit will commence from March 20th. An authorized technician will visit each flat. Please ensure access to your meter. If you miss the appointment, a re-visit fee of ₹100 will be charged.'
        },
        {
            id: 8,
            date: 'Mar 1, 2026',
            title: 'New Complaint Redressal System Online',
            description: 'We have launched an online complaint system for faster resolution. Visit our website portal, click "File Complaint", and track your complaint status in real-time. For urgent issues, call 9876-543211.'
        }
    ],

    // Events - Community activities and meetings
    events: [
        {
            id: 1,
            month: 'Apr',
            day: '05',
            title: 'Annual General Meeting (AGM)',
            description: 'Budget approval, Board elections, and discussion of community matters. All residents welcome. Refreshments provided.',
            time: '6:00 PM - 8:00 PM',
            location: 'Community Hall'
        },
        {
            id: 2,
            month: 'Apr',
            day: '15',
            title: 'Community Cleanup Drive',
            description: 'Join us in cleaning and beautifying our community premises. Tools and refreshments provided. Great way to meet neighbors!',
            time: '7:00 AM - 10:00 AM',
            location: 'Common areas'
        },
        {
            id: 3,
            month: 'May',
            day: '03',
            title: 'Summer Sports Day',
            description: 'Fun sports activities for all age groups: badminton, table tennis, cricket, races. Prizes and certificates for all participants.',
            time: '6:00 AM - 12:00 PM',
            location: 'Sports Ground'
        },
        {
            id: 4,
            month: 'May',
            day: '18',
            title: 'Community Yoga & Wellness Session',
            description: 'Monthly yoga and fitness session for health-conscious residents. All levels welcome. Bring your mat or a towel.',
            time: '6:30 AM - 7:30 AM',
            location: 'Open Air Pavilion'
        },
        {
            id: 5,
            month: 'Jun',
            day: '01',
            title: 'Monsoon Preparedness Workshop',
            description: 'Learn about monsoon maintenance, water harvesting, and safety measures. Expert speakers from municipal corporation.',
            time: '5:00 PM - 6:30 PM',
            location: 'Community Hall'
        },
        {
            id: 6,
            month: 'Jul',
            day: '20',
            title: 'Summer Kids Camp & Games',
            description: 'Fun activities, games, and learning sessions for children aged 5-15. Art, music, sports and more. Register at office.',
            time: '9:00 AM - 12:00 PM',
            location: 'Community Center'
        },
        {
            id: 7,
            month: 'Aug',
            day: '15',
            title: 'Independence Day Celebration',
            description: 'Flag hoisting, cultural programs, and community gathering. Food and refreshments. Patriotic songs and activities.',
            time: '8:00 AM - 10:00 AM',
            location: 'Main Grounds'
        },
        {
            id: 8,
            month: 'Oct',
            day: '02',
            title: 'Gandhi Jayanti Celebration',
            description: 'Homage to Mahatma Gandhi. Documentary screening, discussion on values, and community service activities.',
            time: '9:00 AM - 11:00 AM',
            location: 'Community Hall'
        },
        {
            id: 9,
            month: 'Nov',
            day: '10',
            title: 'Diwali Festival Celebration',
            description: 'Community Diwali celebration with rangoli competition, sweet distribution, and light display. Family event.',
            time: '4:00 PM - 8:00 PM',
            location: 'Common Areas & Grounds'
        },
        {
            id: 10,
            month: 'Dec',
            day: '25',
            title: 'Christmas & Year-End Party',
            description: 'Christmas celebrations with carols, games, prizes, and dinner. Year-end party with all community members.',
            time: '5:00 PM - 9:00 PM',
            location: 'Community Hall'
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

    // About Section - Community information
    about: {
        title: 'About Om Sree Heights Community',
        mainText: 'Om Sree Heights is a well-established residential cooperative society comprising 600 flats, located in the peaceful Kowkoor village area of Alwal Mandal. Founded on the principles of mutual cooperation and community welfare, we have built a thriving community where residents enjoy modern amenities, excellent security, and active social engagement. Our cooperative is managed by an elected Board of Directors who work tirelessly to maintain high standards and implement development projects.',
        additionalText: 'With over a decade of operation, Om Sree Heights has become a model residential community. We pride ourselves on transparent management, participatory governance, and commitment to resident satisfaction. Our diverse community of 600 families from various backgrounds has fostered a culture of harmony and mutual support. We believe in sustainable living practices and continuously work towards improving infrastructure and quality of life.',
        features: [
            { 
                title: '24/7 Security & Safety', 
                description: 'Round-the-clock trained security personnel at all entrances, CCTV surveillance across 200+ locations, and emergency response team. Secured entry with visitor management system.' 
            },
            { 
                title: 'Modern Amenities', 
                description: 'Fully equipped gymnasium, community hall for events, children\'s play area, basketball court, multi-purpose sports ground, and landscaped gardens.' 
            },
            { 
                title: 'Professional Management', 
                description: 'Transparent accounts, regular maintenance, on-time bill collection system, online payment options, and dedicated complaint redressal.' 
            },
            { 
                title: 'Active Community', 
                description: 'Monthly cultural events, sports competitions, wellness programs, celebration of festivals, and resident welfare initiatives.' 
            }
        ]
    },

    // Contact Information - Multiple contact points for different needs
    contact: {
        address: {
            icon: '📍',
            title: 'Address',
            details: 'Om Sree Heights Management Office\nHislop Road, Kowkoor Village\nAlwal Mandal, Medchal-Malkajgiri\nTelangana, India 500010'
        },
        phone: {
            icon: '📞',
            title: 'Phone Numbers',
            details: 'Management Office: +91-9876-543210\nComplaints: +91-9876-543211\nEmergency: +91-9876-543212'
        },
        email: {
            icon: '📧',
            title: 'Email',
            details: 'General Inquiries: contact@omsreeheights.com\nManagement: management@omsreeheights.com\nComplaints: complaints@omsreeheights.com'
        },
        hours: {
            icon: '🕐',
            title: 'Office Hours',
            details: 'Monday - Friday: 10:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday & Holidays: Closed\nEmergencies: 24/7 availability'
        }
    },

    // Facilities - Community amenities available
    facilities: [
        {
            id: 1,
            name: '24/7 Security',
            description: 'Trained security personnel at main gate and emergency team. CCTV coverage in all common areas. Visitor and vehicle management system.',
            icon: '🔒'
        },
        {
            id: 2,
            name: 'Gymnasium',
            description: 'Fully equipped gym with modern exercise equipment, trained instructors, and flexible membership plans.',
            icon: '💪'
        },
        {
            id: 3,
            name: 'Community Hall',
            description: 'Multi-purpose hall available for resident meetings, celebrations, and community events. Capacity: 200+ people.',
            icon: '🏛️'
        },
        {
            id: 4,
            name: 'Sports Ground',
            description: 'Multi-purpose sports facility for badminton, volleyball, cricket, and other games. Well-maintained lawn.',
            icon: '⚽'
        },
        {
            id: 5,
            name: 'Children\'s Play Area',
            description: 'Safe, fenced play area with modern equipment and regular maintenance. Supervised during peak hours.',
            icon: '🎡'
        },
        {
            id: 6,
            name: 'Community Garden',
            description: 'Landscaped gardens and green spaces for relaxation. Now expanding with organic vegetable garden section.',
            icon: '🌿'
        },
        {
            id: 7,
            name: 'Water & Power',
            description: 'Reliable water supply with dual storage tanks, regular maintenance, and power backup with 24-hour DG support.',
            icon: '💧'
        },
        {
            id: 8,
            name: 'Waste Management',
            description: 'Scientific waste management with segregation, composting, and regular pickup. Cleanliness drives every month.',
            icon: '♻️'
        }
    ],

    // Governing Board - Leadership information
    board: {
        chairman: {
            name: 'Mr. Rajesh Kumar',
            position: 'Chairman',
            contact: '9876-543220'
        },
        viceChairman: {
            name: 'Ms. Priya Sharma',
            position: 'Vice Chairwoman',
            contact: '9876-543221'
        },
        secretary: {
            name: 'Mr. Suresh Patel',
            position: 'Secretary',
            contact: '9876-543222'
        },
        treasurer: {
            name: 'Mr. Arun Verma',
            position: 'Treasurer',
            contact: '9876-543223'
        }
    },

    // Important Links - Quick access to resources
    importantLinks: [
        {
            id: 1,
            title: 'Pay Maintenance Online',
            description: 'Secure online payment portal for quarterly/annual maintenance charges',
            link: '#',
            icon: '💳'
        },
        {
            id: 2,
            title: 'File a Complaint',
            description: 'Submit and track complaints through our online redressal system',
            link: '#',
            icon: '📝'
        },
        {
            id: 3,
            title: 'View Members',
            description: 'Member directory with contact details (accessible to residents only)',
            link: '#',
            icon: '👥'
        },
        {
            id: 4,
            title: 'Download Documents',
            description: 'Important documents: bye-laws, meeting minutes, audit reports',
            link: '#',
            icon: '📄'
        },
        {
            id: 5,
            title: 'Notice Board',
            description: 'View all latest notices and announcements',
            link: '#',
            icon: '📌'
        },
        {
            id: 6,
            title: 'Gallery',
            description: 'View photos from community events and activities',
            link: '#',
            icon: '📸'
        }
    ],

    // Rules & Regulations - Community guidelines
    rules: {
        title: 'Community Rules & Regulations',
        categories: [
            {
                name: 'General Rules',
                rules: [
                    'Maintain cleanliness in common areas',
                    'Respect quiet hours (9 PM - 7 AM)',
                    'Dispose waste properly (segregated system)',
                    'No throwing water/objects from balconies',
                    'Keep parking zones clean and organized'
                ]
            },
            {
                name: 'Parking Regulations',
                rules: [
                    'Each flat entitled to 1 registered parking space',
                    'Guest parking available (₹20/day)',
                    'No parking in common areas or fire lanes',
                    'Two-wheeler parking in designated area only',
                    'Violation penalty: ₹500/day'
                ]
            },
            {
                name: 'Pet Policy',
                rules: [
                    'Pet registration required at management office',
                    'Pets must be vaccinated and have valid documents',
                    'Keep pets away from common areas',
                    'Pet owners responsible for any damage',
                    'Maximum 1 pet per flat'
                ]
            },
            {
                name: 'Guest Policy',
                rules: [
                    'Guests must be registered at main gate',
                    'Long-term guests (>15 days) need approval',
                    'Guests must follow community rules',
                    'No gatherings beyond 11 PM',
                    'Resident responsible for guest behavior'
                ]
            }
        ]
    },

    // FAQ Section
    faq: [
        {
            id: 1,
            question: 'What are the maintenance charges and payment schedule?',
            answer: 'Maintenance charges vary based on flat size. Quarterly charges are due by the last day of each quarter. Annual breakdown: Q1 (Jan-Mar), Q2 (Apr-Jun), Q3 (Jul-Sep), Q4 (Oct-Dec). Online payment available with no additional charges.'
        },
        {
            id: 2,
            question: 'How do I file a complaint or grievance?',
            answer: 'You can file complaints through: 1) Online portal on our website, 2) Visit management office, 3) Call complaints hotline: 9876-543211. All complaints are tracked and resolved within 7 days. You will receive regular updates on complaint status.'
        },
        {
            id: 3,
            question: 'What is the guest policy?',
            answer: 'Guests must be registered at the main gate. For guests staying more than 15 days, prior approval from management is required. All guests must follow community rules. Residents are responsible for guest conduct and any violations.'
        },
        {
            id: 4,
            question: 'How can I book the Community Hall for events?',
            answer: 'Contact the management office at least 2 weeks in advance. Booking fee: ₹500 (residents), ₹1000 (non-residents). Security deposit: ₹5000 (refundable). Hall capacity: 200+ people. Available 10 AM to 10 PM.'
        },
        {
            id: 5,
            question: 'What amenities are available and are there membership fees?',
            answer: 'Gymnasium (₹500/month), community hall (booking fee), sports ground (free), play area (free), gardens (free). Swimming pool and yoga classes coming soon. Detailed rates available at management office.'
        },
        {
            id: 6,
            question: 'How often is the Annual General Meeting held?',
            answer: 'AGM is held every April to approve annual budget, elect board members, and discuss community matters. Special General Meetings held as needed. All flat owners have voting rights. Information sent 2 weeks in advance.'
        }
    ]
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
