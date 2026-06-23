import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function OurStorySection() {
  return (
    <section className={styles.sectionOurStory}>
      <div className={styles.sectionGap}>
        <div className={styles.containerMain}>
          <div className={styles.ourStoryWrapper}>
            {/* Images */}
            <div className={styles.ourStoryImageBlock}>
              <div className={styles.ourStoryLgImageBlock}>
                <Image
                  src="/images/story-img1.webp"
                  alt="Meditating woman"
                  loading="eager"
                  width={900}
                  height={1200}
                  className={styles.ourStoryLgImage}
                />
              </div>

              <div className={styles.ourStorySmImageBlock}>
                <Image
                  src="/images/story-img3.webp"
                  alt="Woman holding yoga mat"
                  loading="eager"
                  width={800}
                  height={800}
                  className={styles.ourStorySmImage}
                />
              </div>
            </div>

            {/* Content */}
            <div className={styles.ourStoryContentBlock}>
              <div className={styles.sectionHeadingBlock}>
                <div className={styles.sectionSubtitleBlock}>
                  <div className={styles.subtitlePointer}></div>
                  <p className={styles.subtitleText}>Our Story</p>
                </div>

                <div className={styles.sectionTitleBlock}>
                  <h2 className={styles.headingStyle2}>
                    A Safe Space for{" "}
                    <span className={styles.headingHighlight}>Healing</span>
                  </h2>
                </div>

                <div className={styles.sectionSummaryBlock}>
                  <p className={styles.textSizeLarge}>
                    Blissfully Healing is a digital wellness platform focused on
                    spiritual healing, mental health, and personal reconnection.
                    <br />
                    <br />
                    It is more than an information website. It is a calm, safe,
                    and emotionally supportive space where people can learn,
                    heal, connect, and grow through blogs, healing stories,
                    support groups, retreats, courses, e-books, and
                    inspirational videos.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.ourStoryStatBlock}>
                <div className={styles.ourStorySingleStatBlock}>
                  <div className={styles.ourStoryStatNumber}>6+</div>
                  <p className={styles.ourStoryStatText}>Healing resources</p>
                </div>

                <div className={styles.ourStoryStatDivider}></div>

                <div className={styles.ourStorySingleStatBlock}>
                  <div className={styles.ourStoryStatNumber}>24/7</div>
                  <p className={styles.ourStoryStatText}>Digital access</p>
                </div>

                <div className={styles.ourStoryStatDivider}></div>

                <div className={styles.ourStorySingleStatBlock}>
                  <div className={styles.ourStoryStatNumber}>∞</div>
                  <p className={styles.ourStoryStatText}>
                    Lifetime course access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
