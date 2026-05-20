import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getDashboardForRole } from "../lib/roles";
import { createCookieStorage } from "./cookie-storage";
import { Profile } from "../(features)/(auth)/definations";

interface AuthState {
  // User data
  user: Profile | null;
  access: string | null;
  refresh: string | null;

  // Auth methods
  setAuthData: (user: Profile, access: string, refresh: string) => void;
  setUser: (user: Profile) => void;
  logout: () => void;

  // Getters
  isAuthenticated: () => boolean;
  getRedirectPath: () => string;
}

type PersistedAuthState = Pick<AuthState, "user" | "access" | "refresh">;

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      access: null,
      refresh: null,

      /**
       * Set user authentication data after login/register
       * @param user - Authenticated user
       * @param access - Auth access from server
       * @param refresh - Auth refresh token from server
       */
      setAuthData: (user, access, refresh) => {
        set({
          user,
          access,
          refresh,
        });
      },

      /**
       * Update user data (after profile update)
       * @param user - Updated user object
       */
      setUser: (user) => {
        set({ user });
      },

      /**
       * Clear all auth data on logout
       */
      logout: () => {
        set({
          user: null,
          access: null,
          refresh: null,
        });
      },

      /**
       * Check if user is authenticated
       */
      isAuthenticated: () => {
        const { user, access, refresh } = get();
        return !!user && !!access && !!refresh;
      },

      getRedirectPath: () => {
        const { user } = get();
        if (!user) return "/login";
        return getDashboardForRole(user.role);
      },
    }),
    {
      name: "auth-store",
      storage: createCookieStorage<PersistedAuthState>(),
      partialize: (state): PersistedAuthState => ({
        user: state.user,
        access: state.access,
        refresh: state.refresh,
      }),
      version: 1,
    },
  ),
);

// Export selector hooks for better performance
export const useUser = () => useAuthStore((state) => state.user);
export const useAuthToken = () => useAuthStore((state) => state.access);
export const useRefreshToken = () => useAuthStore((state) => state.refresh);
