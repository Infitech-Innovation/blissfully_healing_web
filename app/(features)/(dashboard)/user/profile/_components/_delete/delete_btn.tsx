"use client";

import { Loader2, AlertTriangle } from "lucide-react";
import type { ComponentProps } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDeleteProfile } from "@/app/(features)/(auth)/auth.services";

function LoadingButton({
  isLoading,
  children,
  ...props
}: ComponentProps<typeof Button> & { isLoading?: boolean }) {
  return (
    <Button
      disabled={isLoading || props.disabled}
      aria-disabled={isLoading || props.disabled}
      className="min-h-11 bg-[#744d39] hover:bg-[#3f342c] gap-2 rounded-[4px] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all disabled:cursor-not-allowed disabled:opacity-40"
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}

export function DeleteAccount() {
  const { mutate: deleteProfile, isPending, isError, error } = useDeleteProfile();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button 
          disabled 
          variant="outline" 
          className="min-h-11 border-[#eadfd4] bg-white text-xs font-bold uppercase tracking-wider text-[#b28b67] rounded-[4px]"
        >
          Temporary Pause Account
        </Button>
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="min-h-11 bg-white hover:bg-[#f8f0e8] border border-[#744d39]/40 hover:border-[#744d39] rounded-[4px] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#744d39] transition-all"
        >
          Request Deletion
        </button>
      </div>

      {isError && (
        <p className="text-xs font-semibold text-[#744d39] mt-1">
          {error instanceof Error ? error.message : "Data extraction sync failed. Try again safely."}
        </p>
      )}

      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f251f]/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-title"
        >
          <div className="w-full max-w-md rounded-[8px] border border-[#eadfd4] bg-[#fffaf6] p-6 shadow-[0_20px_50px_rgba(63,52,44,0.15)] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-2 text-[#744d39] mb-2">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <h2 id="delete-account-title" className="font-serif text-lg font-semibold text-[#2f251f]">
                Close Journey Record?
              </h2>
            </div>
            
            <p className="text-xs leading-relaxed text-[#6f5c4f]">
              This will safely wipe out your portfolio credentials, journal history, and progress records. This structural action is absolute and cannot be rewritten.
            </p>
            
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="min-h-11 border-[#eadfd4] bg-white text-xs font-bold uppercase tracking-wider text-[#6f5c4f] rounded-[4px] px-4 py-2 hover:bg-[#f8f0e8]"
                disabled={isPending}
                onClick={() => setConfirmOpen(false)}
              >
                Return to Safety
              </Button>
              <LoadingButton
                type="button"
                isLoading={isPending}
                onClick={() => deleteProfile()}
              >
                {isPending ? "Erasing record..." : "Confirm Closure"}
              </LoadingButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}