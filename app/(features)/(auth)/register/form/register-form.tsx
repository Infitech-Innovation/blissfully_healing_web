"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { AxiosError } from "axios";
import { useRegister } from "../../../../../hooks/useAuthenication";
import { RegisterFormData, registerSchema } from "@/app/(features)/(auth)/zod/auth.zod";

type ApiFieldErrors = Partial<
  Record<keyof RegisterFormData | "non_field_errors", string[]>
>;

type ApiErrorResponse = {
  message?: string;
} & ApiFieldErrors;

const inputClassName =
  "min-h-11 w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 py-2 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b28b67]/60 focus:border-[#8f6249] focus:bg-white focus:ring-4 focus:ring-[#8f6249]/5 sm:text-sm";

export default function RegisterForm() {
  const router = useRouter();
  const { isAuthenticated, getRedirectPath } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register: field,
    handleSubmit,
    setError,
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

  const { mutate: registerUser, isPending, isError } = useRegister();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace(getRedirectPath());
    }
  }, [isAuthenticated, router, getRedirectPath]);

  const onSubmit = (data: RegisterFormData) => {
    setGlobalError(null);

    registerUser(data, {
      onError(err) {
        const apiError = err as AxiosError<ApiErrorResponse>;
        const responseData = apiError?.response?.data;

        if (!responseData) {
          setGlobalError(
            "An unexpected service disconnect occurred. Please try again.",
          );
          return;
        }

        // Capture generic microservice response errors
        if (responseData.message) {
          setGlobalError(responseData.message);
        } else if (responseData.non_field_errors?.length) {
          setGlobalError(responseData.non_field_errors[0]);
        }

        // Map field-level validation structural responses
        const fieldKeys: (keyof RegisterFormData)[] = [
          "first_name",
          "last_name",
          "email",
          "password",
          "confirm_password",
        ];

        fieldKeys.forEach((key) => {
          const messages = responseData[key];
          if (messages?.length) {
            setError(key, { type: "server", message: messages[0] });
          }
        });
      },
    });
  };

  const isLoading = isSubmitting || isPending;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-lg border border-[#eadfd4] bg-white p-6 space-y-4 shadow-[0_4px_20px_rgba(63,52,44,0.03)]"
    >
      <h1 className="mb-2 text-center font-serif text-lg font-semibold tracking-wide text-[#3f342c] sm:text-xl">
        Create Your Account
      </h1>

      {/* Row 1: Name Information Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            className="text-xs font-bold uppercase tracking-wider text-[#3f342c]"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            {...field("first_name")}
            className={inputClassName}
            placeholder="e.g. Jane"
            disabled={isLoading}
          />
          {errors.first_name && (
            <p className="text-xs font-semibold text-[#744d39]">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            className="text-xs font-bold uppercase tracking-wider text-[#3f342c]"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            {...field("last_name")}
            className={inputClassName}
            placeholder="e.g. Doe"
            disabled={isLoading}
          />
          {errors.last_name && (
            <p className="text-xs font-semibold text-[#744d39]">
              {errors.last_name.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Communication Channel Block */}
      <div className="space-y-1.5">
        <label
          className="text-xs font-bold uppercase tracking-wider text-[#3f342c]"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...field("email")}
          className={inputClassName}
          placeholder="e.g. jane.doe@domain.com"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-xs font-semibold text-[#744d39]">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Row 3: Double Security Field Controls */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            className="text-xs font-bold uppercase tracking-wider text-[#3f342c]"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...field("password")}
              className={inputClassName}
              placeholder="Min. 8 characters"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b28b67] hover:text-[#8f6249]"
              aria-label={
                showPassword
                  ? "Hide password text representation"
                  : "Expose password text representation"
              }
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
            <p className="text-xs font-semibold text-[#744d39]">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            className="text-xs font-bold uppercase tracking-wider text-[#3f342c]"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              {...field("confirm_password")}
              className={inputClassName}
              placeholder="Re-type system password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b28b67] hover:text-[#8f6249]"
              aria-label={
                showConfirmPassword
                  ? "Hide password field confirmation text"
                  : "Reveal password field confirmation text"
              }
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.confirm_password && (
            <p className="text-xs font-semibold text-[#744d39]">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Action Interface */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-[#8f6249] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#3f342c] disabled:cursor-not-allowed disabled:opacity-50"
        aria-disabled={isLoading}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        <span>{isLoading ? "Onboarding Profile..." : "Register Profile"}</span>
      </button>

      {/* Global Fallback Error Render Alert Block */}
      {(globalError || isError) && (
        <div
          className="flex items-start gap-2 rounded-[4px] border border-[#744d39]/20 bg-[#fffaf6] px-4 py-3 mt-3"
          aria-live="polite"
          aria-atomic="true"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#744d39]" />
          <p className="text-xs font-medium text-[#744d39]">
            {globalError ??
              "Could not synchronize credentials. Please resolve existing issues."}
          </p>
        </div>
      )}
    </form>
  );
}
