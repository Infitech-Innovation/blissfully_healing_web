"use client";

import { useEffect, useState } from "react";
import NewFooter from "@/components/layout/_footer/new-footer";
import { Navbar } from "../../../components/layout/_navbar/navbar";
import { usePathname } from "next/navigation";

export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [stillnessMeditationActive, setStillnessMeditationActive] =
    useState(false);
  const isCourseDetail =
    pathname.startsWith("/courses/") && !pathname.startsWith("/courses/learn/");
  const isTemple = pathname.startsWith("/temples");
  const useStillnessNavbar =
    pathname === "/temples/stillness" && stillnessMeditationActive;

  useEffect(() => {
    if (pathname !== "/temples/stillness") {
      return;
    }

    const handleStillnessMode = (event: Event) => {
      const { active } = (event as CustomEvent<{ active: boolean }>).detail;
      setStillnessMeditationActive(active);
    };

    window.addEventListener("stillness-meditation-mode", handleStillnessMode);
    return () => {
      window.removeEventListener(
        "stillness-meditation-mode",
        handleStillnessMode
      );
    };
  }, [pathname]);

  if (isCourseDetail) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      {!useStillnessNavbar && <Navbar />}
      <main>{children}</main>
      {/* <FooterSection /> */}
      {!isTemple && <NewFooter />}
    </div>
  );
}
