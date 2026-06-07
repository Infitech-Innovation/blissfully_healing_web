import Image from "next/image";
import Link from "next/link";
import styles from "./sanctuary.module.css";
import { temples } from "./section-data";

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
            <div className={styles.sanctuaryCardArea} key={temple.title} >
              <div className={styles.sanctuaryCard} style={{ backgroundColor: temple.color }}>
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
                    unoptimized={temple.image.startsWith("http")}
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
