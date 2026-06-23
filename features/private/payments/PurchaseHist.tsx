"use client";

import { useState, useMemo } from "react";
import { Search, Loader2 } from "lucide-react";
import PurchaseCard from "./PurchaseCard";
import { usePayments } from "@/services/businessservices/payment.services";
import { ProductType, Transaction } from "@/types/payments.definations";

export default function PurchaseHist() {
  const { data: rawData, isLoading, isError } = usePayments();
  const [filter, setFilter] = useState<"all" | ProductType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Safe array translation fallback to handle variant API return payloads
  const transactionsList = useMemo<Transaction[]>(() => {
    if (!rawData) return [];
    // Explicitly check and cast safely so TS doesn't panic
    return Array.isArray(rawData)
      ? (rawData as Transaction[])
      : [rawData as unknown as Transaction];
  }, [rawData]);

  // 2. Comprehensive Filtering & Matching Logic Engine
  const filteredTransactions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return transactionsList.filter((txn) => {
      const matchesFilter = filter === "all" || txn.product_type === filter;

      const matchesSearch =
        !normalizedQuery ||
        String(txn.id).includes(normalizedQuery) ||
        String(txn.product_id).includes(normalizedQuery) ||
        String(txn.status || "")
          .toLowerCase()
          .includes(normalizedQuery) ||
        String(txn.product_type || "")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, filter, transactionsList]);

  // 3. Dynamic Calculation Aggregate for Investment Ledgers
  const totalInvestmentText = useMemo(() => {
    if (transactionsList.length === 0) return "KES 0.00";

    const dynamicSum = transactionsList.reduce((acc, txn) => {
      // Optional conditional flag guard if you want to skip failed intents:
      // if (txn.status.toLowerCase() !== "paid" && txn.status.toLowerCase() !== "complete") return acc;
      const value = parseFloat(txn.amount || "0");
      return acc + (isNaN(value) ? 0 : value);
    }, 0);

    const currencySymbol =
      transactionsList[0]?.currency?.toUpperCase() || "KES";

    return `${currencySymbol} ${dynamicSum.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }, [transactionsList]);

  return (
    <section className="min-h-screen bg-[#fffaf6]">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-4">
        {/* Top Segment: Layout Header Profile */}
        <div className="mb-4 grid gap-8 border-b border-[#eadfd4] pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
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
              <div className="text-xs font-bold uppercase tracking-wider text-[#8f6249]">
                Total Invested:{" "}
                <span className="ml-1 text-[#2f251f]">
                  {isLoading ? "Calculating..." : totalInvestmentText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls Line */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Segment Buttons Row */}
          <div className="flex flex-wrap gap-2">
            {(["all", "retreat", "course", "ebook"] as const).map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-[6px] px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  filter === type
                    ? "bg-[#8f6249] text-white"
                    : "border border-[#eadfd4] bg-white text-[#6f5c4f] hover:border-[#8f6249] hover:text-[#8f6249]"
                }`}
              >
                {type === "all" ? "All Orders" : `${type}s`}
              </button>
            ))}
          </div>

          {/* Search Bar Input Block */}
          <div className="w-full sm:w-[320px]">
            <label className="relative block w-full">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a6b4f]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transaction ID, status, type..."
                className="h-11 w-full rounded-[8px] border border-[#eadfd4] bg-white pl-11 pr-4 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b39c8c] focus:border-[#8f6249] focus:ring-4 focus:ring-[#8f6249]/10"
              />
            </label>
          </div>
        </div>

        {/* Counter Meta Tracker */}
        <div className="mb-4 text-right">
          <span className="text-xs font-medium text-[#6f5c4f]">
            Showing {isLoading ? 0 : filteredTransactions.length} records
          </span>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-[#8f6249]" />
            <p className="text-sm font-medium text-[#6f5c4f]">
              Syncing payment history records...
            </p>
          </div>
        ) : isError ? (
          <div className="rounded-[28px] border border-dashed border-red-200 bg-red-50/40 px-6 py-14 text-center">
            <h3 className="text-lg font-semibold text-red-900">
              Failed to load transaction history
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-red-700">
              There was a networking issue fetching your data ledger. Please
              verify your connection status and reload the page.
            </p>
          </div>
        ) : filteredTransactions.length > 0 ? (
          <PurchaseCard purchase={filteredTransactions} />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[28px] border border-dashed border-[#dbc7b7] bg-[#f8f0e8] px-6 py-14 text-center">
            <h3 className="text-xl font-semibold text-[#2f251f]">
              No transactions found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-[#6f5c4f]">
              We couldnt find any order history matching your active parameters
              or selected filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
