import { ProfileContentIntro } from "@/features/private/profile/profile_content";
import { ProfileHeader } from "@/features/private/profile/profile_header";

export default function ProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileContentIntro />
    </div>
  );
}
