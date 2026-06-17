import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MyCoursePage from "./_components/MyCoursePage";
import { coursekeys } from "@/app/(features)/(portfolio)/courses/courses.services";
import { getMyEnrollments } from "@/app/(features)/(portfolio)/courses/courses.endpoints";
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
