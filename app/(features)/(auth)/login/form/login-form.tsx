"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useLogin } from "../../auth.services";
import { AxiosError } from "axios";
import { loginSchema } from "@/app/lib/auth.zod";

type ApiErrorResponse = {
  detail?: string;
};

type LoginFormData = z.infer<typeof loginSchema>;

const inputClassName =
  "min-h-11 w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 py-2 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b28b67]/60 focus:border-[#8f6249] focus:bg-white focus:ring-4 focus:ring-[#8f6249]/5 sm:text-sm";

export default function LoginForm() {
  const router = useRouter();
  const { isAuthenticated, getRedirectPath } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: login, isPending, isError, error } = useLogin();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace(getRedirectPath());
    }
  }, [isAuthenticated, router, getRedirectPath]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data); // useLogin handles internal redirect on success
    } catch {
      // Gracefully catch rejected mutations to avoid breaking execution context loops
    }
  };

  const isLoading = isSubmitting || isPending;

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="w-full rounded-lg border border-[#eadfd4] bg-white p-6 space-y-4 shadow-[0_4px_20px_rgba(63,52,44,0.03)]"
    >
      <h1 className="mb-2 text-center font-serif text-lg font-semibold tracking-wide text-[#3f342c] sm:text-xl">
        Welcome to Your Healing Space
      </h1>
      
      {/* Email Address Block */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3f342c]" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={inputClassName}
          placeholder="e.g. name@domain.com"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-xs font-semibold text-[#744d39]">{errors.email.message}</p>
        )}
      </div>

      {/* Password Secure Input Block */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-[#3f342c]" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={inputClassName}
            placeholder="Enter your security password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b28b67] hover:text-[#8f6249]"
            aria-label={showPassword ? "Hide password field text" : "Reveal password field text"}
            disabled={isLoading}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs font-semibold text-[#744d39]">{errors.password.message}</p>
        )}
      </div>

      {/* Action Submission Array Control */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-[#8f6249] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#3f342c] disabled:cursor-not-allowed disabled:opacity-50"
        aria-disabled={isLoading}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        <span>{isLoading ? "Authenticating Session..." : "Access Your Space"}</span>
      </button>

      {/* Fallback API Handled Notification Grid */}
      {isError && (
        <div
          className="flex items-start gap-2 rounded-[4px] border border-[#744d39]/20 bg-[#fffaf6] px-4 py-3 mt-3"
          aria-live="polite"
          aria-atomic="true"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#744d39]" />
          <p className="text-xs font-medium text-[#744d39]">
            {(error as AxiosError<ApiErrorResponse>)?.response?.data?.detail ??
              "Authentication failed. Please check your credentials and try again."}
          </p>
        </div>
      )}
    </form>
  );
}