import { api } from "@/lib/axios";
import { RegisteredRetreats, RetreatDetails, RetreatList } from "@/types/retreats.definations";
import { AxiosInstance } from "axios";

const RETREATS_URL = "/retreats/";
const MY_RETREATS_URL = "/retreats/my-registrations";

export const getRetreats = async (): Promise<RetreatList[]> => {
    const response = await api.get<RetreatList[]>(`${RETREATS_URL}`)
    return response.data
}

export const getRetreatDetails = async (slug: string): Promise<RetreatDetails> => {
    const response = await api.get<RetreatDetails>(`${RETREATS_URL}${slug}`)
    return response.data
}

export const getFeaturedRetreats = async (): Promise<RetreatList[]> => {
    const response = await api.get<RetreatList[]>(`${RETREATS_URL}featured/`)
    return response.data
}

export const getMyRetreats = async (apiInstance: AxiosInstance = api): Promise<RegisteredRetreats[]> => {
    const response = await apiInstance.get<RegisteredRetreats[]>(`${MY_RETREATS_URL}`);
    return response.data
}

export const registerRetreat = async (slug: string) => {
    const response = await api.post(`${RETREATS_URL}${slug}/register/`)
    return response.data
}


export const cancelRetreat = async (slug: string): Promise<void> => {
    const response = await api.delete(`${RETREATS_URL}${slug}/register/cancel/`)
    return response.data
}