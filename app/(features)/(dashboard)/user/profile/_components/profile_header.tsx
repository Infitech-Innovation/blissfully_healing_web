"use client";

import Image from "next/image";
import Link from "next/link";
import { UserPen } from "lucide-react";
import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { useAuthStore } from "@/app/stores/useAuthStore";

// Soft, grounding, organic mountain backdrop to fit your sanctuary brand
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
  const fallbackName =
    `${user?.first_name ?? "User"} ${user?.last_name ?? ""}`.trim();
  const name = user?.full_name || fallbackName;

  return (
    <section className="bg-white border border-[#eadfd4] rounded-[8px] overflow-hidden shadow-[0_12px_30px_rgba(63,52,44,0.02)]">
      
      {/* Immersive Structural Cover Crop */}
      <AspectRatio ratio={5 / 1} className="bg-[#f8f0e8]">
        {userData.background && (
          <Image
            src={userData.background}
            fill
            loading="eager"
            className="h-full w-full object-cover brightness-[0.95]"
            alt="Profile Sanctuary Background"
            unoptimized
          />
        )}
      </AspectRatio>

      {/* Profile Details Bar Layout */}
      <div className="relative w-full flex flex-col items-center gap-4 p-6 md:flex-row md:items-end md:gap-6">
        
        {/* Ivory Framed Portrait Avatar Container */}
        <Avatar className="size-32 -mt-20 md:size-36 shrink-0 shadow-[0_8px_20px_rgba(63,52,44,0.08)]">
          <AvatarImage
            src={user?.avatar || " "}
            alt="Profile Avatar"
            loading="eager"
            className="border-4 border-white object-cover"
          />
          <AvatarFallback className="border-4 border-white bg-[#fffaf6] text-3xl font-serif font-bold text-[#8f6249]">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        {/* Action Link Button Element */}
        <Link
          href={`/user/profile/${user?.id}`}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "absolute top-4 end-4 text-[#8f6249] hover:text-[#2f251f] hover:bg-[#f8f0e8] rounded-full transition-colors",
          )}
          aria-label="Edit your profile"
        >
          <UserPen className="size-5" />
        </Link>

        {/* Brand Typography Information Section */}
        <div className="text-center md:text-start flex-1 min-w-0 md:pb-1">
          <h1 className="font-serif text-2xl font-semibold leading-tight text-[#2f251f] line-clamp-1">
            {name}
          </h1>
          <p className="text-xs font-medium text-[#744d39] line-clamp-1 mt-0.5">
            {user?.email}
          </p>
          
          {user?.bio && (
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#6f5c4f] font-medium bg-[#fffaf6] border border-[#eadfd4]/60 px-3 py-1.5 rounded-[4px] inline-block italic">
              &ldquo;{user.bio}&rdquo;
            </p>
          )}
        </div>

      </div>
    </section>
  );
}