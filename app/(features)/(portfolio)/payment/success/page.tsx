"use client";

import { useSearchParams } from "next/navigation";
import { useVerifyPayment } from "@/services/businessservices/payment.services";
import { CheckCircle2, XCircle, Loader2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function SuccessPaymentContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id") || "";

  const { isLoading, isError } = useVerifyPayment(sessionId);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#8f6249]" />
        <h2 className="font-serif text-2xl font-semibold text-[#2f251f]">
          Confirming Your Order...
        </h2>
        <p className="text-sm text-[#6f5c4f] max-w-sm">
          Please hold tight while we verify your payment
        </p>
      </div>
    );
  }

  // 2. Error State if verification fails
  if (isError || !sessionId) {
    return (
      <div className="mx-auto max-w-md rounded-[16px] border border-dashed border-red-200 bg-white p-8 text-center shadow-sm">
        <XCircle className="mx-auto h-12 w-12 text-red-500" />
        <h2 className="font-serif text-2xl font-semibold text-[#2f251f] mt-4">
          Verification Failure
        </h2>
        <p className="mt-2 text-sm text-[#6f5c4f] leading-relaxed">
          We encountered a problem processing your receipt. 
          Dont panic—your purchase is safe. Please view your user history dashboard.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            href="/user/purchases"
            className="flex items-center justify-center gap-2 rounded-[8px] bg-[#8f6249] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#734d36]"
          >
            Go to Purchase History <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  // 3. Success State
  return (
    <div className="mx-auto max-w-md rounded-[16px] border border-[#eadfd4] bg-white p-8 text-center shadow-[0_18px_45px_rgba(63,52,44,0.04)]">
      <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
      
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f6249]">
        Payment Confirmed
      </p>
      
      <h2 className="font-serif text-3xl font-semibold text-[#2f251f] mt-1">
        Thank You!
      </h2>
      
      <p className="mt-3 text-sm text-[#6f5c4f] leading-relaxed">
        Your payment session was processed sucessfully.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/user/purchases"
          className="flex items-center justify-center gap-2 rounded-[6px] border border-[#eadfd4] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#6f5c4f] transition hover:border-[#8f6249] hover:text-[#8f6249]"
        >
          <ShoppingBag size={14} /> My Purchases
        </Link>
        
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-[6px] bg-[#8f6249] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#734d36]"
        >
          Home Dashboard
        </Link>
      </div>
    </div>
  );
}

// Next.js requires components accessing useSearchParams() to be wrapped in a Suspense boundary
export default function PaymentSuccessPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#fffaf6] px-5 py-12">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-[#8f6249]" />
          <p className="text-sm text-[#6f5c4f]">Initializing routes...</p>
        </div>
      }>
        <SuccessPaymentContent />
      </Suspense>
    </section>
  );
}