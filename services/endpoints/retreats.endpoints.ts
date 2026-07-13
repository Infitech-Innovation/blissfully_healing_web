import { api } from "@/lib/axios";
import { FeaturedRetreatListResponse, RetreatDetails, RetreatListResponse, RetreatRegResponse } from "@/types/retreats.definations";
import { AxiosInstance } from "axios";

const RETREATS_URL = "/retreats/";
const MY_RETREATS_URL = "/retreats/my-registrations";

export const getRetreats = async (page: number = 1): Promise<RetreatListResponse> => {
    const response = await api.get<RetreatListResponse>(RETREATS_URL, {
        params: { page }
    })
    return response.data
}

export const getRetreatDetails = async (slug: string): Promise<RetreatDetails> => {
    const response = await api.get<RetreatDetails>(`${RETREATS_URL}${slug}`)
    return response.data
}

export const getFeaturedRetreats = async (page: number = 1): Promise<FeaturedRetreatListResponse> => {
    const response = await api.get<FeaturedRetreatListResponse>(`${RETREATS_URL}featured/`, {
        params: { page }
    })
    return response.data
}

export const getMyRetreats = async (page: number = 1, apiInstance: AxiosInstance = api): Promise<RetreatRegResponse> => {
    const response = await apiInstance.get<RetreatRegResponse>(MY_RETREATS_URL, {
        params: { page }
    });
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