import CheckOutButton from "@/components/common/checkoutBtn";
import { RegisterButton } from "@/features/public/retreats/RegisterButton";
import { RegisteredRetreats } from "@/types/retreats.definations";
import { Download } from "lucide-react";
import Image from "next/image";

type RetreatProps = {
    retreat: RegisteredRetreats;
    onCancelClick: (retreat: { slug: string; title: string }) => void;
    price: number;
};

export default function RetreatCard({ retreat,price, onCancelClick }: RetreatProps) {

    return (
        <article
            key={retreat.retreat.slug}
            className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#eadfd4] bg-white shadow-[0_18px_45px_rgba(63,52,44,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(63,52,44,0.14)]"
        >
            {/* ── Hero image ── */}
            <div className="relative h-60 overflow-hidden bg-[#f8f0e8]">
                <Image
                    src={retreat.retreat?.cover_image}
                    alt={retreat.retreat?.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f251f]/50 via-transparent to-transparent" />
                {/* Tag pill */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#8f6249] shadow-sm backdrop-blur">
                    {retreat.retreat.category_label}
                </div>
                {/* <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#8f6249] shadow-md backdrop-blur-sm">
                        {retreat.retreat.category_label}
                    </span> */}
            </div>

            {/* ── Body ── */}
            <div className="flex flex-1 flex-col p-5">
                {/* Title + description */}
                <h3 className="text-xl font-semibold leading-snug text-[#2f251f]">
                    {retreat.retreat.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-[#6f5c4f]">
                    {retreat.retreat.short_description}
                </p>
                {/* ── Action row ── */}
                <div className="mt-auto flex w-full items-center justify-center gap-3">
                    {retreat.status === "PENDING_CALL" ? (
                        <div className="flex-[4]">
                            <CheckOutButton
                                id={retreat.retreat.id}
                                type="retreat"
                                btnName="Make Payment"
                            />
                        </div>
                    ) : retreat.status === "CANCELLED" ? (
                        <div className="flex-[4]">
                            <RegisterButton slug={retreat.retreat.slug} price={price} />
                        </div>
                    ) : retreat.status === "CONFIRMED" ? (
                        <button
                            className="flex-[4] h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B4F3C] px-4 text-sm font-semibold text-white transition hover:bg-[#083A2C]"
                        >
                            <Download size={16} />
                            Download Itinerary
                        </button>
                    ) : null}

                    {retreat.status !== "CANCELLED" && (
                        <button
                            type="button"
                            onClick={() =>
                                onCancelClick({
                                    slug: retreat.retreat.slug,
                                    title: retreat.retreat.title,
                                })
                            }
                            className="flex-[1] h-11 inline-flex items-center justify-center rounded-lg bg-red-50 px-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>
            {/* Meta grid */}
            {/* <div className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2.5 rounded-lg bg-[#faf5f0] px-4 py-3 text-[14px] text-[#6f5c4f]">
                                <span className="flex items-center gap-1.5">
                                    <Clock size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {retreat.duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {retreat.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Users size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {retreat.groupSize}
                                </span>
                                <span className="flex items-center gap-1.5 font-semibold text-[#2f251f]">
                                    <CheckCircle2 size={12} className="text-[#8f6249]" aria-hidden="true" />
                                    {retreat.price} Paid
                                </span>
                            </div> */}

            {/* CTA */}
            {/* <div className="mt-auto">
                                <Link
                                    href={`/retreats/${retreat.retreat.slug}`}
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
                            </div> */}
        </article >
    );
}