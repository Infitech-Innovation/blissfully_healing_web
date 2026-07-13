import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { EBook, EbookListResponse, OwnedEbookResponse } from "@/types/ebooks.definations"
import { downloadEbook, getEbookDetails, getEbooks, getFeaturedEbooks, getMyEbooks, ownEbook } from "../endpoints/ebooks.endpoints"

export const ebookKeys = {
    all: ["ebooks"] as const,
    list: (page: number) => [...ebookKeys.all, "list", page] as const,
    featured: (page: number) => [...ebookKeys.all, "featured", page] as const,
    detail: (slug: string) => [...ebookKeys.all, slug] as const,
    bought: ["owned-ebooks"] as const,
    boughtList: (page: number) => [...ebookKeys.bought, "list", page] as const,
    boughtbookdetails: (id: string) => [...ebookKeys.bought, id] as const,
    download: (slug: string) => [...ebookKeys.bought, slug, "download"] as const,
}


// Ebooks 
export const useGetEbooks = (page = 1) => {
    return useQuery<EbookListResponse>({
        queryKey: ebookKeys.list(page),
        queryFn: () => getEbooks(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useEbookDetails = (slug: string) => {
    return useQuery<EBook>({
        queryKey: ebookKeys.detail(slug),
        queryFn: () => getEbookDetails(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

export const useGetFeaturedEbooks = (page = 1) => {
    return useQuery<EbookListResponse>({
        queryKey: ebookKeys.featured(page),
        queryFn: () => getFeaturedEbooks(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

// Enrollments
export const useMyEbooks = (page = 1) => {
    return useQuery<OwnedEbookResponse>({
        queryKey: ebookKeys.boughtList(page),
        queryFn: () =>  getMyEbooks(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useBuyBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ownEbook,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ebookKeys.bought
            })
        }
    })
}


// export const useDownloadEbookQuery = (slug: string) => {
//     return useQuery({
//         queryKey: ebookKeys.download(slug),
//         queryFn: () => downloadEbook(slug),
//         enabled: !!slug,
//     });
// };

export const useDownloadEbookMutation = () => {
    return useMutation({
        mutationFn: (slug: string) => downloadEbook(slug),
    });
};
