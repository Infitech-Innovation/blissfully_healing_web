import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CourseSection from "@/features/public/courses/CoursePage";
import { coursekeys } from "@/services/businessservices/courses.services";
import { getCourses } from "@/services/endpoints/courses.endpoints";

export default async function CoursesPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: coursekeys.all,
    queryFn: getCourses,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CourseSection />
    </HydrationBoundary>
  );
}
