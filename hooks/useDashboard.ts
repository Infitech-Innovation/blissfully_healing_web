import { UserDashboardData } from "@/types/dashboard.definations"
import { useQuery } from "@tanstack/react-query"
import { getAnalytics } from "../services/dash.endpoints"

export const useUserDashboard = () => {
    return useQuery<UserDashboardData>({
        queryKey: ['analytics'],
        queryFn: () => getAnalytics(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}