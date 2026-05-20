"use client";

import { Loader2 } from "lucide-react";
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
      className="min-h-11 bg-red-600 hover:bg-red-700 gap-2 rounded-md  px-4 py-2 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70"
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}

export function DeleteAccount() {
  const {
    mutate: deleteProfile,
    isPending,
    isError,
    error,
  } = useDeleteProfile();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleConfirmDelete = () => {
    deleteProfile();
  };

  return (
    <div className="mt-8 space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <LoadingButton disabled variant="outline">
          Disable Account
        </LoadingButton>
        <LoadingButton
          type="button"
          isLoading={isPending}
          variant="destructive"
          onClick={() => setConfirmOpen(true)}
        >
          {isPending ? "Deleting account..." : "Delete Account"}
        </LoadingButton>
      </div>
      {isError && (
        <p className="text-sm text-red-500">
          {error instanceof Error
            ? error.message
            : "Failed to delete account. Please try again."}
        </p>
      )}
      {confirmOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-title"
        >
          <div className="w-full max-w-md rounded-lg border bg-background p-6 shadow-xl">
            <h2 id="delete-account-title" className="text-lg font-semibold">
              Delete account?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This will permanently delete your profile and sign you out. This
              action cannot be undone.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="min-h-11 gap-2 rounded-md  px-4 py-2 font-medium transition disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isPending}
                onClick={() => setConfirmOpen(false)}
              >
                Cancel
              </Button>
              <LoadingButton
                type="button"
                variant="destructive"
                isLoading={isPending}
                onClick={handleConfirmDelete}
              >
                {isPending ? "Deleting..." : "Delete permanently"}
              </LoadingButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
