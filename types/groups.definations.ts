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
