import Link from "next/link";
import ReatreatCard from "./ReatreatCard";
import { stays } from "@/types/retreats.definations";

export function MyReatreatsSection() {
    return (
        <section className="bg-[#fffaf6] px-6 py-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
                            Your Personal Ledger
                        </p>
                        <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] md:text-5xl">
                            My Booked
                            <br />
                            Retreat Journeys
                        </h2>
                    </div>
                    <div className="md:max-w-xs">
                        <p className="mb-4 text-sm leading-7 text-[#6f5c4f]">
                            Review your upcoming sanctuary itineraries, past integration
                            resource materials, and saved reflection containers.
                        </p>
                        <Link
                            href="/retreats"
                            className="inline-block rounded-[8px] border border-[#eadfd4] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
                        >
                            Explore New Spaces
                        </Link>
                    </div>
                </div>

                <ReatreatCard retreat={stays} />
            </div>
        </section>
    );
}
