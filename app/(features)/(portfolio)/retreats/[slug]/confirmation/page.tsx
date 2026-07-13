'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { decodeRetreatToken } from '@/utils/token'; // Adjust path as needed
import CheckOutButton from '@/components/common/checkoutBtn';

export default function RetreatConfirmation() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  // Decode the dynamic token
  const retreatData = token ? decodeRetreatToken(token) : null;
  // Error boundary / Fallback if the token is corrupted or missing
  if (!retreatData) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-50 mb-4">
            <span className="text-red-500 text-2xl">⚠️</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Invalid Session</h1>
          <p className="text-sm text-gray-500 mb-6">
            We couldnt retrieve your registration details. Your session may have expired.
          </p>
          <Link href="/retreats" className="block w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition">
            Return to Retreats
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 antialiased">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">

        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6">
          <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Registration Successful!
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Your spot has been successfully reserved.
        </p>

        {/* Dynamic Card Data decoded from token */}
        <div className="bg-gray-50 rounded-xl p-5 text-left mb-6 border border-gray-100">
          <div className="mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Retreat</span>
            <span className="text-gray-800 font-medium text-base">{retreatData.retreatName}</span>
          </div>
          {
            retreatData.retreatPrice > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Status</span>
                <div className="flex items-center mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
                  <span className="text-amber-700 font-semibold text-sm">Pending Payment</span>
                </div>
              </div>
            )}

        </div>

        {
          retreatData.retreatPrice > 0 && (
            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
              To finalize your booking and secure your accommodations, please complete your payment. A confirmation email with your itinerary has been sent.
            </p>

          )}

        {/* Pass token forward to checkout so it stays dynamic */}
        {
          retreatData.retreatPrice > 0 ? (
            <CheckOutButton id={retreatData.retreatId} type="retreat" btnName="Make Payment" />
          ) : (
            <Link
              href="/user/retreats"
              className="flex items-center justify-center gap-2 rounded-[6px] bg-[#8f6249] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#734d36]"
            >
              Retreats
            </Link>
          )
        }
      </div>
    </main>
  );
}