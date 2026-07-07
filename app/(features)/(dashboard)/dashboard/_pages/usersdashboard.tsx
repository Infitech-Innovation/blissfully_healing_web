import { DashboardAnalytics } from "@/features/private/dashboards/DashboardAnalytics";
// import { getServerApi } from "@/lib/axios.server";
// import { getAnalytics } from "@/services/endpoints/dash.endpoints";
// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default function UserDashboard() {

  // const serverApi = await getServerApi();
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: 60 * 1000,
  //     }
  //   }
  // })

  // await queryClient.prefetchQuery({
  //   queryKey: ['analytics'],
  //   queryFn: () => getAnalytics(serverApi),
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardAnalytics />
    // </HydrationBoundary>
  )
}
