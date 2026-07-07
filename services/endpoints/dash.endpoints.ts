import { api } from "@/lib/axios"
import { UserDashboardData } from "@/types/dashboard.definations"
import { AxiosInstance } from "axios";

export const getAnalytics = async (apiInstance: AxiosInstance = api): Promise<UserDashboardData> => {
    const data = await apiInstance.get<UserDashboardData>('/auth/dashboard/');
    return data.data;
}