import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import ContactCards from "@/features/public/contact/ContactCards";
import ContactForm from "@/features/public/contact/ContactForm";
import ContactHero from "@/features/public/contact/ContactHero";
import ContactSidebar from "@/features/public/contact/ContactSidebar";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Blissfully Healing for support, guidance, partnerships, and wellness program questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="bg-[#fffaf6]">
      <ContactHero />
      <ContactCards />

      <section className="px-6 py-20 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>
    </main>
  );
}
