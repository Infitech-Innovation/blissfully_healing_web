import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import { ProfileContentIntro } from "@/features/private/profile/profile_content";
import { ProfileHeader } from "@/features/private/profile/profile_header";

export const metadata: Metadata = createMetadata({
  title: "Profile",
  description: "View your private Blissfully Healing profile.",
  path: "/user/profile",
  noIndex: true,
});

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileContentIntro />
    </div>
  );
}
