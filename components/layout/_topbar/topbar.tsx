"use client";

import { useMemo } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import UserMenu from "./user_menu";

interface TopbarProps {
  onMenuClick: () => void;
}

const TITLE_MAP: Record<string, string> = {
  "/admin/dashboard": "Admin Dashboard",
  "/admin/blogs": "Blogs",
  "/admin/courses": "Courses",
  "/admin/videos": "Healing Videos",
  "/admin/ebooks": "E-Books",
  "/admin/retreats": "Retreats",
  "/admin/support-groups": "Support Groups",
  "/admin/users": "Users",
  "/admin/payments": "Payments",
  "/admin/analytics": "Analytics",
  "/admin/media": "Media Library",
  "/admin/settings": "Settings",

  "/dashboard": "My Healing Space",
  "/user/journey": "Healing Journey",
  "/user/courses": "My Courses",
  "/user/ebooks": "My E-Books",
  "/user/retreats": "My Retreats",
  "/user/support-groups": "Support Groups",
  "/user/purchases": "Purchases",
  "/user/videos": "Healing Videos",
  "/user/profile": "Profile",
  "/user/settings": "Settings",

  "/help": "Help Center",
  "/admin-guide": "Admin Guide",
  "/support": "Support",
  "/security": "Security",
};

// Sort keys once outside the component thread to save execution cycles
const SORTED_PATHS = Object.keys(TITLE_MAP).sort((a, b) => b.length - a.length);

export function Topbar({ onMenuClick }: TopbarProps) {
  const pathname = usePathname();

  // Cache title evaluations to eliminate redundant path parsing recalculations
  const pageTitle = useMemo(() => {
    const match = SORTED_PATHS.find(
      (path) => pathname === path || pathname.startsWith(`${path}/`)
    );
    return match ? TITLE_MAP[match] : "Blissfully Healing";
  }, [pathname]);

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-[#eadfd4] bg-[#fffaf6]/90 px-4 backdrop-blur-md sm:px-6">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-[#6f5c4f] hover:bg-[#f3e8df] hover:text-[#3f342c] md:hidden"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex min-w-0 items-center gap-3">
        <h1 className="truncate font-serif text-sm font-semibold tracking-wide text-[#3f342c] sm:text-base">
          {pageTitle}
        </h1>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Search dashboard"
          className="hidden text-[#6f5c4f] hover:bg-[#f3e8df] hover:text-[#3f342c] sm:flex"
        >
          <Search className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="View alerts"
          className="text-[#6f5c4f] hover:bg-[#f3e8df] hover:text-[#3f342c]"
        >
          <Bell className="h-4 w-4" />
        </Button>

        <Suspense fallback={<div className="h-8 w-8 animate-pulse rounded-full bg-[#eadfd4]" />}>
          <UserMenu />
        </Suspense>
      </div>
    </header>
  );
}