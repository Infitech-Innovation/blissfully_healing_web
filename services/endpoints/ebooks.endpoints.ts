import { api } from "@/lib/axios"
import { EBook, EbookListResponse, OwnedEbookResponse, } from "@/types/ebooks.definations"
import { AxiosInstance } from "axios"



const EBOOK_URL = "/shop/"
const MY_LIBRARY_URL = "/shop/my-library/"


export const getEbooks = async (page: number = 1): Promise<EbookListResponse> => {
    const response = await api.get<EbookListResponse>(`${EBOOK_URL}`, {
        params: { page }
    })
    return response.data
}

export const getEbookDetails = async (slug: string): Promise<EBook> => {
    const response = await api.get<EBook>(`${EBOOK_URL}${slug}`)
    return response.data
}

export const getFeaturedEbooks = async (page: number = 1): Promise<EbookListResponse> => {
    const response = await api.get<EbookListResponse>(`${EBOOK_URL}featured/`, {
        params: { page }
    })
    return response.data
}

//Owned Ebooks

export const getMyEbooks = async (page: number = 1, apiInstance: AxiosInstance = api): Promise<OwnedEbookResponse> => {
    const response = await apiInstance.get<OwnedEbookResponse>(`${MY_LIBRARY_URL}`, {
        params: { page }
    });
    return response.data
}

export const ownEbook = async (slug: string) => {
    const response = await api.post(`${EBOOK_URL}${slug}/buy/`)
    return response.data
}


export const downloadEbook = async (slug: string) => {
    return api.get(`${EBOOK_URL}${slug}/download/`, {
        responseType: "blob", // 👈 Absolute necessity for handling file binaries
    });
};
