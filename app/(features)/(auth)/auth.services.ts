import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";
import {
  deleteProfile,
  loginUser,
  logoutUser,
  registerUser,
  userProfile,
} from "./auth.endpoint";
import { useEffect } from "react";
import { Profile } from "./definations";

export const authQueryKeys = {
  all: ["auth"] as const,
  user: () => [...authQueryKeys.all, "user"] as const,
};

/**
 * Mutation: Login with email and password
 */
export const useLogin = () => {
  const queryClient = useQueryClient();
  const { setAuthData, getRedirectPath } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      // 1. Persist user + token
      setAuthData(data.user as Profile, data.access, data.refresh);

      // 2. Cache user in React Query
      queryClient.setQueryData(authQueryKeys.user(), data.user);

      // 3. Redirect to the role-specific dashboard
      //    getRedirectPath() reads the role we just set above
      const path = getRedirectPath();
      router.replace(path === "/login" ? "/dashboard" : path);
    },

    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

/**
 * Mutation: Register a busnisee
 */
export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/login");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

/**
 * Mutation: Logout a user
 */
export const useLogout = () => {
  const queryClient = useQueryClient();
  const { logout, refresh } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: () => logoutUser(refresh || ""),
    onSuccess: () => {
      logout();
      queryClient.clear();
      router.replace("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};

/**
 * Query: Get User Profile
 */

export const useProfile = () => {
  const { setUser } = useAuthStore();
  const access = useAuthStore((state) => state.access);

  const query = useQuery<Profile>({
    queryKey: authQueryKeys.user(),
    queryFn: userProfile,
    enabled: !!access, // Only fetch if access token exists
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
  }, [query.data, setUser]);

  useEffect(() => {
    if (query.error) {
      console.error("Profile fetch failed:", query.error);
    }
  }, [query.error]);

  return query;
};

/**
 * Delete User Profile
 */

/**
 * Delete User Profile
 */
export const useDeleteProfile = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteProfile,

    onSuccess: () => {
      // clear auth store
      logout();

      // clear all react-query cached data
      queryClient.clear();

      // redirect user to login
      router.replace("/login");
    },

    onError: (error) => {
      console.error("Delete profile failed:", error);
    },
  });
};
