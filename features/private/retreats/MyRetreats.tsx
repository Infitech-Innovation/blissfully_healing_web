"use client";

import Link from "next/link";
import { useCancelRetreat, useMyRetreats } from "@/services/businessservices/retreats.services";
import { MyRetreatSkeleton } from "@/components/skeleton/MyRetreats";
import RetreatCard from "./ReatreatCard";
import { useState } from "react";
import CancelRetreatModal from "./CancelRetreat";


export function MyReatreatsSection() {

    const { data: myretreats = [], isLoading } = useMyRetreats();
    console.log("my retreats data", myretreats);

    const cancelRetreatMutation = useCancelRetreat();

    const [activeRetreatToCancel, setActiveRetreatToCancel] = useState<{
        slug: string;
        title: string;
    } | null>(null);

    const handleDeleteConfirmation = () => {
        if (!activeRetreatToCancel) return;

        cancelRetreatMutation.mutate(activeRetreatToCancel.slug, {
            onSuccess: () => {
                setActiveRetreatToCancel(null);
            },
        });
    };

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

                {isLoading ? (
                    <MyRetreatSkeleton />
                ) : (myretreats?.length ?? 0) > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3">
                        {myretreats.map((retreat) => (
                            <RetreatCard key={retreat.id} price={0} retreat={retreat} onCancelClick={setActiveRetreatToCancel} />
                            // <RetreatCard key={retreat.id} retreat={retreat} price={retreat.price} onCancelClick={setActiveRetreatToCancel} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[28px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
                        <h3 className="text-xl font-semibold text-[#2f251f]">
                            No Retreat found
                        </h3>
                        <p className="mt-3 text-[#6f5c4f]">
                            Try another focus area or clear your search.
                        </p>
                    </div>
                )}
            </div>
            {activeRetreatToCancel && (
                <CancelRetreatModal
                    title="Cancel Registered Retreat"
                    name={activeRetreatToCancel.title}
                    description="This will permanently cancel the booking selection and remove it from the ledger."
                    onConfirm={handleDeleteConfirmation}
                    onCancel={() => setActiveRetreatToCancel(null)}
                    isLoading={cancelRetreatMutation.isPending}
                />
            )}
        </section>
    );
}
