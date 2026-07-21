"use client";

import FooterSection from "../../../components/layout/_footer/footer";
import { Navbar } from "../../../components/layout/_navbar/navbar";
import { usePathname } from "next/navigation";

export default function PortfolioShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCourseDetail =
    pathname.startsWith("/courses/") && !pathname.startsWith("/courses/learn/");

  if (isCourseDetail) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
}
