"use client";

import AdminDashboard from "./_pages/admindashboard";
import { JSX, useEffect } from "react";
import UserDashboard from "./_pages/usersdashboard";
import { ROLE } from "../../(auth)/definations";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";

const DASHBOARD_MAP: Record<ROLE, () => JSX.Element> = {
  admin: () => <AdminDashboard />,
  user: () => <UserDashboard />,
};

export default function DashboardPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) return null;

  const DashboardComponent = DASHBOARD_MAP[user.role];

  // Role from API doesn't match any known role
  if (!DashboardComponent) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-600 font-medium">
            Unknown role: <code>{user.role}</code>
          </p>
          <p className="text-sm text-red-400 mt-1">Please contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-full w-full flex-col">
      {DashboardComponent()}
    </div>
  );
}
