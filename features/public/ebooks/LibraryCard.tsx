import type { EBookList } from "@/types/ebooks.definations";
import { ArrowRight, Crown, FileText, HardDrive, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LibraryCard.module.css";

type LibraryProps = { library: EBookList[] };

export function LibraryCardSkeleton() {
    return (
        <div className={styles.collection} role="status" aria-label="Loading books">
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className={styles.card} aria-hidden="true">
                    <div className={styles.badge}><Crown size={44} strokeWidth={1.4} /></div>
                    <div className={`${styles.productImage} ${styles.skeleton}`} />
                    <div className={styles.content}>
                        <div className={styles.skeleton} style={{ width: "80%", height: 36, marginBottom: 16 }} />
                        <div className={styles.skeleton} style={{ width: "50%", height: 20, marginBottom: 24 }} />
                        <div className={styles.skeleton} style={{ width: "100%", height: 80, marginBottom: 28 }} />
                        <div className={styles.skeleton} style={{ width: "70%", height: 55 }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function CornerFlourish({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 90 90" aria-hidden="true">
            <path d="M4 82C3 41 22 10 77 5M8 8C9 33 51 41 51 19C51 2 23 5 25 22C27 36 43 24 34 18M8 8C35 10 47 48 26 51C7 54 5 27 20 26C33 25 28 43 20 35M10 76C18 52 48 43 56 59C67 81 28 89 30 69C32 51 48 60 43 71M60 9C46 20 63 37 77 21C60 24 60 17 60 9M9 60C19 48 8 39 5 35M44 45C58 40 67 43 71 51M19 18L13 13M48 47L41 40" />
            <path d="M60 60C74 64 75 76 85 79C68 83 61 71 60 60Z" />
        </svg>
    );
}

export default function LibraryCard({ library }: LibraryProps) {
    return (
        <div className={styles.collection}>
            {library.map((book) => (
                <article key={book.slug} className={styles.card}>
                    <div className={styles.backdrop} aria-hidden="true">
                        <Image src={book.cover_image} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" unoptimized />
                    </div>
                    <div className={styles.badge} aria-hidden="true"><Crown size={44} strokeWidth={1.4} /></div>
                    <CornerFlourish className={styles.topLeft} />
                    <CornerFlourish className={styles.topRight} />
                    <CornerFlourish className={styles.bottomLeft} />
                    <CornerFlourish className={styles.bottomRight} />
                    <div className={styles.productImage}>
                        <Image src={book.cover_image} alt={book.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className={styles.cover} unoptimized />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{book.title}</h3>
                        <p className={styles.subtitle}>{book.category_label}</p>
                        <div className={styles.divider} aria-hidden="true"><Crown size={26} strokeWidth={1.4} /></div>
                        <p className={styles.author}>by {book.author}</p>
                        <p className={styles.price}>{Number(book.price) === 0 ? "Free" : `KES ${book.price}`}</p>
                        <dl className={styles.specs}>
                            <div className={styles.spec}>
                                <dt><FileText aria-hidden="true" /><span>Format</span></dt>
                                <dd>{book.file_format}</dd>
                            </div>
                            <div className={styles.spec}>
                                <dt><BookOpen aria-hidden="true" /><span>Pages</span></dt>
                                <dd>{book.file_pages}</dd>
                            </div>
                            <div className={styles.spec}>
                                <dt><HardDrive aria-hidden="true" /><span>Size</span></dt>
                                <dd>{book.file_size_mb} MB</dd>
                            </div>
                        </dl>
                        <Link className={styles.button} href={`/shop/${book.slug}`} aria-label={`View details for ${book.title}`}>
                            View Details <ArrowRight size={25} aria-hidden="true" />
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}
