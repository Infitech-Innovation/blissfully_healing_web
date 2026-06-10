"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangePasswordFormType, changePasswordSchema } from "@/app/lib/auth.zod";

const inputClassName =
  "min-h-11 w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 py-2 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b28b67]/60 focus:border-[#8f6249] focus:bg-white focus:ring-4 focus:ring-[#8f6249]/5";

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
  });

  async function onSubmit(_: ChangePasswordFormType): Promise<void> {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-y-1.5">
        <label htmlFor="currentPassword" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
          Current Key Token
        </label>
        <input
          id="currentPassword"
          type="password"
          {...register("currentPassword")}
          className={inputClassName}
          placeholder="Enter current password token"
        />
        {errors.currentPassword && (
          <p className="text-xs font-semibold text-[#744d39]">{errors.currentPassword.message}</p>
        )}
      </div>

      <div className="grid gap-y-1.5">
        <label htmlFor="newPassword" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
          New Key Token
        </label>
        <input
          id="newPassword"
          type="password"
          {...register("newPassword")}
          className={inputClassName}
          placeholder="Define new security credentials"
        />
        {errors.newPassword && (
          <p className="text-xs font-semibold text-[#744d39]">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="grid gap-y-1.5">
        <label htmlFor="confirmPassword" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
          Confirm New Key Token
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={inputClassName}
          placeholder="Re-type new security token"
        />
        {errors.confirmPassword && (
          <p className="text-xs font-semibold text-[#744d39]">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="min-h-11 w-full gap-2 rounded-[4px] bg-[#8f6249] hover:bg-[#3f342c] text-xs font-bold uppercase tracking-widest text-white transition-all shadow-sm disabled:cursor-not-allowed disabled:opacity-50 pt-0.5"
        aria-disabled={isSubmitting}
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Syncing Credentials..." : "Authorize New Security Key"}
      </Button>
    </form>
  );
}