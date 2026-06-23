import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contactCards = [
  {
    title: "Call the sanctuary",
    text: "+254 700 000 000",
    href: "tel:+254700000000",
    icon: Phone,
  },
  {
    title: "Email support",
    text: "hello@blissfullyhealing.com",
    href: "mailto:hello@blissfullyhealing.com",
    icon: Mail,
  },
  {
    title: "Healing base",
    text: "Nairobi, Kenya",
    href: "#office",
    icon: MapPin,
  },
];

export default function ContactCards() {
  return (
    <section className="relative z-10 -mt-14 px-6 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {contactCards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_18px_45px_rgba(63,52,44,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(63,52,44,0.15)]"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#f8f0e8] transition group-hover:bg-[#8f6249]">
              <item.icon className="h-5 w-5 text-[#8f6249] transition group-hover:text-white" />
            </span>
            <h2 className="font-serif text-xl font-semibold text-[#2f251f]">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-[#6f5c4f]">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
