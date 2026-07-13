import { ReactNode } from "react";
import { PaginatedResponse } from "./generic";

export interface Tag {
  id: number;
  name: string;
  order: number;
}

export interface Topic {
  id: number;
  text: string;
  order: number;
}

export interface Category {
  id: number,
  name: string,
  slug: string,
}
export interface Guideline {
  id: number;
  icon_name: string;
  title: string;
  text: string;
  order: number;
}


export interface GroupSchedule {
  frequency: string;
  dayOfWeek: number; // 0=Sunday, 1=Monday ... 6=Saturday
  startTime: string; // "18:00"
  durationMinutes: number;
  timezone: string; // Africa/Nairobi
}

export type GroupStatus =
  | "ACTIVE_GROUP"
  | "UPCOMING_GROUP"
  | "FILLING_FAST"
  | "FULL_GROUP"
  | "COMPLETED_GROUP";

export interface SupportGrouplist {
  id: number;
  title: string;
  slug: string;
  category: Category;
  status_label: GroupStatus;
  icon_image: string | null;
  short_description: string;
  frequency: string;
  schedule_time: string;
  schedule: GroupSchedule;
  next_session_date: string;
  max_members: number,
  current_members_count: number,
  tags: Tag[];
}
export interface SupportGroup {
  id: number;
  title: string;
  slug: string;
  category: Category;
  status_label: GroupStatus;
  icon_image: string;
  format: string;
  short_description: string;
  frequency: string;
  schedule_time: string;
  schedule: GroupSchedule;
  next_session_date: string;
  levels: string;
  max_members: number,
  current_members_count: number,
  price: number,
  facilitator_name: string;
  facilitator_title: string;
  facilitator_bio: string;
  facilitator_initials: string;
  tags: Tag[];
  topics: Topic[];
  guidelines: Guideline[];
  meeting_link: string | null,
  resources: Resources[],
  is_member: boolean
}

export interface Resources {
  id: string;
  name: string;
  type: string;
  size: string;
  icon: ReactNode;
  fileUrl: string;
}

export interface MyGroupMembership {
  id: string;
  group: SupportGroup;
  status: string;
  joined_at: string;
}

export type SupportGroupsResponse = PaginatedResponse<SupportGrouplist>;
// export type JoinedGroupsResponse = PaginatedResponse<SupportGroup>;
export type MyGroupMembershipResponse = PaginatedResponse<MyGroupMembership>; 