import { ROLE } from "../(features)/(auth)/definations";

// Where each role lands after login
export const ROLE_DASHBOARDS: Record<ROLE, string> = {
  admin: "/dashboard",
  user: "/dashboard",
};

// Which roles are permitted on each path prefix
// More permissive roles listed first
export const ROLE_PATH_PERMISSIONS: Record<string, ROLE[]> = {
  "/dashboard": ["admin", "user"],
};

export function getDashboardForRole(role: ROLE): string {
  return ROLE_DASHBOARDS[role] ?? "/dashboard";
}

export function isRoleAllowedOnPath(role: ROLE, pathname: string): boolean {
  for (const [prefix, allowedRoles] of Object.entries(ROLE_PATH_PERMISSIONS)) {
    if (pathname.startsWith(prefix)) {
      return allowedRoles.includes(role);
    }
  }
  // No rule matched — allow (public/unprotected path)
  return true;
}
