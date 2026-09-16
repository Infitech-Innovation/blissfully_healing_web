import type { Metadata } from "next";
import { createMetadata } from "@/app/seo";
import VoyageWorld from "@/features/public/temples/voyage/VoyageWorld";
import StorySync from "@/features/public/temples/voyage/StorySync";
import { VoyagePassageSection } from "@/features/public/temples/voyage/FinalPassageSection";

export const metadata: Metadata = createMetadata({
  title: "Temple of Voyage",
  description: "Explore Blissfully Healing retreats and reflective spaces in the Temple of Voyage.",
  path: "/temples/voyage",
});

export default function VoyagePage() {
  return (
    <div className="voyage-voyage">
      <VoyageWorld />
      <StorySync />

      <div className="voyage-windowOverlay">
        <div className="voyage-windowCutout" />
      </div>

      <div className="voyage-story">
        <section className="voyage-chapter voyage-intro" data-voyage-chapter>
          <div className="voyage-copy voyage-centered">
            <small>TEMPLE V · VOYAGE</small>
            <h1 className="text-white">Sometimes healing asks us<br /><em>to leave what is familiar.</em></h1>
            <p>Not to escape your life. To create enough distance to hear yourself again.</p>
            <span className="voyage-cta">BEGIN THE VOYAGE ↓</span>
          </div>
        </section>

        <section className="voyage-chapter voyage-clouds" data-voyage-chapter>
          <div className="voyage-copy voyage-centered">
            <p className="voyage-bigQuote">Some journeys change<br /><em>where you are.</em></p>
            <p className="voyage-bigQuote">Others change<br /><em>how you return.</em></p>
          </div>
        </section>

        <section className="voyage-chapter voyage-release" data-voyage-chapter>
          <div className="voyage-copy voyage-left">
            <small>01 · RELEASE</small>
            <h2 className="text-white">Put down what<br />you have been<br /><em>carrying.</em></h2>
            <p>Open water. Space from routine. A place for the body to soften and the mind to become quieter.</p>
            <span>HEALING RETREAT · DESTINATION TO BE CONFIRMED</span>
          </div>
        </section>

        <section className="voyage-chapter voyage-stillness" data-voyage-chapter>
          <div className="voyage-copy voyage-right">
            <small>02 · STILLNESS</small>
            <h2 className="text-white">Hear what remains<br />when the noise<br /><em>falls away.</em></h2>
            <p>A slower landscape for reflection, rest and listening inward.</p>
            <span>HEALING RETREAT · DESTINATION TO BE CONFIRMED</span>
          </div>
        </section>

        <section className="voyage-chapter voyage-reconnect" data-voyage-chapter>
          <div className="voyage-copy voyage-left">
            <small>03 · RECONNECT</small>
            <h2 className="text-white">With your body.<br />With yourself.<br /><em>With what matters.</em></h2>
            <p>Nature becomes part of the practice: breath, movement, quiet and reconnection.</p>
            <span>HEALING RETREAT · DESTINATION TO BE CONFIRMED</span>
          </div>
        </section>

        <section className="voyage-chapter voyage-surrender" data-voyage-chapter>
          <div className="voyage-copy voyage-centered">
            <small>THE TURN INWARD</small>
            <h2 className="text-white">You can travel far<br />and still carry<br /><em>everything with you.</em></h2>
            <p>This is where the voyage changes.</p>
          </div>
        </section>

        <section className="voyage-chapter voyage-alignment" data-voyage-chapter>
          <div className="voyage-copy voyage-left">
            <small>BODY · MIND · SPIRIT · SELF</small>
            <h2 className="text-white">Healing is not always<br />about becoming more.</h2>
            <p className="voyage-bigQuote">Sometimes it is about returning<br /><em>to what was already there.</em></p>
          </div>
          <div className="voyage-orbitWords"><span>BODY</span><span>MIND</span><span>SPIRIT</span><span>SELF</span></div>
        </section>

        <section className="voyage-chapter voyage-arrival" data-voyage-chapter>
          <div className="voyage-copy voyage-centered">
            <small>THE JOURNEY INWARD</small>
            <h2 className="voyage-arrivalTitle">ARRIVAL</h2>
            <p className="voyage-bigQuote">You travelled far enough<br /><em>to meet yourself again.</em></p>
          </div>
        </section>

        <section className="voyage-chapter voyage-retreats" data-voyage-chapter>
          <div className="voyage-copy voyage-left voyage-retreatCopy">
            <small>WHAT&apos;S WITHIN · RETREATS</small>
            <h2 className="text-white">Journeys created<br />for <em>healing.</em></h2>
            <p>Each retreat is a destination with an inner purpose: space to step away, reflect, reconnect and return.</p>
            <div className="voyage-retreatRow">
              <span>UPCOMING VOYAGE · 01</span>
              <strong>RELEASE</strong>
              <em>Destination · Dates · Programme</em>
            </div>
            <div className="voyage-retreatRow">
              <span>UPCOMING VOYAGE · 02</span>
              <strong>RETURN</strong>
              <em>Destination · Dates · Programme</em>
            </div>
          </div>
        </section>

        <section className="voyage-chapter voyage-ending" data-voyage-chapter>
          <div className="voyage-copy voyage-centered">
            <p className="voyage-bigQuote">You may return<br />to the same life.</p>
            <h2 className="text-white">But you do not have to<br />return as the<br /><em>same person.</em></h2>
            <button>BEGIN YOUR RETREAT →</button>
            <span className="voyage-signature">TEMPLE OF VOYAGE · BLISSFULLY HEALING</span>
          </div>
        </section>

        <VoyagePassageSection />
      </div>
    </div>
  );
}
