import {
    ArrowRight,
    Calendar,
    MapPin,
    Users,
    Clock,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Retreat } from "@/types/retreats.definations";

type RetreatProps = {
    retreat: Retreat[];
};

export default function RetreatCard({ retreat }: RetreatProps) {
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {retreat.map((stay) => {
                const isUpcoming = stay.status === "upcoming";

                return (
                    <article
                        key={stay.slug}
                        className="group flex flex-col overflow-hidden rounded-xl border border-[#ede4da] bg-white transition-all duration-300 hover:border-[#d4c4b4] hover:shadow-[0_20px_60px_rgba(63,52,44,0.09)]"
                    >
                        {/* ── Header: date + status badge ── */}
                        <div className="flex items-center justify-between border-b border-[#f3ece4] px-5 py-3.5">
                            <div className="flex items-center gap-2 text-[13px] text-[#6f5c4f]">
                                <Calendar
                                    size={14}
                                    className={isUpcoming ? "text-[#8f6249]" : "text-[#9e8e83]"}
                                    aria-hidden="true"
                                />
                                <span>{stay.retreatDate}</span>
                            </div>
                            <span
                                className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${isUpcoming
                                        ? "bg-[#8f6249]/10 text-[#8f6249]"
                                        : "bg-[#f0ebe5] text-[#9e8e83]"
                                    }`}
                            >
                                {stay.status}
                            </span>
                        </div>

                        {/* ── Hero image ── */}
                        <div
                            className={`relative aspect-video w-full overflow-hidden ${!isUpcoming ? "saturate-[0.6]" : ""
                                }`}
                        >
                            <Image
                                src={stay.image}
                                alt={stay.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                unoptimized
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e140f]/50 via-transparent to-transparent" />
                            {/* Tag pill */}
                            <span className="absolute bottom-3 left-4 rounded bg-white/93 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#8f6249] shadow-sm">
                                {stay.tag}
                            </span>
                        </div>

                        {/* ── Body ── */}
                        <div className="flex flex-1 flex-col p-5">
                            {/* Title + description */}
                            <h3 className="mb-1.5 font-serif text-[18px] font-semibold leading-snug text-[#2f251f]">
                                {stay.name}
                            </h3>
                            <p className="mb-4 text-[16px] leading-relaxed text-[#6f5c4f]">
                                {stay.desc}
                            </p>

                            {/* Meta grid */}
                            <div className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2.5 rounded-lg bg-[#faf5f0] px-4 py-3 text-[14px] text-[#6f5c4f]">
                                <span className="flex items-center gap-1.5">
                                    <Clock size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {stay.duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {stay.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Users size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {stay.groupSize}
                                </span>
                                <span className="flex items-center gap-1.5 font-semibold text-[#2f251f]">
                                    <CheckCircle2 size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {stay.price} Paid
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="mt-auto">
                                <Link
                                    href={`/retreats/${stay.slug}`}
                                    className="group/btn flex items-center justify-between rounded-lg border border-[#ede4da] bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-[#6f5c4f] transition-all duration-200 hover:border-[#8f6249] hover:text-[#8f6249]"
                                >
                                    <span>
                                        {isUpcoming
                                            ? "Access preparation guide & details"
                                            : "Download integration assets"}
                                    </span>
                                    <ArrowRight
                                        size={13}
                                        className="transition-transform duration-200 group-hover/btn:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}