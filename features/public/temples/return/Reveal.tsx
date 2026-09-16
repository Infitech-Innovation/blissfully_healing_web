"use client";
import { useEffect } from "react";
export default function Reveal() { useEffect(() => { const es = [...document.querySelectorAll("[data-reveal]")]; const o = new IntersectionObserver(xs => xs.forEach(x => { if (x.isIntersecting) { x.target.classList.add("seen", "return-seen"); o.unobserve(x.target) } }), { threshold: .12 }); es.forEach(e => o.observe(e)); return () => o.disconnect() }, []); return null }
