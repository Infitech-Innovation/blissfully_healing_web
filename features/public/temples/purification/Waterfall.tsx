"use client";
import { useEffect, useRef } from "react";

export default function Waterfall() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return; const ctx = c.getContext("2d"); if (!ctx) return;
    let w = 0, h = 0, dpr = 1, raf = 0, last = 0;
    type Drop = { x: number, y: number, len: number, speed: number, a: number, width: number, drift: number };
    let drops: Drop[] = [];
    const makeDrop = (initial = false): Drop => ({
      x: w * (.54 + Math.random() * .44),
      y: initial ? Math.random() * h : -Math.random() * h * .3,
      len: 22 + Math.random() * 105,
      speed: 4 + Math.random() * 9,
      a: .08 + Math.random() * .30,
      width: .35 + Math.random() * 1.3,
      drift: (Math.random() - .5) * .22
    });
    const resize = () => {
      const r = c.getBoundingClientRect(); w = r.width; h = r.height; dpr = Math.min(devicePixelRatio, 2);
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: Math.max(80, Math.floor(w / 8)) }, () => makeDrop(true));
    }; resize(); const ro = new ResizeObserver(resize); ro.observe(c);

    const draw = (t: number) => {
      const dt = Math.min(2, (t - last) / 16.7 || 1); last = t; ctx.clearRect(0, 0, w, h);
      // translucent falling water curtain on right, deliberately irregular
      const g = ctx.createLinearGradient(w * .54, 0, w, 0);
      g.addColorStop(0, "rgba(215,234,231,0)");
      g.addColorStop(.16, "rgba(225,240,237,.10)");
      g.addColorStop(.48, "rgba(244,250,248,.20)");
      g.addColorStop(.8, "rgba(185,213,209,.13)");
      g.addColorStop(1, "rgba(246,252,250,.08)");
      ctx.fillStyle = g; ctx.fillRect(w * .52, 0, w * .48, h);

      for (const d of drops) {
        d.y += d.speed * dt; d.x += d.drift * dt;
        if (d.y - d.len > h) { Object.assign(d, makeDrop(false)); d.y = -d.len }
        const grad = ctx.createLinearGradient(d.x, d.y - d.len, d.x, d.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(.48, `rgba(235,248,246,${d.a * .5})`);
        grad.addColorStop(1, `rgba(150,190,185,${d.a})`);
        ctx.strokeStyle = grad; ctx.lineWidth = d.width; ctx.beginPath();
        ctx.moveTo(d.x, d.y - d.len);
        ctx.bezierCurveTo(d.x + d.drift * 12, d.y - d.len * .66, d.x - d.drift * 18, d.y - d.len * .28, d.x, d.y);
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
  return <canvas ref={ref} className="purity-waterfallCanvas" aria-hidden="true" />;
}
