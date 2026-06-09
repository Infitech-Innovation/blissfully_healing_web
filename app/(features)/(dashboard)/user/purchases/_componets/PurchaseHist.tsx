"use client";

import { useState } from "react";
import {
    Search,
} from "lucide-react";
import { transactionHistory, TransactionType } from "../definations";
import PurchaseCard from "./PurchaseCard";

export default function PurchaseHist() {
    const [filter, setFilter] = useState<"all" | TransactionType>("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Filtering Logic
    const filteredTransactions = transactionHistory.filter((txn) => {
        const matchesFilter = filter === "all" || txn.category === filter;
        const matchesSearch =
            txn.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            txn.id.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Calculate overall investment numbers
    const totalInvestment = "KES 56,750";

    return (
        <section className="bg-[#fffaf6]">
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-4">
                <div className="mb-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end border-b border-[#eadfd4] pb-8">
                    {/* Left Side: Title & Description Column */}
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8f6249]">
                                Financial Ledger
                            </p>
                            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#2f251f] md:text-5xl">
                                My Purchase
                                <br />
                                History & Receipts
                            </h2>
                        </div>

                        <div className="md:max-w-xs">
                            <p className="mb-4 text-sm leading-7 text-[#6f5c4f]">
                                Review your investment profiles, download formal item receipts,
                                and manage active platform configurations.
                            </p>
                            <div className="text-xs font-bold text-[#8f6249] uppercase tracking-wider">
                                Total Invested:{" "}
                                <span className="text-[#2f251f] ml-1">{totalInvestment}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side: Search Input Container */}
                <div className="w-full lg:w-[360px] mb-4  ml-auto">
                    <label className="relative block w-full">
                        <Search className="pointer-events-none absolute left-4 top-1/2  h-4 w-4 -translate-y-1/2 text-[#9a6b4f]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search statements, ID or names..."
                            className="h-12 w-full rounded-[8px] border border-[#eadfd4] bg-white pl-11 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b39c8c] focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/10"
                        />
                    </label>
                </div>

                {/* Filter Management Segment */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {(["all", "retreat", "course", "ebook"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`rounded-[6px] px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${filter === type
                                    ? "bg-[#8f6249] text-white"
                                    : "border border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#8f6249]"
                                    }`}
                            >
                                {type === "all" ? "All Orders" : `${type}s`}
                            </button>
                        ))}
                    </div>

                    <span className="text-xs text-[#6f5c4f] font-medium">
                        Showing {filteredTransactions.length} records
                    </span>
                </div>

                <PurchaseCard purchase={filteredTransactions} />
            </div>
        </section>
    );
}
