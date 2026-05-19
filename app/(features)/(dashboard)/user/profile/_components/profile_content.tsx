"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseBusiness, Mail, Languages } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ChangePasswordForm } from "./change_password";
import { useAuthStore } from "@/app/stores/useAuthStore";

interface UserDetails {
  role: string;
  email: string;
}

function ProfileContentIntroItem({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string | ReactNode;
}) {
  return (
    <li className="inline-flex items-baseline gap-x-1">
      <span className="h-4 w-4 translate-y-[0.2rem]">{icon}</span>
      <p>
        {title} <span className="text-primary">{value}</span>
      </p>
    </li>
  );
}

function ProfileContentIntroList({
  userDetails,
}: {
  userDetails: UserDetails;
}) {
  return (
    <ul className="grid gap-y-3">
      <ProfileContentIntroItem
        title="Role"
        value={<>{userDetails.role}</>}
        icon={<BriefcaseBusiness className="h-4 w-4" />}
      />

      <ProfileContentIntroItem
        title="Email"
        value={userDetails.email}
        icon={<Mail className="h-4 w-4" />}
      />
      {/* <ProfileContentIntroItem
        title="Phone Number"
        value={userData.phoneNumber}
        icon={<Phone className="h-4 w-4" />}
      /> */}
      <ProfileContentIntroItem
        title="Language"
        value="English"
        icon={<Languages className="h-4 w-4" />}
      />
    </ul>
  );
}

const navItems = [
  { key: "info", label: "Info" },
  { key: "change-password", label: "Change Password" },
] as const;

type NavKey = (typeof navItems)[number]["key"];

export function ProfileContentIntro() {
  const [active, setActive] = useState<NavKey>("info");

  const user = useAuthStore((state) => state.user);
  if (!user) return null;

  return (
    <div className="mt-8">
      <article className="flex">
        {/* Sidebar Nav */}
        <nav className="flex w-64 shrink-0 flex-col gap-y-1 border-e p-4 pt-6">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-md px-3 py-2 text-start text-sm font-medium transition-colors hover:bg-muted ${
                active === key
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="flex-1">
          {active === "info" && (
            <>
              <CardHeader>
                <CardTitle className="bold">Intro</CardTitle>
              </CardHeader>
              <CardContent className="mt-5">
                <ProfileContentIntroList userDetails={user} />
              </CardContent>
            </>
          )}
          {active === "change-password" && (
            <>
              <CardHeader>
                <CardTitle className="bold">Change Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure. Choose a
                  strong, unique password.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-5">
                <ChangePasswordForm />
              </CardContent>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
