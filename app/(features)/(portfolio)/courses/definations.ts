
export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  is_preview:boolean;
  order:number;
  content_type?: "video" | "audio" | "text";
  videoUrl?: string;
  audioUrl?: string;
  textContent?: string;
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

export type Course = {
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


export interface EnrolledCourse extends Course {
  completedLessonIds?: string[];
  lastAccessedLessonId?: string;
  enrolledAt?: string;
}
