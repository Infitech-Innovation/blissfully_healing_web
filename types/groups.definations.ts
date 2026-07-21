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
  icon: string;
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
  duration: string;
  schedule_time: string;
  schedule: GroupSchedule;
  next_session_date: string;
  levels: string;
  max_members: number,
  current_members_count: number,
  price: string,
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




// {
//       "id": "f691d196-e967-412d-a81b-3c8d3d0fee9e",
//       "group": {
//         "id": 30,
//         "title": "Auto Group 29",
//         "slug": "auto-group-29",
//         "category": {
//           "id": 9,
//           "name": "TRAUMA RECOVERY",
//           "slug": "trauma-recovery",
//           "icon": "ShieldCheck"
//         },
//         "status_label": "ACTIVE_GROUP",
//         "icon_image": null,
//         "short_description": "A demo group for pagination testing: auto group 29.",
//         "format": "ONLINE",
//         "frequency": "BIWEEKLY",
//         "duration": "60 mins",
//         "schedule_time": "Weekly on Wednesdays at 7:00 PM",
//         "schedule": {
//           "frequency": "BIWEEKLY",
//           "dayOfWeek": 1,
//           "startTime": "00:00",
//           "durationMinutes": 90,
//           "timezone": "Africa/Nairobi"
//         },
//         "price": "9000.00",
//         "total_sessions": 0,
//         "next_session_date": "2027-01-29",
//         "max_members": 24,
//         "current_members_count": 1,
//         "tags": [
//           {
//             "id": 118,
//             "name": "AUTO",
//             "order": 1
//           },
//           {
//             "id": 119,
//             "name": "SUPPORT",
//             "order": 2
//           },
//           {
//             "id": 120,
//             "name": "COMMUNITY",
//             "order": 3
//           }
//         ],
//         "level": "BEGINNER",
//         "facilitator_name": "Emma Njoki",
//         "facilitator_title": "Wellness Facilitator",
//         "facilitator_bio": "Facilitates auto group 29 with care and practice.",
//         "facilitator_initials": "EN",
//         "topics": [
//           118,
//           119,
//           120
//         ],
//         "guidelines": [
//           118,
//           119,
//           120
//         ]
//       },
//       "status": "ACTIVE",
//       "joined_at": "2026-07-11T13:43:49.256852+03:00"
//     }