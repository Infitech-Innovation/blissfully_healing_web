import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CourseSection from "./_components/CoursePage";
import { coursekeys } from "./courses.services";
import { getCourses } from "./courses.endpoints";

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
