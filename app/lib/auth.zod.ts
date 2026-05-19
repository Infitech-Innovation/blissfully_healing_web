import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ pattern: z.regexes.email, message: "Enter a valid email address" })
    .max(255, "Email must not exceed 255 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must not exceed 24 characters"),
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/[0-9]/, "Password must contain at least one number")
  // .regex(
  //   /[^a-zA-Z0-9]/,
  //   "Password must contain at least one special character",
  // ),
});

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "Firstname must be at least 2 characters")
      .max(100, "Firstname must not exceed 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Firstname can only contain letters, spaces, hyphens, and apostrophes",
      ),

    last_name: z
      .string()
      .min(2, "Lastname must be at least 2 characters")
      .max(100, "Lastname must not exceed 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Lastname can only contain letters, spaces, hyphens, and apostrophes",
      ),

    email: z
      .email({
        pattern: z.regexes.email,
        message: "Enter a valid email address",
      })
      .max(255, "Email must not exceed 255 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),

    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, "Current password is required")
      .max(24, "Password must not exceed 24 characters"),

    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>;
