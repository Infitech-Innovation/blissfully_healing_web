import { api } from "@/lib/axios"
import { MyGroupMembershipResponse, SupportGroup, SupportGroupsResponse } from "@/types/groups.definations"
import { AxiosInstance } from "axios"


const GROUPS_URL = "/support-groups/"
const MY_GROUPS_URL = "/support-groups/my-groups/"


export const getGroups = async (page: number = 1): Promise<SupportGroupsResponse> => {
    const response = await api.get<SupportGroupsResponse>(GROUPS_URL, {
        params: { page }
    })
    return response.data
}

export const getGroupDetails = async (slug: string): Promise<SupportGroup> => {
    const response = await api.get<SupportGroup>(`${GROUPS_URL}${slug}`)
    return response.data
}


export const getMyGroups = async (page: number = 1, apiInstance: AxiosInstance = api): Promise<MyGroupMembershipResponse> => {
    const response = await apiInstance.get<MyGroupMembershipResponse>(MY_GROUPS_URL, {
        params: { page }
    });
    return response.data
}

export const joinGroup = async (slug: string) => {
    const response = await api.post(`${GROUPS_URL}${slug}/join/`)
    return response.data
}


export const leaveGroup = async (slug: string): Promise<void> => {
    const response = await api.delete(`${GROUPS_URL}${slug}/leave/`)
    return response.data
}