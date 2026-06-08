export interface SupportGroup {
  id: number;
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