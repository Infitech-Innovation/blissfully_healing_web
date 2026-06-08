
interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
}

interface Chapter {
  id: string;
  number: number;
  title: string;
  lessons: Lesson[];
}


export type Course = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  chapters: Chapter[];
  features: string[];
  category: string;
  imageUrl: string;
  difficulty: string;
  duration: string;
  lessons: number;
  price: string;
  progress?: number;
};

export interface EnrolledCourse extends Course {
  completedLessonIds?: string[];
  lastAccessedLessonId?: string;
  enrolledAt?: string;
}