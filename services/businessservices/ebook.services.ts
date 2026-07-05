import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { EBook, EBookList, OwneredEboks } from "@/types/ebooks.definations"
import { downloadEbook, getEbookDetails, getEbooks, getFeaturedEbooks, getMyEbooks, ownEbook } from "../endpoints/ebooks.endpoints"

export const ebookKeys = {
    all: ["ebooks"] as const,
    detail: (slug: string) => [...ebookKeys.all, slug] as const,
    bought: ["owned-ebooks"] as const,
    boughtbookdetails: (id: string) => [...ebookKeys.bought, id] as const,
    download: (slug: string) => [...ebookKeys.bought, slug, "download"] as const,
}


// Ebooks 
export const useGetEbooks = () => {
    return useQuery<EBookList[]>({
        queryKey: ebookKeys.all,
        queryFn: () => getEbooks(),
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

export const useGetFeaturedEbooks = () => {
    return useQuery<EBookList[]>({
        queryKey: ebookKeys.all,
        queryFn: () => getFeaturedEbooks(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}



// Enrollments
export const useMyEbooks = () => {
    return useQuery<OwneredEboks[]>({
        queryKey: ebookKeys.bought,
        queryFn: () => getMyEbooks(),
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