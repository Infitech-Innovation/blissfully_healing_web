import axios from "axios";

/**
 * Create axios instance with default configuration
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// ── Helper: read and parse the auth cookie ──────────────────────────────────
function getAuthCookie(): { access: string | null } {
  try {
    const raw = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth-store="))
      ?.split("=")
      .slice(1)
      .join("=");

    if (!raw) return { access: null };

    const parsed = JSON.parse(decodeURIComponent(raw));
    return { access: parsed?.state?.access ?? null };
  } catch {
    return { access: null };
  }
}

// ── Request interceptor: attach Bearer access from cookie ────────────────────
api.interceptors.request.use((config) => {
  const { access } = getAuthCookie();
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
//   console.log(access)
  return config;
});

// ── Response interceptor: handle expired / invalid access ────────────────────
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      // Remove the auth cookie and redirect to login
      document.cookie =
        "auth-store=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
