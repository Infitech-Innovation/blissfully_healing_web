import { Navbar } from "./_navbar/navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#3f342c]">
      <Navbar />

      <main>{children}</main>

      <footer className="border-t border-[#eadfd4] bg-[#f8f0e8] px-4 py-8 text-center text-sm text-[#7a6658]">
        <p className="font-medium text-[#3f342c]">Blissfully Healing</p>
        <p className="mt-1">A calm space to heal, reconnect, and grow.</p>
      </footer>
    </div>
  );
}
