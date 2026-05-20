"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChangePasswordFormType,
  changePasswordSchema,
} from "@/app/lib/auth.zod";

const inputClassName =
  "min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm";

export function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(
    // eslint-disable-next-line
    _: ChangePasswordFormType,
  ): Promise<void> {}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
      <div className="grid gap-y-1">
        <label htmlFor="currentPassword" className="text-sm font-medium">
          Current Password
        </label>
        <input
          id="currentPassword"
          type="password"
          {...register("currentPassword")}
          className={inputClassName}
          placeholder="Enter current password"
        />
        {errors.currentPassword && (
          <p className="text-sm text-red-500">
            {errors.currentPassword.message}
          </p>
        )}
      </div>
      <div className="grid gap-y-1">
        <label htmlFor="newPassword" className="text-sm font-medium">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          {...register("newPassword")}
          className={inputClassName}
          placeholder="Enter new password"
        />
        {errors.newPassword && (
          <p className="text-sm text-red-500">{errors.newPassword.message}</p>
        )}
      </div>
      <div className="grid gap-y-1">
        <label htmlFor="confirmPassword" className="text-sm font-medium">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={inputClassName}
          placeholder="Confirm new password"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="min-h-11 w-full gap-2 rounded-md bg-black px-4 py-2 font-medium text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
        aria-disabled={isSubmitting}
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Updating password..." : "Set new password"}
      </Button>
    </form>
  );
}
