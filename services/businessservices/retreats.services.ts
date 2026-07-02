import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { cancelRetreat, getFeaturedRetreats, getMyRetreats, getRetreatDetails, getRetreats, registerRetreat } from "../endpoints/retreats.endpoints"
import { RegisteredRetreats, RetreatDetails, RetreatList } from "@/types/retreats.definations"

export const retreatKeys = {
    all: ["retreats"] as const,
    detail: (slug: string) => [...retreatKeys.all, slug] as const,
    registered: ["registred-treats"] as const,
    registereddetails: (id: string) => [...retreatKeys.registered, id] as const,
}


// Retreats 
export const useGetRetreats = () => {
    return useQuery<RetreatList[]>({
        queryKey: retreatKeys.all,
        queryFn: () => getRetreats(),
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

export const useGetFeaturedRetreats = () => {
    return useQuery<RetreatList[]>({
        queryKey: retreatKeys.all,
        queryFn: () => getFeaturedRetreats(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}



// Enrollments
export const useMyRetreats = () => {
    return useQuery<RegisteredRetreats[]>({
        queryKey: retreatKeys.registered,
        queryFn: () => getMyRetreats(),
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
