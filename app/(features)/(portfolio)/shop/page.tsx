import { purchasedEBooks } from "../../(dashboard)/user/ebooks/definations";
import LibraryCard from "../ebooks/_components/LibraryCard";
import LibraryHero from "../ebooks/_components/LibraryHero";

export default function ShopPage() {
    return (
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
            <LibraryHero ebooks={purchasedEBooks} />
            <LibraryCard library={purchasedEBooks} />
        </div>
    )
}
