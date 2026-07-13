import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getGroupDetails, getGroups, getMyGroups, joinGroup, leaveGroup } from "../endpoints/groups.endpoints";
import { MyGroupMembershipResponse, SupportGroup, SupportGroupsResponse } from "@/types/groups.definations";

export const groupKeys = {
    all: ["support-groups"] as const,
    lists: () => [...groupKeys.all, "list"] as const,
    list: (page: number) =>
        [...groupKeys.lists(), page] as const,
    details: () => [...groupKeys.all, "detail"] as const,
    detail: (slug: string) =>
        [...groupKeys.details(), slug] as const,
    myGroups: ["my-groups"] as const,
    myGroupList: (page: number) =>
        [...groupKeys.myGroups, page] as const,
};

export const useGroups = (page = 1) => {
    return useQuery<SupportGroupsResponse>({
        queryKey: groupKeys.list(page),
        queryFn: () => getGroups(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,

    });
};

export const useGroupDetails = (slug: string) => {
    return useQuery<SupportGroup>({
        queryKey: groupKeys.detail(slug),
        queryFn: () => getGroupDetails(slug),
        enabled: !!slug,
    });
};

export const useMyGroups = (page = 1) => {
    return useQuery<MyGroupMembershipResponse>({
        queryKey: groupKeys.myGroupList(page),
        queryFn: () => getMyGroups(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    });
};

export const useJoinGroup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (slug: string) => joinGroup(slug),

        onSuccess: () => {
            // toast.success("Successfully joined the group.");

            queryClient.invalidateQueries({
                queryKey: ["support-groups"],
            });

            queryClient.invalidateQueries({
                queryKey: ["my-groups"],
            });
        },

        // onError: (error: any) => {
        //     toast.error(
        //         error?.response?.data?.detail ?? "Failed to join the group."
        //     );
        // },
    });
};

export const useLeaveGroup = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (slug: string) => leaveGroup(slug),

        onSuccess: () => {
            // toast.success("You left the group.");

            queryClient.invalidateQueries({
                queryKey: ["support-groups"],
            });

            queryClient.invalidateQueries({
                queryKey: ["my-groups"],
            });
        },

        // onError: (error) => {
        //     toast.error(
        //         error?.response?.data?.detail ?? "Failed to leave the group."
        //     );
        // },
    });
};
