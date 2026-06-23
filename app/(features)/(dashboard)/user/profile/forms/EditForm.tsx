"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Loader2,User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";

const editProfileSchema = z.object({
  first_name: z.string().min(1, "First name is required").max(50, "Max length is 50 characters"),
  last_name: z.string().min(1, "Last name is required").max(50, "Max length is 50 characters"),
  bio: z.string().nullable().optional(),
});

type EditProfileFormType = z.infer<typeof editProfileSchema>;

const inputClassName =
  "min-h-11 w-full rounded-[4px] border border-[#eadfd4] bg-[#fffaf6]/50 px-3 py-2 text-sm text-[#2f251f] outline-none transition placeholder:text-[#b28b67]/60 focus:border-[#8f6249] focus:bg-white focus:ring-4 focus:ring-[#8f6249]/5";

const readOnlyBoxClassName =
  "flex items-center gap-3 min-h-11 w-full rounded-[4px] border border-[#eadfd4]/60 bg-[#f8f0e8]/60 px-3 py-2 text-sm text-[#3f342c]/70 select-none cursor-not-allowed font-medium";

export function EditProfileForm() {
  const user = useAuthStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditProfileFormType>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      bio: user?.bio || "",
    },
  });

  async function onSubmit(data: EditProfileFormType) {
    console.log("Submitted Profile Updates:", data);
  }

  if (!user) return null;

  return (
    <div className="mx-auto max-w-3xl rounded-[8px] border border-[#eadfd4] bg-white p-6 sm:p-8 shadow-[0_12px_30px_rgba(63,52,44,0.02)] mt-8">
      
      {/* Structural Header Row with Back Button */}
      <div className="mb-8 border-b border-[#eadfd4]/60 pb-5">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/user/profile"
            className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eadfd4] bg-white text-[#6f5c4f] transition-all duration-200 hover:border-[#8f6249] hover:bg-[#fffaf6] hover:text-[#8f6249]"
            aria-label="Return to profile view"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </Link>
          <div>
            <CardTitle className="font-serif text-xl font-semibold text-[#2f251f]">
              Identity Configuration
            </CardTitle>
            <CardDescription className="text-xs text-[#744d39] mt-0.5">
              Modify your interactive details while preserving critical foundational parameters.
            </CardDescription>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Row 2: Comprehensive Profile Full Name Representation (Read Only) */}
        <div className="grid gap-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
            System Full Name
          </label>
          <div className={readOnlyBoxClassName}>
            <User className="h-4 w-4 text-[#b28b67] shrink-0" />
            <span>{user.full_name || `${user.first_name} ${user.last_name}`}</span>
          </div>
        </div>

        {/* Row 3: Account Email Address Verification (Read Only) */}
        <div className="grid gap-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
            Linked Email Address
          </label>
          <div className={readOnlyBoxClassName}>
            <span className="text-[#b28b67] font-serif text-xs font-bold">@</span>
            <span>{user.email}</span>
          </div>
        </div>

        <hr className="border-[#eadfd4]/60 my-2" />

        {/* Row 4: Interactive Input Fields (Editable) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-y-1.5">
            <label htmlFor="first_name" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
              First Name *
            </label>
            <input
              id="first_name"
              type="text"
              {...register("first_name")}
              className={inputClassName}
              placeholder="Your given name"
            />
            {errors.first_name && (
              <p className="text-xs font-semibold text-[#744d39]">{errors.first_name.message}</p>
            )}
          </div>

          <div className="grid gap-y-1.5">
            <label htmlFor="last_name" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
              Last Name *
            </label>
            <input
              id="last_name"
              type="text"
              {...register("last_name")}
              className={inputClassName}
              placeholder="Your surname family marker"
            />
            {errors.last_name && (
              <p className="text-xs font-semibold text-[#744d39]">{errors.last_name.message}</p>
            )}
          </div>
        </div>

        {/* Row 5: Dynamic Personal Reflection Area (Editable) */}
        <div className="grid gap-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="bio" className="text-xs font-bold uppercase tracking-wider text-[#3f342c]">
              Personal Journey Bio
            </label>
            <span className="text-[10px] text-[#b28b67] font-medium italic">Optional</span>
          </div>
          <textarea
            id="bio"
            rows={4}
            {...register("bio")}
            className={cn(inputClassName, "resize-none min-h-[100px] leading-relaxed")}
            placeholder="Describe your intentions, somatic focus points, or path descriptions..."
          />
          {errors.bio && (
            <p className="text-xs font-semibold text-[#744d39]">{errors.bio.message}</p>
          )}
        </div>

        {/* Submission Action Blocks */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-h-11 w-full gap-2 rounded-[4px] bg-[#8f6249] hover:bg-[#3f342c] text-xs font-bold uppercase tracking-widest text-white transition-all shadow-sm disabled:cursor-not-allowed disabled:opacity-50 pt-0.5"
            aria-disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {isSubmitting ? "Syncing Identity..." : "Commit Profile Adjustments"}
          </Button>
        </div>

      </form>
    </div>
  );
}