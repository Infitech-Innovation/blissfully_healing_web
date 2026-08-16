import type { Metadata } from "next";
import {
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import CourseSection from "@/features/public/courses/CoursePage";
import { coursekeys } from "@/hooks/useCourses";
import { getCourses, getFeaturedCourses } from "@/services/courses.endpoints";
import { createMetadata } from "@/app/seo";
import HydrationProvider from "@/lib/hydration-provider";

export const metadata: Metadata = createMetadata({
  title: "Courses",
  description:
    "Explore Blissfully Healing courses and guided programs for emotional wellness, somatic practice, and spiritual growth.",
  path: "/courses",
});

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
    <HydrationProvider state={dehydrate(queryClient)}>
      <CourseSection />
    </HydrationProvider>
  );
}
