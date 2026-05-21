import Image from "next/image";
import Link from "next/link";
import styles from "./sanctuary.module.css";

const temples = [
  {
    title: "Temple of Stillness",
    href: "/temples/stillness",
    icon: "/icons/temple-stillness.svg",
    image: "https://images.pexels.com/photos/7676886/pexels-photo-7676886.jpeg",
    content: "The Primordial Void: Depth and  the inner shadow",
  },
  {
    title: "Temple of Purification",
    href: "/temples/purification",
    icon: "/icons/temple-purification.svg",
    image: "https://images.pexels.com/photos/6195987/pexels-photo-6195987.jpeg",
    content: "Purity: fluid release and the ritual of water",
  },
  {
    title: "Temple of Return",
    href: "/temples/return",
    icon: "/icons/temple-return.svg",
    image: "https://images.pexels.com/photos/6559901/pexels-photo-6559901.jpeg",
    content: "Alchemical Love: radiance and golden intimacy.",
  },
  {
    title: "Temple of Voyage",
    href: "/temples/voyage",
    icon: "/icons/temple-voyage.svg",
    image:
      "https://images.pexels.com/photos/37180114/pexels-photo-37180114.jpeg",
    content: "Vital Growth: lush horizons and new frontiers ",
  },
  {
    title: "Temple of Remembrance",
    href: "/temples/remembrance",
    icon: "/icons/temple-remembrance.svg",
    image: "/images/story-img1.webp",
    content: "Sovereign Lineage: ancestry and spiritual memory",
  },
  {
    title: "Temple of Belonging",
    href: "/temples/belonging",
    icon: "/icons/temple-belonging.svg",
    image:
      "https://images.pexels.com/photos/31433821/pexels-photo-31433821.jpeg",
    content: "Cosmic Depth: connection through the shared soul.",
  },
];

export default function SanctuarySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.sectionTitleWrap} ${styles.centerAlign}`}>
          <h2 className={styles.bannerTitle}>
            Visit The Different{" "}
            <span className={styles.bannerTitleSubText}>Temples</span>
          </h2>
        </div>
      </div>

      <div className={styles.sanctuaryWholeArea}>
        <div className={styles.sanctuaryCollectionList}>
          {temples.map((temple) => (
            <div className={styles.sanctuaryCardArea} key={temple.title}>
              <div className={styles.sanctuaryCard}>
                <Link
                  href={temple.href}
                  className={styles.sanctuaryCardImageWrap}
                >
                  <Image
                    src={temple.image}
                    alt={temple.title}
                    width={1280}
                    height={900}
                    className={styles.sanctuaryPostImage}
                    unoptimized={typeof temple.image === 'string' && temple.image.startsWith('http')}
                  />
                </Link>

                <div className={styles.sanctuaryPostContentArea}>
                  <div className={styles.sanctuaryPostContentWrap}>
                    <Link
                      href={temple.href}
                      className={styles.sanctuaryPostIconWrap}
                    >
                      <Image
                        src={temple.icon}
                        alt="Sanctuary icon"
                        width={54}
                        height={54}
                        className={styles.sanctuaryPostIcon}
                      />
                    </Link>

                    <Link
                      href={temple.href}
                      className={styles.sanctuaryPostTitle}
                    >
                      {temple.title}
                    </Link>

                    <p className={styles.sanctuaryPostContent}>
                      {temple.content ||
                        "Explore the sanctuary temple with immersive rituals, guided offerings, and sacred space for return."}
                    </p>

                    <Link
                      href={temple.href}
                      className={styles.sanctuaryEnterButton}
                    >
                      Visit Temple
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
