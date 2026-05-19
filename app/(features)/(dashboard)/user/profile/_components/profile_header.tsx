"use client";

import Image from "next/image";
import Link from "next/link";
import { UserPen } from "lucide-react";
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/app/stores/useAuthStore";

// --- Hardcoded data ---
const userData = {
  background:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function ProfileHeader() {
  const user = useAuthStore((state) => state.user);
  const name = `${user?.first_name ?? "User"} ${user?.last_name ?? ""}`.trim();
  
  return (
    <section className="bg-background border-y border-border">
      <AspectRatio ratio={5 / 1} className="bg-muted">
        {userData.background && (
          <Image
            src={userData.background}
            fill
            className="h-full w-full object-cover"
            alt="Profile Background"
          />
        )}
      </AspectRatio>
      <div className="relative w-full flex flex-col items-center gap-2 p-4 md:flex-row">
        <Avatar className="size-32 -mt-20 md:size-40">
          {/* <AvatarImage
            src={userData.avatar}
            alt="Profile Avatar"
            className="border-4 border-background"
          /> */}
          <AvatarFallback className="border-4 border-background text-6xl bold">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <Link
          href="/user/profile/:id"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "absolute top-4 end-4",
          )}
          aria-label="Edit your profile"
        >
          <UserPen className="size-8" />
        </Link>
        <div className="text-center md:text-start">
          <div>
            <h1 className="text-2xl font-bold line-clamp-1">{name}</h1>
            <p className="text-muted-foreground line-clamp-1">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
