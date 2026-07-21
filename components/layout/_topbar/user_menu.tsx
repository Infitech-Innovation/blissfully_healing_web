"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Loader2, UserCircle2 } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useLogout } from "@/hooks/useAuthenication";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserMenu() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const { mutate: logoutUser, isPending: isLoggingOut } = useLogout();

  const initials = user?.full_name
    ? user.full_name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
    : "BH";

  //check route panel
  const isUserArea = pathname.startsWith("/user");
  // Dynamically switch destination depending on security role definitions
  const profileHref =
    user?.role === "admin" ? "/admin/settings" : "/user/profile";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex items-center justify-center rounded-full bg-[#8f6249] font-bold uppercase tracking-wider text-white outline-none ring-offset-white transition hover:bg-[#3f342c] focus-visible:ring-2 focus-visible:ring-[#8f6249] focus-visible:ring-offset-2 ${isUserArea
            ? "h-8 w-8 text-[11px]"
            : "h-11 w-11 text-sm"
            }`}
          aria-label="Toggle structural user dashboard operations card"
        >
          {initials}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 border-[#eadfd4] bg-white p-1.5 shadow-[0_10px_30px_rgba(63,52,44,0.08)] animate-in fade-in-0 zoom-in-95"
      >
        {/* User Identity Ledger Details */}
        <DropdownMenuLabel className="px-2.5 py-2 font-normal">
          <p className="text-xs font-bold uppercase tracking-wider text-[#8f6249]">
            {user?.role === "admin" ? "Administrator Account" : "Workspace Hub"}
          </p>
          <p className="font-serif text-sm font-medium text-[#2f251f] mt-0.5 truncate">
            {user?.full_name ?? "Valued Seeker"}
          </p>
          {user?.email && (
            <p className="truncate text-xs text-[#7a6658] opacity-85 mt-0.5">
              {user.email}
            </p>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-[#eadfd4]/60 my-1" />

        {/* Dynamic Route Gateway Item */}
        <DropdownMenuItem asChild>
          <Link
            href={profileHref}
            className="group flex w-full cursor-pointer items-center rounded-[4px] px-2.5 py-2 text-xs font-medium text-[#3f342c] outline-none transition-colors hover:bg-[#fffaf6] focus:bg-[#fffaf6] focus:text-[#8f6249]"
          >
            <UserCircle2 className="mr-2 h-4 w-4 text-[#6f5c4f] transition-transform duration-200 group-hover:scale-105 group-focus:text-[#8f6249]" />
            <span>Account Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-[#eadfd4]/60 my-1" />

        {/* Synchronized Destruction Action Parameter */}
        <DropdownMenuItem
          onClick={() => logoutUser()}
          disabled={isLoggingOut}
          className="group flex w-full cursor-pointer items-center rounded-[4px] px-2.5 py-2 text-xs font-semibold text-red-600 outline-none transition-colors focus:bg-red-50/60 focus:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoggingOut ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-red-500" />
          ) : (
            <LogOut className="mr-2 h-4 w-4 text-red-500/80 transition-transform duration-200 group-hover:translate-x-0.5" />
          )}
          <span>{isLoggingOut ? "Leaving..." : "Log Out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
