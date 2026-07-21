import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CourseSection from "@/features/public/courses/CoursePage";
import { coursekeys } from "@/hooks/useCourses";
import { getCourses, getFeaturedCourses } from "@/services/courses.endpoints";

export default async function CoursesPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: coursekeys.list(1),
      queryFn: () => getCourses(1),
    }),
    queryClient.prefetchQuery({
      queryKey: coursekeys.featured(1),
      queryFn: () => getFeaturedCourses(1),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CourseSection />
    </HydrationBoundary>
  );
}
