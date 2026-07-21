import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import { EditProfileForm } from '../forms/EditForm';

export const metadata: Metadata = createMetadata({
  title: "Edit Profile",
  description: "Update your private Blissfully Healing profile.",
  path: "/user/profile/edit",
  noIndex: true,
});

export default function EditProfilePage() {
  return <EditProfileForm/>;
}
