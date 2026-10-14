"use client";

import { useCreateTransactionMutation } from "@/hooks/usePayments";
import { useAuthStore } from "@/store/useAuthStore";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface CheckOutProps {
  id: number;
  type: string;
  btnName: string;
  className?: string;
}

export default function CheckOutButton({ id, type, btnName, className }: CheckOutProps) {
  const router = useRouter();
  const { mutate: createCheckout, isPending } = useCreateTransactionMutation();

  //check if user is authenicated
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = !!user;

  const handleEnrollment = () => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    createCheckout(
      {
        product_type: type,
        product_id: id,
      },
      {
        onSuccess: (data) => {
          if (data?.checkout_url) {
            window.location.href = data.checkout_url;
          }
        },
        onError: (error) => {
          console.error("Redirection failure:", error);
        },
      },
    );
  };

  return (
    <button
      type="button"
      onClick={handleEnrollment}
      disabled={isPending}
      className={cn("mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#8f6249] p-3 text-[15px] font-medium text-white transition hover:bg-[#744d39] disabled:cursor-not-allowed disabled:opacity-70", className)}
    >
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        btnName
      )}
    </button>
  );
}
