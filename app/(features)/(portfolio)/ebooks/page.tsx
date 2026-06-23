import { purchasedEBooks } from "@/types/ebooks.definations";
import LibraryCard from "@/features/public/ebooks/LibraryCard";

export default function EbooksPage() {
    return <LibraryCard library={purchasedEBooks} />;
}
