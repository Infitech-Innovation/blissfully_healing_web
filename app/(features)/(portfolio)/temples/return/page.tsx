"use client";

// import type { Metadata } from "next";
// import { createMetadata } from "@/app/seo";
import Reveal from "@/features/public/temples/return/Reveal";
import AlchemyForms from "@/features/public/temples/return/AlchemyForms";
import Image from "next/image";
import { ReturnPassageSection } from "@/features/public/temples/return/FinalPassageSection";

// export const metadata: Metadata = createMetadata({
//     title: "Temple of Return",
//     description: "Explore the Blissfully Healing Temple of Return.",
//     path: "/temples/return",
// });

export default function ReturnPage() {
    return <main className="returnTemple return-temple">
        <Reveal />
        <section className="chamber return-chamber">
            <div className="pleatedGold return-pleatedGold" /><div className="warmShadow return-warmShadow" />
            <div className="chamberCopy return-chamberCopy">
                <small>TEMPLE IV · RETURN</small>
                <h1>RETURN</h1>
                <p>There are places within you<br />that have always known<br /><em>the way home.</em></p>
                <span>Alchemical love · radiance · golden intimacy</span>
            </div>
            <div className="chamberLight return-chamberLight" />
            <div className="scrollLine return-scrollLine">ENTER THE CHAMBER ↓</div>
        </section>

        <section className="alchemy return-alchemy" data-reveal>
            <AlchemyForms />
            <div className="alchemyCopy first return-alchemyCopy return-alchemyCopy-first"><small>ALCHEMICAL LOVE</small><p>Return is not becoming<br /><em>who you were.</em></p></div>
            <div className="alchemyCopy second return-alchemyCopy return-alchemyCopy-second"><p>It is meeting who you are<br /><em>without abandoning her.</em></p></div>
            <div className="unionLight return-unionLight" />
        </section>

        <section className="mirrorChapter return-mirror-chapter" data-reveal>
            <div className="mirrorCopy return-mirrorCopy"><small>THE MIRROR</small><h2>What remains<br />when you stop<br /><em>performing?</em></h2><p>No answer is required. Stay long enough to notice what appears when the surface becomes quiet.</p></div>
            {/* <GoldenMirror /> */}
            <div>
                <Image src="/images/mirrorimg.png" alt="Mirror Image" width={500} height={400} className="mirrorImage return-mirrorImage" />
            </div>
        </section>

        <section className="hiddenPleats return-hidden-pleats" data-reveal >
            <div className="hiddenPleatsBackground return-hiddenPleatsBackground" style={{
                background:
                    'linear-gradient(rgba(4, 4, 4, 0.2), rgba(4, 4, 4, 0.34)), url("https://plus.unsplash.com/premium_photo-1670044658714-686e136babc0?w=600&auto=format&fit=crop&q=60") center top / cover repeat-y',
                isolation: "isolate",
            }}>
                <span className="phrase p1 return-phrase return-p1">To be witnessed.</span>
                <span className="phrase p2 return-phrase return-p2">To be held.</span>
                {/* <span className="phrase p3 return-phrase return-p3">To be honest.</span> */}
                <span className="phrase p4 return-phrase return-p4">To return.</span>
            </div>
            <div className="pleatTitle return-pleatTitle"><small>GOLDEN INTIMACY</small><h2>There are truths<br />that only appear<br /><em>in softness.</em></h2></div>
        </section>

        <section className="privateDoor return-private-door" data-reveal>
            <div className="doorPerspective return-doorPerspective">
                <div className="archGlow return-archGlow" /><div className="archFrame return-archFrame" />
                <div className="doorLeaf dl return-doorLeaf return-dl" /><div className="doorLeaf dr return-doorLeaf return-dr" />
                <div className="insideRoom return-insideRoom"><div className="insideCurtain return-insideCurtain" /><div className="insideStone return-insideStone" /></div>
            </div>
            <div className="privateCopy return-privateCopy"><small>WHAT&apos;S WITHIN</small><h2>THE 1:1<br /><em>INTENSIVE</em></h2><p>Some work asks for privacy.</p><span>Continue toward the chamber.</span></div>
        </section>

        <section className="intensiveIntro return-intensive-intro">
            <div className="beam return-beam" />
            <div className="statement s1 return-statement return-s1" data-reveal><small>01</small><h3>ONE PERSON.</h3><p>A space held without an audience.</p></div>
            <div className="statement s2 return-statement return-s2" data-reveal><small>02</small><h3>UNDIVIDED SPACE.</h3><p>Private room for focused, intentional work.</p></div>
            <div className="statement s3 return-statement return-s3" data-reveal><small>03</small><h3>DEEPER ATTENTION.</h3><p>Space for what asks to be met beyond the surface.</p></div>
            <p className="contentNote return-contentNote">Session structure and programme details can be replaced with the final client-approved 1:1 Intensive information.</p>
        </section>

        <section className="invitation return-invitation" data-reveal>
            <small>A PRIVATE INVITATION</small>
            <blockquote>You do not have to become<br />someone else<br /><em>to return home.</em></blockquote>
            <p>1:1 INTENSIVE SESSIONS</p>
            <button>REQUEST AN INTENSIVE</button>
        </section>

        <ReturnPassageSection />
    </main>
}
