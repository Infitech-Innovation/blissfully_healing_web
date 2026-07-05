import { api } from "@/lib/axios"
import { EBook, EBookList, OwneredEboks } from "@/types/ebooks.definations"
import { AxiosInstance } from "axios"



const EBOOK_URL = "/shop/"
const MY_LIBRARY_URL = "/shop/my-library/"


export const getEbooks = async (): Promise<EBookList[]> => {
    const response = await api.get<EBookList[]>(`${EBOOK_URL}`)
    return response.data
}

export const getEbookDetails = async (slug: string): Promise<EBook> => {
    const response = await api.get<EBook>(`${EBOOK_URL}${slug}`)
    return response.data
}

export const getFeaturedEbooks = async (): Promise<EBookList[]> => {
    const response = await api.get<EBookList[]>(`${EBOOK_URL}featured/`)
    return response.data
}

//Owned Ebooks

export const getMyEbooks = async (apiInstance: AxiosInstance = api): Promise<OwneredEboks[]> => {
    const response = await apiInstance.get<OwneredEboks[]>(`${MY_LIBRARY_URL}`);
    return response.data
}

export const ownEbook = async (slug: string) => {
    const response = await api.post(`${EBOOK_URL}${slug}/buy/`)
    return response.data
}

// export const downloadEbook = async (slug: string) => {
//     const response = await api.get(`${EBOOK_URL}${slug}/download/`)
//     return response.data
// }

export const downloadEbook = async (slug: string) => {
    return api.get(`${EBOOK_URL}${slug}/download/`, {
        responseType: "blob", // 👈 Absolute necessity for handling file binaries
    });
};
