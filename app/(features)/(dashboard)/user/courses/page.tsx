import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MyCoursePage from "@/features/private/courses/MyCoursePage";
import { coursekeys } from "@/services/businessservices/courses.services";
import { getMyEnrollments } from "@/services/endpoints/courses.endpoints";
import { getServerApi } from "@/lib/axios.server";

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
    queryKey: coursekeys.enrolled,
    queryFn: () => getMyEnrollments(serverApi),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyCoursePage />
    </HydrationBoundary>
  );
}
