import z from "zod";

export const loginSchema = z.object({
  email: z
    .email({ pattern: z.regexes.email, message: "Valid Email Field is required" })
    .max(255, "Email must not exceed 255 characters"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must not exceed 24 characters"),
});

export const registerSchema = z
  .object({
    first_name: z
      .string({ message: "Firstname field is required" })
      .min(2, "Firstname must be at least 2 characters")
      .max(100, "Firstname must not exceed 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Firstname can only contain letters, spaces, hyphens, and apostrophes",
      ),

    last_name: z
      .string({ message: "Lastname field is required" } )
      .min(2, "Lastname must be at least 2 characters")
      .max(100, "Lastname must not exceed 100 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Lastname can only contain letters, spaces, hyphens, and apostrophes",
      ),

    email: z
      .email({
        pattern: z.regexes.email,
        message: "Valid email address is required",
      })
      .max(255, "Email must not exceed 255 characters"),

    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),

    confirm_password: z.string().nonempty("Please confirm your password"),
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
      .nonempty("Current password field is required" )
      .min(8,"Password must not be less than 8 characters")
      .max(24, "Password must not exceed 24 characters"),

    newPassword: z
      .string({ message: "New password field is required" })
      .nonempty("New password field is required" )
      .min(8, "Password must be at least 8 characters")
      .max(24, "Password must not exceed 24 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string({ message: "Please confirm your new password" }).nonempty("Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormType = z.infer<typeof changePasswordSchema>;
