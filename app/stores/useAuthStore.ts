import { create } from "zustand";
import { persist } from "zustand/middleware";;
import { getDashboardForRole } from "../lib/roles";
import { createCookieStorage } from "./cookie-storage";
import { User } from "../(features)/(auth)/definations";

interface AuthState {
  // User data
  user: User | null;
  access: string | null;

  // Auth methods
  setAuthData: (user: User, access: string) => void;
  setUser: (user: User) => void;
  logout: () => void;

  // Getters
  isAuthenticated: () => boolean;
  getRedirectPath: () => string;
}

type PersistedAuthState = Pick<AuthState, "user" | "access">;

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      access: null,

      /**
       * Set user authentication data after login/register
       * @param user - Authenticated user
       * @param access - Auth access from server
       */
      setAuthData: (user, access) => {
        set({
          user,
          access,
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
        });
      },

      /**
       * Check if user is authenticated
       */
      isAuthenticated: () => {
        const { user, access } = get();
        return !!user && !!access;
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
      }),
      version: 1,
    },
  ),
);

// Export selector hooks for better performance
export const useUser = () => useAuthStore((state) => state.user);
export const useAuthToken = () => useAuthStore((state) => state.access);
