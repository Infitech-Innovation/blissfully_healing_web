// export interface MyGroupsResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: MyGroupMembership[];
// }

// export interface MyGroupMembership {
//   id: string;
//   group: MySupportGroup;
//   status: MembershipStatus;
//   joined_at: string;
// }

// export interface MySupportGroup {
//   id: number;
//   title: string;
//   slug: string;
//   category: GroupCategory;
//   status_label: GroupStatusLabel;
//   icon_image: string | null;
//   short_description: string;
//   frequency: GroupFrequency;
//   schedule_time: string;
//   schedule: GroupSchedule;
//   price: string;
//   total_sessions: number;
//   next_session_date: string;
//   max_members: number;
//   current_members_count: number;
//   tags: GroupTag[];
// }

// export interface GroupCategory {
//   id: number;
//   name: string;
//   slug: string;
//   icon: string;
// }

// export interface GroupSchedule {
//   frequency: GroupFrequency;
//   dayOfWeek: number;
//   startTime: string;
//   durationMinutes: number;
//   timezone: string;
// }

// export interface GroupTag {
//   id: number;
//   name: string;
//   order: number;
// }

// export type MembershipStatus =
//   | "ACTIVE"
//   | "PENDING"
//   | "COMPLETED"
//   | "CANCELLED";

// export type GroupStatusLabel =
//   | "ACTIVE_GROUP"
//   | "UPCOMING_GROUP"
//   | "COMPLETED_GROUP"
//   | "CANCELLED_GROUP";

// export type GroupFrequency =
//   | "DAILY"
//   | "WEEKLY"
//   | "BIWEEKLY"
//   | "MONTHLY"
//   | "QUARTERLY";