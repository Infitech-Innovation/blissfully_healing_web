import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createMetadata } from "@/app/seo";
import MyCoursePage from "@/features/private/courses/MyCoursePage";
import { coursekeys } from "@/hooks/useCourses";
import { getMyEnrollments } from "@/services/courses.endpoints";
import { getServerApi } from "@/lib/axios.server";

export const metadata: Metadata = createMetadata({
  title: "My Courses",
  description: "View and continue your enrolled Blissfully Healing courses.",
  path: "/user/courses",
  noIndex: true,
});

export default async function CoursesPage() {
  const serverApi = await getServerApi();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: coursekeys.enrolledList(1),
    queryFn: async () => (await getMyEnrollments(1, serverApi)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyCoursePage />
    </HydrationBoundary>
  );
}
