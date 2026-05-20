"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, Loader2, UserCircle2 } from "lucide-react";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogout } from "@/app/(features)/(auth)/auth.services";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function UserMenu() {
  const user = useAuthStore((state) => state.user);
  const { mutate: logoutUser, isPending: isLoggingOut } = useLogout();
  const fallbackName =
    `${user?.first_name ?? "User"} ${user?.last_name ?? ""}`.trim();
  const name = user?.full_name || fallbackName;
  const profileHref = user?.role === "admin" ? "/admin/settings" : "/user/profile";
  const settingsHref =
    user?.role === "admin" ? "/admin/settings" : "/settings";

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "BH";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="User menu"
        >
          {initials}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
      >
        {/* User info */}
        <DropdownMenuLabel className="font-normal">
          <p className="text-sm font-medium text-foreground">
            {name}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {user?.email ?? ""}
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Account Settings */}
        <DropdownMenuItem asChild>
          <Link href={profileHref} className="group flex cursor-pointer items-center">
            <UserCircle2 className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={settingsHref}
            className="group flex cursor-pointer items-center"
          >
            <Settings className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          onClick={() => logoutUser()}
          disabled={isLoggingOut}
          className="group cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600 disabled:cursor-not-allowed"
        >
          <div
            className={cn(
              "mr-2 flex h-4 w-4 items-center justify-center",
              isLoggingOut && "animate-spin",
            )}
          >
            {isLoggingOut ? (
              <Loader2 className="h-4 w-4" />
            ) : (
              <LogOut className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
          </div>
          <span
            className={cn(
              "transition-opacity duration-200",
              isLoggingOut && "opacity-60",
            )}
          >
            {isLoggingOut ? "Logging out..." : "Log out"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
