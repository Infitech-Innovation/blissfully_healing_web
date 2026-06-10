//help faq

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: "journey" | "retreats" | "technical";
}

// e-books
export interface EBook {
    slug: string;
    title: string;
    author: string;
    coverImage: string;
    tag: string;
    desc: string;
    purchaseDate: string;
    pricePaid: string;
    fileSize: string;
    format: "PDF" | "EPUB" | "MOBI";
    pages: number;
    chapters: string[];
}

//healing journey
export interface JourneyMilestone {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    description: string;
    category: "retreat" | "course" | "circle" | "reflection";
    focusMarker?: string;
}

export interface ReflectionLog {
    id: string;
    date: string;
    prompt: string;
    excerpt: string;
    integrationPractice: string;
}

// purchases and transaction
export type TransactionType = "retreat" | "course" | "ebook";
export type PaymentStatus = "completed" | "processing" | "refunded";

export interface Transaction {
    id: string;
    itemName: string;
    category: TransactionType;
    date: string;
    amount: string;
    paymentMethod: string;
    receiptUrl?: string;
    status: PaymentStatus;
}

//retreats
export type RetreatStatus = "upcoming" | "attended" | "cancelled";

export interface Retreat {
    slug: string;
    tag: string;
    image: string;
    name: string;
    desc: string;
    duration: string;
    groupSize: string;
    location: string;
    price: string;
    overview: string;
    includes: string[];
    rhythm: string[];
    status: RetreatStatus;
    retreatDate: string;
}

// support groups
export interface SupportGroup {
    id: number;
    slug: string;
    name: string;
    category: string;
    facilitator: string;
    facilitatorTitle: string;
    tagline: string;
    description: string;
    schedule: string;
    time: string;
    nextSession: string;
    format: string;
    duration: string;
    members: number;
    maxMembers: number;
    status: "active" | "filling" | "upcoming";
    color: string;
    secondaryColor: string;
    icon: string;
    tags: string[];
    joined: string;
    sessionsAttended: number;
    totalSessions: number;
    price: "free" | string;
    upcomingTopics: string[];
    resources: string[];
    level: string;
}

//healing video
export interface HealingVideo {
    id: string;
    title: string;
    channelName: string;
    publishedDate: string;
    duration: string;
    description: string;
    embedUrl: string;
    thumbnail: string;
}

// blogs

// definitions.ts

export interface Author {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    body: string;
    excerpt: string;
    cover_image: string;
    cover_image_alt: string;
    author: Author;
    category: Category;
    tags: Tag[];
    is_featured: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    seo_title: string;
    seo_description: string;
    view_count: number;
    reading_time: number;
}

export interface BlogCardItem {
    href: string;
    image: string;
    title: string;
    summary: string;
    category: string;
    readTime: string;
}


//courses

interface Lesson {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
}

interface Chapter {
    id: string;
    number: number;
    title: string;
    lessons: Lesson[];
}


export type Course = {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    chapters: Chapter[];
    features: string[];
    category: string;
    imageUrl: string;
    difficulty: string;
    duration: string;
    lessons: number;
    price: string;
    progress?: number;
};

export interface EnrolledCourse extends Course {
    completedLessonIds?: string[];
    lastAccessedLessonId?: string;
    enrolledAt?: string;
}


//dashboard data i use

export const mockUser = {
    name: "Joseph",
    avatar: null,
    initials: "JO",
};

export const mockStats = [
    {
        id: "courses",
        label: "Enrolled Courses",
        value: 12,
        trend: "+3 this month",
        trendPositive: true,
        description: "Active enrollments",
        color: "blue",
    },
    {
        id: "ebooks",
        label: "E-books Library",
        value: 47,
        trend: "+8 this month",
        trendPositive: true,
        description: "Books unlocked",
        color: "emerald",
    },
    {
        id: "retreats",
        label: "Retreats Paid For",
        value: 3,
        trend: "1 upcoming",
        trendPositive: true,
        description: "Wellness retreats",
        color: "amber",
    },
    {
        id: "groups",
        label: "Support Groups",
        value: 5,
        trend: "+2 this month",
        trendPositive: true,
        description: "Active memberships",
        color: "rose",
    },
];

export const mockCourses = [
    { title: "Mindfulness & Meditation", progress: 78, total: 24, completed: 19 },
    { title: "Leadership Essentials", progress: 55, total: 18, completed: 10 },
    { title: "Emotional Intelligence", progress: 92, total: 15, completed: 14 },
    { title: "Productivity Systems", progress: 34, total: 20, completed: 7 },
];

export const mockLearningProgress = {
    overallCompletion: 68,
    coursesCompleted: 8,
    coursesTotal: 12,
    weeklyGoalMinutes: 300,
    weeklyDoneMinutes: 210,
    weeklyGoalPercent: 70,
};

export const mockActivity = [
    {
        id: 1,
        type: "group",
        title: "Joined Mindful Leaders Circle",
        description: "Support group · 42 members",
        time: "2 hours ago",
        color: "rose",
    },
    {
        id: 2,
        type: "lesson",
        title: "Completed: Active Listening Skills",
        description: "Leadership Essentials · Module 4",
        time: "Yesterday",
        color: "blue",
    },
    {
        id: 3,
        type: "ebook",
        title: "Downloaded: Atomic Habits Summary",
        description: "E-book · 48 pages",
        time: "2 days ago",
        color: "emerald",
    },
    {
        id: 4,
        type: "retreat",
        title: "Registered for Mountain Serenity Retreat",
        description: "3-day retreat · July 18–20",
        time: "3 days ago",
        color: "amber",
    },
    {
        id: 5,
        type: "lesson",
        title: "Completed: Stress & Resilience Framework",
        description: "Emotional Intelligence · Module 7",
        time: "5 days ago",
        color: "blue",
    },
];

export const mockEvents = [
    {
        id: 1,
        type: "retreat",
        title: "Mountain Serenity Retreat",
        date: "Jul 18–20, 2026",
        time: "Starts 9:00 AM",
        location: "Blue Ridge Mountains, NC",
        color: "amber",
        badge: "Registered",
    },
    {
        id: 2,
        type: "group",
        title: "Mindful Leaders Circle",
        date: "Jun 12, 2026",
        time: "7:00 PM – 8:30 PM",
        location: "Virtual · Zoom",
        color: "rose",
        badge: "Tomorrow",
    },
    {
        id: 3,
        type: "course",
        title: "Leadership Essentials — Live Q&A",
        date: "Jun 15, 2026",
        time: "12:00 PM – 1:00 PM",
        location: "Virtual · Platform",
        color: "blue",
        badge: "In 6 days",
    },
];

export const mockAchievements = [
    {
        id: 1,
        title: "First Course Completed",
        description: "Finished your first full course on the platform",
        earned: true,
        earnedDate: "Mar 2026",
        color: "blue",
        icon: "graduation",
    },
    {
        id: 2,
        title: "Avid Reader",
        description: "Unlocked 25+ e-books in the library",
        earned: true,
        earnedDate: "May 2026",
        color: "emerald",
        icon: "book",
    },
    {
        id: 3,
        title: "Community Contributor",
        description: "Active in 3+ support groups for 30 days",
        earned: true,
        earnedDate: "Jun 2026",
        color: "rose",
        icon: "users",
    },
    {
        id: 4,
        title: "Retreat Participant",
        description: "Attended your first wellness retreat",
        earned: false,
        earnedDate: null,
        color: "amber",
        icon: "mountain",
    },
];




