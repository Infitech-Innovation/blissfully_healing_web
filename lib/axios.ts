import { useAuthStore } from "@/app/stores/useAuthStore";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Create axios instance with default configuration
 */
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// ── Request interceptor: attach Bearer token from store ──────────────────────
api.interceptors.request.use((config) => {
  const access = useAuthStore.getState().access; 
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

// ── Response interceptor: handle expired / invalid access ────────────────────
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    const currentRefresh = useAuthStore.getState().refresh;

    if (!currentRefresh) {
      useAuthStore.getState().logout();
      // Use soft navigation instead of hard reload to preserve component state
      // The middleware/proxy will handle redirecting unauthenticated requests
      return Promise.reject(error);
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/token/refresh/`, // same base URL as everything else
        { refresh: currentRefresh },
      );

      const { access, refresh } = res.data;

      useAuthStore
        .getState()
        .setAuthData(useAuthStore.getState().user!, access, refresh);

      originalRequest.headers.Authorization = `Bearer ${access}`;
      return api(originalRequest);
    } catch {
      useAuthStore.getState().logout();
      window.location.href = "/login";
      return Promise.reject(error);
    }
  },
);
