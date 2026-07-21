"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/_sidebar/sidebar";
import { Topbar } from "@/components/layout/_topbar/topbar";
import { useProfile } from "@/hooks/useAuthenication";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useProfile();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="fixed">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((current) => !current)}
          mobileOpen={mobileOpen}
          onMobileOpenChange={setMobileOpen}
        />
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col overflow-hidden transition-[margin-left] duration-300 ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <Topbar onMenuClick={() => setMobileOpen((open) => !open)} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
