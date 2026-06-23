import { purchasedEBooks } from "@/types/ebooks.definations";
import LibraryCard from "@/features/public/ebooks/LibraryCard";
import LibraryHero from "@/features/public/ebooks/LibraryHero";

export default function ShopPage() {
    return (
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <LibraryHero ebooks={purchasedEBooks} />
            <LibraryCard library={purchasedEBooks} />
        </div>
    )
}
