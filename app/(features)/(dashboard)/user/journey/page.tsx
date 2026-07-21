import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import MyHealingJourneyPage from "@/features/private/journey/MyHealingJourney";

export const metadata: Metadata = createMetadata({
 title: "My Healing Journey",
 description: "Track your private Blissfully Healing journey and progress.",
 path: "/user/journey",
 noIndex: true,
});

export default function JourneyPage() {
 return <MyHealingJourneyPage />;
}
