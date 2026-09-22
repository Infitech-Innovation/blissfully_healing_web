"use client";

// import type { Metadata } from "next";
// import { createMetadata } from "@/app/seo";
import Waterfall from "@/features/public/temples/purification/Waterfall";
import { PurificationPassageSection } from "@/features/public/temples/purification/FinalPassageSection";

// export const metadata: Metadata = createMetadata({
//     title: "Temple of Purification",
//     description: "Explore the Blissfully Healing Temple of Purification.",
//     path: "/temples/purification",
// });

export default function PurificationPage() {
    const releases = ["Fear", "Grief", "Expectation", "Control", "Old stories", "What was never yours"];
    return <div className="purity-purification">
        <Waterfall />

        <section className="purity-arrival purity-waterfallArrival">
            {/* <div className="purity-silkLight" /> */}
            <div className="purity-heroFalls"><i /><i /><i /><i /><i /></div>
            <div className="purity-arrivalCopy"><p>TEMPLE III · PURIFICATION</p><h1>Release what<br />no longer needs<br /><em>to be carried.</em></h1><span>A sacred space for fluid release, renewal<br />and the ritual language of water.</span></div>
            <div className="purity-wordReflection">PURIFICATION</div><div className="purity-stillWater" />
            <div className="purity-splashMist" />
            <div className="purity-scrollCue">FOLLOW THE WATER <b>↓</b></div>
        </section>

        <section className="purity-pourScene purity-waterfallChapter">
            <div className="purity-waterColumn" /><div className="purity-impact"><i /><i /><i /></div>
            <div className="purity-pourCopy"><small>THE ACT OF RELEASE</small><h2>Let it move<br /><em>through you.</em></h2></div>
        </section>

        <section className="purity-releaseWords">
            <header><small>A QUIET QUESTION</small><h2>What are you<br /><em>ready to release?</em></h2></header>
            <div className="purity-sinkingWords">{releases.map((x, i) => <span style={{ "--i": i } as React.CSSProperties} key={x}>{x}</span>)}</div>
        </section>

        <section className="purity-breath">
            <div className="purity-singleDrop" /><div className="purity-breathRipple" />
            <p>You do not have to<br /><em>carry everything forward.</em></p>
        </section>

        <section className="purity-reflection">
            <div className="purity-moonReflection" /><div className="purity-realMoon" />
            <div className="purity-reflectionCopy"><small>WATER BECOMES MOONLIGHT</small><p>Release is not an ending.<br />It is a return to rhythm.</p></div>
        </section>

        <section className="purity-templeComing">
            <div className="purity-comingWater" /><div className="purity-comingMoon" />
            <p className="purity-comingEyebrow">TEMPLE OF PURIFICATION</p>
            <h2>COMING<br /><em>SOON</em></h2>
            <p className="purity-comingStatement">A sacred world of release, purification and return is being prepared.</p>
        </section>

        <section className="purity-lunarChamber">
            <div className="purity-lunarWater" /><div className="purity-moonInstallation"><div className="purity-moonHalo" /><div className="purity-moonBody" /><div className="purity-phaseRing"></div></div>
            <div className="purity-ritualCopy"><small>ONE OF THE EXPERIENCES WITHIN</small><h2>Moon<br /><em>Rituals</em></h2><p>Rituals created around release, renewal and the cyclical wisdom of returning.</p></div>
        </section>

        <section className="purity-ending">
            <p>What leaves creates space<br /><em>for what is ready to arrive.</em></p>
            <span>BLISSFULLY HEALING</span>
        </section>
        <PurificationPassageSection/>
    </div>
}
