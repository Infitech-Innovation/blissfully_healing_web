"use client";
import { useEffect, useRef } from "react";

export default function Waterfall() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return; const ctx = c.getContext("2d"); if (!ctx) return;
    let w = 0, h = 0, dpr = 1, raf = 0, last = 0;
    type Drop = { x: number, y: number, len: number, speed: number, a: number, width: number, drift: number, sway: number };
    let drops: Drop[] = [];
    const makeDrop = (initial = false): Drop => ({
      x: w * (.55 + Math.random() * .39),
      y: initial ? Math.random() * h : -Math.random() * h * .3,
      len: 30 + Math.random() * 130,
      speed: 5 + Math.random() * 11,
      a: .08 + Math.random() * .24,
      width: .25 + Math.random() * 1.1,
      drift: (Math.random() - .5) * .26,
      sway: Math.random() * Math.PI * 2
    });
    const resize = () => {
      const r = c.getBoundingClientRect(); w = r.width; h = r.height; dpr = Math.min(devicePixelRatio, 2);
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: Math.max(80, Math.floor(w / 8)) }, () => makeDrop(true));
    }; resize(); const ro = new ResizeObserver(resize); ro.observe(c);

    const draw = (t: number) => {
      const dt = Math.min(2, (t - last) / 16.7 || 1); last = t; ctx.clearRect(0, 0, w, h);
      const pulse = (Math.sin(t * .0015) + 1) * .5;
      const g = ctx.createLinearGradient(w * .50, 0, w, 0);
      g.addColorStop(0, "rgba(215,234,231,0)");
      g.addColorStop(.18, `rgba(225,240,237,${.05 + pulse * .04})`);
      g.addColorStop(.48, `rgba(244,250,248,${.13 + pulse * .06})`);
      g.addColorStop(.8, "rgba(185,213,209,.10)");
      g.addColorStop(1, "rgba(246,252,250,.08)");
      ctx.fillStyle = g; ctx.fillRect(w * .50, 0, w * .50, h);

      const mist = ctx.createRadialGradient(w * .76, h * .82, 0, w * .76, h * .82, w * .38);
      mist.addColorStop(0, `rgba(255,255,255,${.12 + pulse * .08})`);
      mist.addColorStop(.42, "rgba(221,238,235,.10)");
      mist.addColorStop(1, "rgba(221,238,235,0)");
      ctx.fillStyle = mist; ctx.fillRect(w * .48, h * .58, w * .52, h * .42);

      for (const d of drops) {
        d.y += d.speed * dt; d.x += d.drift * dt;
        if (d.y - d.len > h) { Object.assign(d, makeDrop(false)); d.y = -d.len }
        const x = d.x + Math.sin(t * .0018 + d.sway) * 5;
        const grad = ctx.createLinearGradient(d.x, d.y - d.len, d.x, d.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(.48, `rgba(252,255,254,${d.a * .6})`);
        grad.addColorStop(1, `rgba(122,172,166,${d.a})`);
        ctx.strokeStyle = grad; ctx.lineWidth = d.width; ctx.beginPath();
        ctx.moveTo(x, d.y - d.len);
        ctx.bezierCurveTo(x + d.drift * 14, d.y - d.len * .66, x - d.drift * 16, d.y - d.len * .28, d.x, d.y);
        ctx.stroke();

        if (d.width > 1.05) {
          ctx.fillStyle = `rgba(255,255,255,${d.a * .45})`;
          ctx.beginPath(); ctx.ellipse(d.x, d.y + 2, d.width * 1.4, d.width * 2.5, 0, 0, Math.PI * 2); ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    }; raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, []);
  return (
    <div className="purity-pencilWaterfall" aria-hidden="true">
      <div className="purity-pencilWaterfallArt" />
      {/* <div className="purity-pencilWaterfallTexture" /> */}
      <canvas ref={ref} className="purity-waterfallCanvas" />
    </div>
  );
}
