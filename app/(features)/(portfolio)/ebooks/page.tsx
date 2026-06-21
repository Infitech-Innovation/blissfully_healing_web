import { purchasedEBooks } from "../../(dashboard)/user/ebooks/definations";
import LibraryCard from "./_components/LibraryCard";

export default function EbooksPage() {
    return <LibraryCard library={purchasedEBooks} />;
}
