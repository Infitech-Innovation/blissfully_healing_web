"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { Mail, Languages, NotebookText } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { DangerousZone } from "./_delete/danger_zone";
import { cn } from "@/lib/utils";
import { ChangePasswordForm } from "./change_password";

interface UserDetails {
  role: string;
  email: string;
  bio?: string | null;
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
    <li className="flex items-start gap-3 rounded-[6px] border border-[#eadfd4]/60 bg-white p-3.5 shadow-[0_4px_12px_rgba(63,52,44,0.01)]">
      <span className="h-4 w-4 text-[#8f6249] shrink-0 mt-0.5">{icon}</span>
      <div className="space-y-0.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#b28b67]">
          {title}
        </p>
        <p className="text-sm font-medium text-[#2f251f]">{value}</p>
      </div>
    </li>
  );
}

function ProfileContentIntroList({
  userDetails,
}: {
  userDetails: UserDetails;
}) {
  return (
    <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2">
      <ProfileContentIntroItem
        title="Email"
        value={userDetails.email}
        icon={<Mail className="h-4 w-4" />}
      />
      <ProfileContentIntroItem
        title="Language Preference"
        value="English"
        icon={<Languages className="h-4 w-4" />}
      />
      <div className="sm:col-span-2">
        <ProfileContentIntroItem
          title="Personal Journey Bio"
          value={
            userDetails.bio ||
            "No reflection bio added to your sanctuary profile yet."
          }
          icon={<NotebookText className="h-4 w-4" />}
        />
      </div>
    </ul>
  );
}

const navItems = [
  { key: "info", label: "Account Info" },
  { key: "achievements", label: "Achievements" },
  { key: "change-password", label: "Security & Password" },
  
] as const;

type NavKey = (typeof navItems)[number]["key"];

export function ProfileContentIntro() {
  const [active, setActive] = useState<NavKey>("info");
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="mt-8 rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_12px_30px_rgba(63,52,44,0.02)] overflow-hidden">
      <article className="flex flex-col min-[900px]:flex-row">
        {/* Sanctuary Sidebar Nav Layout */}
        <nav className="flex w-full shrink-0 gap-2 overflow-x-auto border-b border-[#eadfd4] bg-[#fffaf6] p-4 min-[900px]:w-64 min-[900px]:flex-col min-[900px]:gap-y-1.5 min-[900px]:overflow-visible min-[900px]:border-b-0 min-[900px]:border-e min-[900px]:p-6">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "shrink-0 rounded-[4px] px-4 py-2.5 text-start text-xs font-bold uppercase tracking-wider transition-all",
                active === key
                  ? "bg-[#8f6249] text-white shadow-sm"
                  : "text-[#6f5c4f] hover:bg-[#f8f0e8] hover:text-[#2f251f]",
              )}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Primary Settings Workspace Panel */}
        <div className="min-w-0 flex-1 bg-white p-6 sm:p-8">
          {active === "info" && (
            <div className="space-y-6">
              <div>
                <CardTitle className="font-serif text-xl font-semibold text-[#2f251f]">
                  Account Profile
                </CardTitle>
                <CardDescription className="text-xs text-[#744d39] mt-0.5">
                  Your fundamental digital presence inside the portal.
                </CardDescription>
              </div>
              <ProfileContentIntroList userDetails={user} />
              <DangerousZone />
            </div>
          )}

          {active === "change-password" && (
            <div className="space-y-6 max-w-xl">
              <div>
                <CardTitle className="font-serif text-xl font-semibold text-[#2f251f]">
                  Security Settings
                </CardTitle>
                <CardDescription className="text-xs text-[#744d39] mt-0.5">
                  Update your authentication tokens regularly to guarantee
                  private spatial integrity.
                </CardDescription>
              </div>
              <ChangePasswordForm />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
