// import Link from "next/link";
import styles from "./section-hero.module.css";

export default function SanctuaryHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div>
          <h1 className={styles.heroTitle}>
            Where people come to learn, heal, connect, and grow.
          </h1>
          <p className={styles.heroSubtitle}>
            Explore a sacred space where every detail is tuned for slow renewal,
            ritual care, and deeper connection with your own inner sanctuary.
          </p>
        </div>

        {/* <div className={styles.heroActions}>
          <Link href="/temples/voyage" className={styles.actionPrimary}>
            Enter the Sanctuary
          </Link>
        </div> */}
      </div>

      <div className={styles.heroDecor} />
    </section>
  );
}
