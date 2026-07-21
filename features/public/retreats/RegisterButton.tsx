"use client";

import { useRegisterRetreat } from "@/hooks/useRetreats";
import { useAuthStore } from "@/store/useAuthStore";
import { RegisteredRetreats } from "@/types/retreats.definations";
import { encodeRetreatToken } from "@/utils/token";
import { useRouter } from "next/navigation";

interface RegisterButtonProps {
    slug: string;
    price: number;
}

export function RegisterButton({
    slug,price
}: RegisterButtonProps) {
    const router = useRouter();
    const { mutate: registerRetreat, isPending } = useRegisterRetreat();

    // check if user is authenticated
    const user = useAuthStore((state) => state.user);
    const isAuthenticated = !!user;

    const handleRegister = () => {
        if (!isAuthenticated) {
            router.push("/login");
            return;
        }
        // 1. Pass the slug as the primary argument for your mutation
        registerRetreat(slug, {
            // 2. onSuccess gives you access to the server's response data
            onSuccess: (data: RegisteredRetreats) => {

                // 3. Extract the real server data to build your token dynamically
                const token = encodeRetreatToken({
                    retreatId: data.retreat.id,
                    retreatName: data.retreat.title, 
                    retreatPrice: price // Adjust to matching property name (e.g., .title or .name)
                });

                // 4. Route to confirmation page, attaching the secure token as a query parameter
                router.push(`/retreats/${slug}/confirmation?token=${token}`);
            },
            onError: (error) => {
                console.error("Registration failed:", error);
            }
        });
    };

    return (
        <button
            onClick={handleRegister}
            disabled={isPending}
            className="mt-7 flex w-full items-center justify-center rounded-[8px] bg-[#8f6249] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-[#744d39]"
        >
            {isPending ? "Registering..." : "Register Now"}
        </button>
    );
}