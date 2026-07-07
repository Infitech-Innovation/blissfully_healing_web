
export interface UserDashboardData {
    overview: DashboardOverview;
    analytics: DashboardAnalytics;
    recent_activity: RecentActivityItem[];
    upcoming_events: UpcomingEventItem[];
    achievements: AchievementItem[];
}

// MARK: - Sub-interfaces

export interface DashboardOverview {
    enrolled_courses: number;
    ebooks_library: number;
    retreats_paid_for: number;
    support_groups: number;
}

export interface DashboardAnalytics {
    overall_completion: number; // e.g., 0 to 100
    active_courses: CourseItem[];   // Array of course IDs or course objects
}

export interface CourseItem {
    title: string;
    completed_lessons: number,
    total_lessons: number,
}

export interface RecentActivityItem {
    type: string;
    title: string;
    subtitle: string;          // Contextual info (e.g., "E-book - 72 pages", "3 days / 2 nights")
    date: string;              // ISO 8601 Timestamp format string
}

export interface UpcomingEventItem {
    type: string;
    title: string;
    date: string;              // YYYY-MM-DD Date string
    location: string;
    status: string;
}

export interface AchievementItem {
    id: string;                // Unique identifier for the milestone
    title: string;
    description: string;
    earned: boolean;
}

export const mockStats = [
    {
        id: "courses",
        label: "Enrolled Courses",
        description: "Active enrollments",
        color: "blue",
    },
    {
        id: "ebooks",
        label: "E-books Library",
        description: "Books unlocked",
        color: "emerald",
    },
    {
        id: "retreats",
        label: "Retreats Paid For",
        description: "Wellness retreats",
        color: "amber",
    },
    {
        id: "groups",
        label: "Support Groups",
        description: "Active memberships",
        color: "rose",
    },
];