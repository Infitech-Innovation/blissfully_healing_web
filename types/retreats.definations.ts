// definitions.ts
import { Flame, Leaf, Mountain, Star } from "lucide-react";
import { PaginatedResponse } from "./generic";
interface Included {
    id: number,
    text: string,
    order: number
}

interface ItineraryItems {
    id: number,
    title: string,
    description: string,
    order: number
}

interface Features {
    id: number,
    text: string,
    order: number
}
export interface RetreatDetails {
    id: number;
    title: string;
    slug: string;
    category_label: string;
    cover_image: string;
    short_description: string;
    duration: string;
    min_guests: number;
    max_guests: number;
    location: string,
    start_date: Date;
    end_date: Date;
    price: number;
    booking_type: string;
    details_heading: string;
    details_text: string;
    spots_remaining: number;
    included_items: Included[];
    itinerary_items: ItineraryItems[];
    features: Features;
}

export interface RetreatList {
    id: number;
    title: string;
    slug: string;
    category_label: string;
    cover_image: string;
    short_description: string;

}

export interface RegisteredRetreats {
    id: string,
    retreat: RetreatList;
    status: string;
    registered_at: Date;
}

export type RetreatListResponse = PaginatedResponse<RetreatList>;
export type FeaturedRetreatListResponse = PaginatedResponse<RetreatList>;
export type RetreatRegResponse = PaginatedResponse<RegisteredRetreats>;


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