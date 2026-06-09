// definitions.ts
import { Flame, Leaf, Mountain, Star } from "lucide-react";

export type RetreatStatus = "upcoming" | "attended" | "cancelled";

export interface Retreat {
    slug: string;
    tag: string;
    image: string;
    name: string;
    desc: string;
    duration: string;
    groupSize: string;
    location: string;
    price: string;
    overview: string;
    includes: string[];
    rhythm: string[];
    status: RetreatStatus;
    retreatDate: string;
}

export const features = [
    {
        icon: Mountain,
        title: "Grounded Settings",
        desc: "Nature-led spaces chosen for quiet, privacy, and a felt sense of safety.",
    },
    {
        icon: Star,
        title: "Sacred Comfort",
        desc: "Beautiful stays with the softness, warmth, and detail that make rest easier.",
    },
    {
        icon: Leaf,
        title: "Embodied Healing",
        desc: "Gentle practices that support emotional release, presence, and self-trust.",
    },
    {
        icon: Flame,
        title: "Evening Rituals",
        desc: "Intentional circles, reflection, and firelight moments to close each day.",
    },
];

export const stays: Retreat[] = [
    {
        slug: "forest-renewal",
        tag: "Restorative Retreat",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
        name: "Forest Renewal",
        desc: "A quiet forest stay for deep rest, guided reflection, and gentle reconnection with your body.",
        duration: "4 days / 3 nights",
        groupSize: "8-12 guests",
        location: "Woodland sanctuary",
        price: "KES 38,000",
        overview:
            "Forest Renewal is shaped for guests who need a soft pause from urgency. Days unfold slowly with embodied practices, spacious rest, nature walks, and evening circles that help the nervous system remember safety.",
        includes: [
            "Daily grounding and breathwork sessions",
            "Guided reflection and journaling prompts",
            "Nourishing meals and herbal tea service",
            "Integration circle before departure",
        ],
        rhythm: [
            "Morning movement and breathwork",
            "Silent nature walk and personal reflection",
            "Afternoon rest, body care, or optional sharing",
            "Evening ritual circle with gentle integration",
        ],
        status: "upcoming",
        retreatDate: "July 12 - 15, 2026",
    },
    {
        slug: "starlight-sanctuary",
        tag: "Sacred Voyage",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
        name: "Starlight Sanctuary",
        desc: "An expansive retreat for stillness, ceremony, and spacious nights beneath open sky.",
        duration: "5 days / 4 nights",
        groupSize: "10-14 guests",
        location: "Highland retreat house",
        price: "KES 52,000",
        overview:
            "Starlight Sanctuary invites a wider inner horizon through ceremony, contemplative practice, and slow evenings under open sky. It is designed for people craving meaning, quiet, and a deeper relationship with their own presence.",
        includes: [
            "Opening intention ceremony",
            "Guided meditation and contemplative walks",
            "Evening firelight ritual and sharing circle",
            "Restorative accommodation and full board meals",
        ],
        rhythm: [
            "Sunrise stillness and tea",
            "Somatic practice and guided inquiry",
            "Open afternoon for rest or gentle exploration",
            "Night sky reflection and ceremonial close",
        ],
        status: "attended",
        retreatDate: "March 04 - 08, 2026",
    },
    {
        slug: "riverside-return",
        tag: "Private Intensive",
        image:
            "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80",
        name: "Riverside Return",
        desc: "A soothing waterside container for one-to-one restoration, nervous-system care, and integration.",
        duration: "3 days / 2 nights",
        groupSize: "Private or pair",
        location: "Riverside cottage",
        price: "KES 44,000",
        overview:
            "Riverside Return is an intimate container for focused healing support. The retreat balances private sessions, body-led regulation, rest beside water, and practical integration so guests can return home with steadier inner ground.",
        includes: [
            "Two private healing sessions",
            "Personalized regulation practices",
            "Waterside rest time and reflection prompts",
            "Aftercare notes for home integration",
        ],
        rhythm: [
            "Arrival grounding and intention setting",
            "Private healing session and integration rest",
            "Gentle riverside reflection practice",
            "Closing session with next-step care plan",
        ],
        status: "cancelled",
        retreatDate: "November 18 - 20, 2025",
    },
];