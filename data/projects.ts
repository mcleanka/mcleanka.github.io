import {
    Award,
    Smartphone,
    Ticket,
    Trees,
    TrendingUp,
    Recycle,
    Users,
    ShoppingCart
} from 'lucide-react';

export const projectsData: Project[] = [
    {
        id: 'crvs-system',
        title: 'CRVS System - National Registration Bureau',
        description: 'Led the development of a comprehensive Civil Registration and Vital Statistics system for Malawi\'s National Registration Bureau. The system handles birth and death registrations, certificate printing, and serves over 8 million records with load balancing and offline capabilities.',
        technologies: ['React', 'Node.js', 'Docker', 'Ubuntu Server', 'MinIO', 'AI Integration'],
        category: 'featured',
        icon: Award,
        gradient: 'from-green to-light-navy',
        status: 'government',
        organization: 'Government Project'
    },
    {
        id: 'skills-app',
        title: 'Next Generation Skills App',
        description: 'Led development of the Minister of Education\'s flagship mobile application for skills development, now deployed nationwide across Malawi. Built with modern cross-platform technologies for maximum reach and accessibility.',
        technologies: ['React Native', 'Svelte', 'Kotlin', 'Node.js'],
        category: 'featured',
        icon: Smartphone,
        gradient: 'from-green to-light-navy',
        status: 'live',
        organization: 'Ministry of Education',
        isReversed: true
    },
    {
        id: 'pos-system',
        title: 'Point-of-Sale System',
        description: 'Full-featured POS system with online payments, offline transaction support, and automatic cloud synchronization. Designed for reliability in poor connectivity areas.',
        technologies: ['React.js', 'Node.js', 'MySQL', 'Cloud Sync'],
        category: 'noteworthy',
        icon: ShoppingCart,
        externalLink: 'https://mcleanka.github.io/'
    },
    {
        id: 'event-management',
        title: 'Event Management & Ticketing',
        description: 'Complete event booking platform with secure payments, QR-code validation, and automated email confirmations. Built for scalability and reliability.',
        technologies: ['Next.js', 'Kotlin', 'QR Codes', 'Payment APIs'],
        category: 'noteworthy',
        icon: Ticket,
        externalLink: 'https://mcleanka.github.io/'
    },
    {
        id: 'forest-monitoring',
        title: 'Nkhalango Forest Monitoring',
        description: 'IoT-based forest monitoring system using AI to analyze soil properties, monitor tree populations, and provide remote alerts for environmental changes like fires.',
        technologies: ['Python', 'React', 'Laravel', 'IoT Sensors'],
        category: 'noteworthy',
        icon: Trees,
        externalLink: 'https://mcleanka.github.io/'
    },
    {
        id: 'mlw-management',
        title: 'MLW Information Management',
        description: 'Comprehensive information management system for Malawi Liverpool Wellcome Trust with advanced reporting and data visualization capabilities.',
        technologies: ['React', 'ASP.NET', 'Power BI', 'SharePoint'],
        category: 'noteworthy',
        icon: TrendingUp,
        organization: 'MLW'
    },
    {
        id: 'garbage-monitoring',
        title: 'Smart Garbage Monitoring',
        description: 'IoT system for monitoring garbage bin levels with real-time web dashboard for efficient waste management and collection optimization.',
        technologies: ['C++', 'Laravel', 'IoT Sensors', 'Real-time'],
        category: 'noteworthy',
        icon: Recycle,
        externalLink: 'https://mcleanka.github.io/'
    },
    {
        id: 'church-system',
        title: 'Church Monitoring System',
        description: 'Web-based management system for Kapaza CCAP church operations including member management, attendance tracking, financial records, and event scheduling.',
        technologies: ['Web App', 'Database', 'Analytics', 'Scheduling'],
        category: 'noteworthy',
        icon: Users,
        organization: 'CCAP'
    }
];