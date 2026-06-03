import {
  ArrowRight,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

const supportOptions = [
  "Retreat fit and availability",
  "Course access and guidance",
  "Private healing session enquiries",
  "Support for choosing a pathway",
];

const contactDetails = [
  { icon: Mail, label: "hello@blissfullyhealing.com" },
  { icon: Phone, label: "+254 700 000 000" },
  { icon: MapPin, label: "Nairobi, Kenya" },
];

export default function ContactSidebar() {
  return (
    <aside id="office" className="space-y-6">
      <div className="rounded-[8px] bg-[#2f251f] p-6 text-white shadow-[0_18px_45px_rgba(63,52,44,0.12)]">
        <HeartHandshake className="mb-5 h-8 w-8 text-[#d8b06a]" />
        <h2 className="font-serif text-3xl font-semibold">Sanctuary details</h2>
        <div className="mt-6 space-y-4 text-white/75">
          {contactDetails.map((item) => (
            <p key={item.label} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-[#d8b06a]" />
              {item.label}
            </p>
          ))}
          <p className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-[#d8b06a]" />
            Mon - Fri, 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>

      <div className="rounded-[8px] border border-[#eadfd4] bg-white p-6 shadow-[0_14px_38px_rgba(63,52,44,0.07)]">
        <MessageCircle className="mb-5 h-8 w-8 text-[#8f6249]" />
        <h2 className="font-serif text-3xl font-semibold text-[#2f251f]">
          Quick support
        </h2>
        <div className="mt-5 space-y-3">
          {supportOptions.map((item) => (
            <p key={item} className="flex items-center gap-3 text-[#6f5c4f]">
              <span className="h-2 w-2 rounded-full bg-[#8f6249]" />
              {item}
            </p>
          ))}
        </div>
        <Link
          href="/retreats"
          className="mt-7 inline-flex items-center gap-2 rounded-[8px] border border-[#8f6249] px-5 py-3 text-sm font-semibold text-[#8f6249] transition hover:bg-[#f8f0e8]"
        >
          Explore retreats
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
