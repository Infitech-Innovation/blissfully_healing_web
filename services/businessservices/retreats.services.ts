import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { cancelRetreat, getFeaturedRetreats, getMyRetreats, getRetreatDetails, getRetreats, registerRetreat } from "../endpoints/retreats.endpoints"
import { FeaturedRetreatListResponse, RetreatDetails, RetreatListResponse, RetreatRegResponse } from "@/types/retreats.definations"

export const retreatKeys = {
    all: ["retreats"] as const,
    list: (page: number) => [...retreatKeys.all, "list", page] as const,
    featured: (page: number) => [...retreatKeys.all, "featured", page] as const,
    detail: (slug: string) => [...retreatKeys.all, slug] as const,
    registered: ["registred-treats"] as const,
    registeredList: (page: number) => [...retreatKeys.registered, "list", page] as const,
    registereddetails: (id: string) => [...retreatKeys.registered, id] as const,
}


// Retreats 
export const useGetRetreats = (page = 1) => {
    return useQuery<RetreatListResponse>({
        queryKey: retreatKeys.list(page),
        queryFn: () => getRetreats(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useRetreatDetails = (slug: string) => {
    return useQuery<RetreatDetails>({
        queryKey: retreatKeys.detail(slug),
        queryFn: () => getRetreatDetails(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

export const useGetFeaturedRetreats = (page = 1) => {
    return useQuery<FeaturedRetreatListResponse>({
        queryKey: retreatKeys.featured(page),
        queryFn: () => getFeaturedRetreats(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}



// Enrollments
export const useMyRetreats = (page = 1) => {
    return useQuery<RetreatRegResponse>({
        queryKey: retreatKeys.registeredList(page),
        queryFn: () => getMyRetreats(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useRegisterRetreat = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: registerRetreat,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: retreatKeys.registered
            })
        }
    })
}

export const useCancelRetreat = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: cancelRetreat,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: retreatKeys.registered
            })
        }
    })
}
