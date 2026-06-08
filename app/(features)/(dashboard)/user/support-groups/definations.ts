export interface Group {
  id: number;
  name: string;
  category: string;
  facilitator: string;
  facilitatorTitle: string;
  description: string;
  schedule: string;
  time: string;
  nextSession: string;
  format: string;
  members: number;
  maxMembers: number;
  status: "active" | "upcoming";
  color: string;
  icon: string;
  tags: string[];  
  joined: string;
  sessionsAttended: number;
  totalSessions: number;
  upcomingTopics: string[];
  resources: string[];
}
