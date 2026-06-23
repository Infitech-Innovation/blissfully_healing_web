import React from "react";
import { 
  Brain, 
  Heart, 
  Sparkles, 
  Briefcase, 
  Users, 
  FileText, 
  Video, 
  BookOpen,
  Headphones,
  FileSpreadsheet
} from "lucide-react";
import { SupportGroup } from "../types/groups.definations";

export const mockSupportGroups: SupportGroup[] = [
  {
    id: 1,
    slug: "mindfulness-for-anxiety",
    name: "Mindfulness & Anxiety Management",
    category: "Mental Health",
    facilitator: "Dr. Amina Osei",
    facilitatorTitle: "Clinical Psychologist",
    description: "A safe space to learn practical grounding techniques, mindfulness practices, and cognitive behavioral strategies to manage daily anxiety and panic.",
    schedule: {
      frequency: "weekly",
      dayOfWeek: 2,
      startTime: "18:30",
      durationMinutes: 60,
      timezone: "Africa/Nairobi"
    },
    nextSession: new Date("2026-06-23T18:30:00+03:00"),
    format: "Virtual (Zoom)",
    time: "Every Tuesday at 6:30 PM",
    sessionsAttended: 4,
    totalSessions: 12,
    members: 8,
    maxMembers: 12,
    status: "filling",
    icon: React.createElement(Brain, { className: "w-6 h-6 text-indigo-500" }),
    color: "bg-indigo-50 border-indigo-200",
    upcomingTopics: ["Understanding Panic Triggers", "Box Breathing & Grounding", "Reframing Negative Thoughts"],
    resources: [
      {
        id: "r1",
        name: "Daily Anxiety Tracker.pdf",
        type: "PDF",
        size: "1.2 MB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/anxiety-tracker.pdf"
      },
      {
        id: "r2",
        name: "Guided 10-Min Meditation.mp3",
        type: "Audio",
        size: "15 MB",
        icon: React.createElement(Headphones, { className: "w-4 h-4" }),
        fileUrl: "/downloads/meditation.mp3"
      },
      {
        id: "r6",
        name: "CBT Thought Challenging Sheet.pdf",
        type: "PDF",
        size: "940 KB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/cbt-thought-sheet.pdf"
      }
    ],
    tags: ["Anxiety", "Mindfulness", "CBT"],
    joined: new Date("2026-05-15"),
    price: "Free",
    level: "All Levels"
  },
  {
    id: 2,
    slug: "burnout-recovery-professionals",
    name: "Corporate Burnout Recovery",
    category: "Professional Well-being",
    facilitator: "Marcus Vance",
    facilitatorTitle: "Executive Coach & Therapist",
    description: "Connect with fellow professionals to unpack workplace stress, establish hard boundaries, and rebuild your creative energy after experiencing severe burnout.",
    schedule: {
      frequency: "weekly",
      dayOfWeek: 4, // Thursday
      startTime: "19:00",
      durationMinutes: 75,
      timezone: "Africa/Nairobi"
    },
    nextSession: new Date("2026-06-25T19:00:00+03:00"),
    format: "Virtual (Google Meet)",
    time: "Every Thursday at 7:00 PM",
    sessionsAttended: 1,
    totalSessions: 6,
    members: 14,
    maxMembers: 15,
    status: "filling",
    icon: React.createElement(Briefcase, { className: "w-6 h-6 text-amber-500" }),
    color: "bg-amber-50 border-amber-200",
    upcomingTopics: ["The Art of Saying No", "Detaching Self-Worth from Productivity", "Designing a Rest Routine"],
    resources: [
      {
        id: "r3",
        name: "Boundary Setting Script Blueprint.pdf",
        type: "PDF",
        size: "850 KB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/boundary-scripts.pdf"
      },
      {
        id: "r7",
        name: "Workplace Stress Log.xlsx",
        type: "Excel",
        size: "45 KB",
        icon: React.createElement(FileSpreadsheet, { className: "w-4 h-4" }),
        fileUrl: "/downloads/stress-log.xlsx"
      },
      {
        id: "r8",
        name: "Workshop: Energy Management 101.mp4",
        type: "Video",
        size: "142 MB",
        icon: React.createElement(Video, { className: "w-4 h-4" }),
        fileUrl: "/downloads/energy-management-video.mp4"
      }
    ],
    tags: ["Burnout", "Career", "Stress-Management"],
    joined: new Date("2026-06-10"),
    price: "KES 2500 / Session",
    level: "Intermediate"
  },
  {
    id: 3,
    slug: "grief-and-healing",
    name: "Healing Through Loss",
    category: "Grief Support",
    facilitator: "Elena Rostova",
    facilitatorTitle: "Licensed Grief Counselor",
    description: "A compassionate community honoring your grief journey. Share your story, remember your loved ones, and navigate the complex waves of loss without judgment.",
    schedule: {
      frequency: "monthly",
      dayOfWeek: 6, // Saturday
      startTime: "10:00",
      durationMinutes: 90,
      timezone: "Africa/Nairobi"
    },
    nextSession: new Date("2026-07-04T10:00:00+03:00"),
    format: "Hybrid (In-person & Zoom)",
    time: "First Saturday of the month at 10:00 AM",
    sessionsAttended: 0,
    totalSessions: 10,
    members: 6,
    maxMembers: 20,
    status: "active",
    icon: React.createElement(Heart, { className: "w-6 h-6 text-rose-500" }),
    color: "bg-rose-50 border-rose-200",
    upcomingTopics: ["Navigating Anniversaries & Holidays", "The Non-Linear Stages of Grief", "Expressive Writing for Loss"],
    resources: [
      {
        id: "r4",
        name: "Grief Journal Prompts.pdf",
        type: "PDF",
        size: "2.1 MB",
        icon: React.createElement(BookOpen, { className: "w-4 h-4" }),
        fileUrl: "/downloads/grief-prompts.pdf"
      },
      {
        id: "r9",
        name: "Recommended Reading List.pdf",
        type: "PDF",
        size: "320 KB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/grief-books.pdf"
      }
    ],
    tags: ["Grief", "Healing", "Loss"],
    joined: new Date("2026-06-18"),
    price: "Free",
    level: "All Levels"
  },
  {
    id: 4,
    slug: "adhd-adults-strategies",
    name: "Thriving with Adult ADHD",
    category: "Neurodiversity",
    facilitator: "Samson Kiptoo",
    facilitatorTitle: "ADHD Coach & ADHDer",
    description: "Stop fighting your brain. Learn how to work with your unique executive dysfunction, build dynamic habit loops, and ditch the neurotypical shame.",
    schedule: {
      frequency: "weekly",
      dayOfWeek: 1, // Monday
      startTime: "17:00",
      durationMinutes: 60,
      timezone: "Africa/Nairobi"
    },
    nextSession: new Date("2026-06-22T17:00:00+03:00"),
    format: "Virtual (Discord)",
    time: "Every Monday at 5:00 PM",
    sessionsAttended: 8,
    totalSessions: 16,
    members: 11,
    maxMembers: 12,
    status: "active",
    icon: React.createElement(Sparkles, { className: "w-6 h-6 text-purple-500" }),
    color: "bg-purple-50 border-purple-200",
    upcomingTopics: ["Gamifying Daily Chores", "Dopamine Menus Explained", "Overcoming Task Paralysis"],
    resources: [
      {
        id: "r10",
        name: "Interactive Dopamine Menu Template.pdf",
        type: "PDF",
        size: "1.8 MB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/dopamine-menu.pdf"
      }
    ],
    tags: ["ADHD", "Neurodivergent", "Productivity"],
    joined: new Date("2026-04-01"),
    price: "KES 1500 / Session",
    level: "All Levels"
  },
  {
    id: 5,
    slug: "new-parents-circle",
    name: "The New Parents Circle",
    category: "Parenting",
    facilitator: "Sarah Jenkins & Tom Jenkins",
    facilitatorTitle: "Family Therapists",
    description: "An open forum tackling the unspoken challenges of early parenthood—from sleep deprivation and identity shifts to balancing relationship dynamics.",
    schedule: {
      frequency: "weekly",
      dayOfWeek: 3, // Wednesday
      startTime: "14:00",
      durationMinutes: 90,
      timezone: "Africa/Nairobi"
    },
    nextSession: new Date("2026-06-24T14:00:00+03:00"),
    format: "In-Person (Community Hub)",
    time: "Every Wednesday at 2:00 PM",
    sessionsAttended: 2,
    totalSessions: 8,
    members: 5,
    maxMembers: 10,
    status: "active",
    icon: React.createElement(Users, { className: "w-6 h-6 text-emerald-500" }),
    color: "bg-emerald-50 border-emerald-200",
    upcomingTopics: ["Managing Parental Guilt", "Sleep Schedules and Sanity", "Maintaining Partner Connection"],
    resources: [
      {
        id: "r5",
        name: "Postpartum Mental Health Guide.pdf",
        type: "PDF",
        size: "3.4 MB",
        icon: React.createElement(FileText, { className: "w-4 h-4" }),
        fileUrl: "/downloads/postpartum-guide.pdf"
      },
      {
        id: "r11",
        name: "Infant Sleep Routine Checklist.pdf",
        type: "PDF",
        size: "510 KB",
        icon: React.createElement(BookOpen, { className: "w-4 h-4" }),
        fileUrl: "/downloads/sleep-checklist.pdf"
      }
    ],
    tags: ["Parenting", "Postpartum", "Newborn"],
    joined: new Date("2026-06-01"),
    price: "Free",
    level: "Beginner"
  }
];