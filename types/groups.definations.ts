import { ReactNode } from "react";

export type MeetingFrequency = "weekly" | "monthly" | "once";
export type GroupStatus = "active" | "inactive" | "filling" | "upcoming";
export interface GroupSchedule {
  frequency: MeetingFrequency;
  dayOfWeek: number; // 0=Sunday, 1=Monday ... 6=Saturday
  startTime: string; // "18:00"
  durationMinutes: number;
  timezone: string; // Africa/Nairobi
}
export interface SupportGroup {
  id: number;
  slug: string;
  name: string;
  category: string;
  facilitator: string;
  facilitatorTitle: string;
  description: string;
  schedule: GroupSchedule;
  nextSession: Date;
  format: string;
  time: string;
  sessionsAttended: number;
  totalSessions: number;
  members: number;
  maxMembers: number;
  status: GroupStatus;
  icon: ReactNode;
  color: string;
  upcomingTopics: string[];
  resources: Resources[];
  tags: string[];
  joined: Date;
  price: string;
  level: string;
}

export interface Resources {
  id: string;
  name: string;
  type: string;
  size: string;
  icon: ReactNode;
  fileUrl: string;
}



export interface Tag {
  id: number;
  name: string;
  order: number;
}

// export interface SupportGroup {
//   id: number;
//   title: string;
//   slug: string;
//   category: string;
//   status_label: "ACTIVE GROUP" | "FILLING FAST" | string; // Handled as explicit strings or string fallback
//   icon_name: "brain" | "moon" | "comments" | "wind" | "hand-holding-heart" | "clock" | "users" | "sparkles" | "heart" | string;
//   short_description: string;
//   frequency: "Weekly" | "Biweekly" | "Monthly" | string;
//   schedule_time: string;
//   next_session_date: string; // "YYYY-MM-DD" formatted string
//   max_members: number;
//   current_members_count: number;
//   tags: Tag[];
// }

// // Use this type when typing an entire fetched list from an API response
// export type SupportGroupList = SupportGroup[];


// export interface Tag {
//   id: number;
//   name: string;
//   order: number;
// }

// export interface Topic {
//   id: number;
//   text: string;
//   order: number;
// }

// export interface Guideline {
//   id: number;
//   icon_name: string;
//   title: string;
//   text: string;
//   order: number;
// }

// export interface SupportGroupDetails {
//   id: number;
//   title: string;
//   slug: string;
//   category: string;
//   status_label: string;
//   icon_name: string;
//   about_text: string; // Contains HTML string data
//   format: "Online" | "In-Person" | string;
//   frequency: "Weekly" | "Biweekly" | "Monthly" | string;
//   duration: string; // e.g., "90 mins"
//   schedule_time: string;
//   next_session_date: string; // "YYYY-MM-DD"
//   level: string; // e.g., "All Levels"
//   max_members: number;
//   current_members_count: number;
//   price: string; // Keeping as string to capture exact decimal formats like "0.00"
//   facilitator_name: string;
//   facilitator_title: string;
//   facilitator_bio: string;
//   facilitator_initials: string;
//   tags: Tag[];
//   topics: Topic[];
//   guidelines: Guideline[];
//   meeting_link: string | null; // Gated field that shifts to string on auth status
//   resources: any[] | null;       // Placeholder array type for future downloadable assets
//   is_member: boolean;
// }