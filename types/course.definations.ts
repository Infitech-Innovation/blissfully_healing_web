import { PaginatedResponse } from "./generic";

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  is_preview: boolean;
  order: number;
  blocks: LessonBlocks[]
  // content_type?: string;
  // videoUrl?: string;
  // audioUrl?: string;
  // textContent?: string;
}

export interface LessonBlocks {
  id: number;
  block_type: string;
  order: number;
  video_url: string;
  audio_file: string,
  text_content: string;
  duration_minutes: string;
}
export interface Chapter {
  id: number;
  number: number;
  title: string;
  lessons: Lesson[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  chapters: Chapter[];
  is_features: boolean;
  is_published: boolean;
  duration: string;
  features: string[];
  category: Category;
  image: string;
  difficulty: string;
  lesson_count: number;
  price: string;
  progress?: number;
  created_at: Date;
  updated_at: Date;
};



// Enrollment
export interface EnrolledCourse {
  id: string;
  course: Course;
  enrolled_at: Date;
  is_active: boolean;
  progress: number;
  completed_lesson_ids: number[];
}

export interface CourseProgressResponse {
  completed_lesson_ids: number[];
}

export type CourseResponse = PaginatedResponse<Course>;
export type FeaturedCourseResponse = PaginatedResponse<Course>;
export type LessonResponse = PaginatedResponse<Lesson>;
export type EnrolledCourseGroupsResponse = PaginatedResponse<EnrolledCourse>;