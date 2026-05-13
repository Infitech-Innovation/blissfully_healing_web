"use client";

import { Bell, Heart, Menu, Search, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  onMenuClick: () => void;
}

const titleMap: Record<string, string> = {
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

const getTitle = (pathname: string) => {
  const match = Object.keys(titleMap)
    .sort((a, b) => b.length - a.length)
    .find((path) => pathname === path || pathname.startsWith(`${path}/`));

  return match ? titleMap[match] : "Blissfully Healing";
};

export function Topbar({ onMenuClick }: TopbarProps) {
  const pathname = usePathname();

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-[#eadfd4] bg-[#fffaf6]/90 px-4 backdrop-blur-md sm:px-6">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-[#6f5c4f] hover:bg-[#f3e8df] md:hidden"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex min-w-0 items-center gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-[#3f342c] sm:text-base">
            {getTitle(pathname)}
          </h1>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Search"
          className="hidden text-[#6f5c4f] hover:bg-[#f3e8df] sm:inline-flex"
        >
          <Search className="h-4 w-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="text-[#6f5c4f] hover:bg-[#f3e8df]"
        >
          <Bell className="h-4 w-4" />
        </Button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9a6b4f] text-xs font-semibold text-white shadow-sm"
          aria-label="User menu"
        >
          BH
        </button>
      </div>
    </header>
  );
}
