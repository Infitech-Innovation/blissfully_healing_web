"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { AxiosError } from "axios";
import { useRegister } from "../../auth.services";
import { RegisterFormData, registerSchema } from "@/app/lib/auth.zod";

type ApiErrorResponse = {
  message?: string;
};

export default function RegisterForm() {
  const router = useRouter();
  const { isAuthenticated, getRedirectPath } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register: field,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const { mutate: registerUser, isPending, isError, error } = useRegister();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace(getRedirectPath());
    }
  }, [isAuthenticated, router, getRedirectPath]);

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <h1 className="mb-4 text-center text-lg font-medium sm:text-xl">
        Create your account
      </h1>

      {/* Row 1: Full Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="first_name">
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            {...field("first_name")}
            className="min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm"
            placeholder="e.g. First Name"
          />
          {errors.first_name && (
            <p className="text-sm text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="last_name">
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            {...field("last_name")}
            className="min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm"
            placeholder="e.g. Last Name"
          />
          {errors.last_name && (
            <p className="text-sm text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...field("email")}
          className="min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm"
          placeholder="e.g. blissfully@email.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Row 4: Password + Confirm Password */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...field("password")}
              className="min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm"
              placeholder="Min. 8 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="confirm_password">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              {...field("confirm_password")}
              className="min-h-11 w-full rounded-md border px-3 py-2 text-base outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:text-sm"
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.confirm_password && (
            <p className="text-sm text-red-500">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
      </div>

      {/* API Error */}
      <div
        className="flex min-h-8 items-end"
        aria-live="polite"
        aria-atomic="true"
      >
        {isError && (
          <div className="flex items-start gap-1 text-sm text-red-500">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              {(error as AxiosError<ApiErrorResponse>)?.response?.data
                ?.message ?? "Something went wrong. Please try again."}
            </p>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || isPending}
        className="min-h-11 w-full rounded-md bg-black px-4 py-2 font-medium text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}
