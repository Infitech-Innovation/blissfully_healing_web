export const fontDisplay = "font-[family-name:var(--font-moriah-riona)]";

export const eyebrowClass =
  "text-[0.66rem] uppercase tracking-[0.28em] text-[#c6a15b]";

export const textLinkClass =
  "h-auto cursor-pointer rounded-none border-0 border-b border-[#c6a15b8c] bg-transparent px-0 pb-1.5 text-[0.61rem] uppercase tracking-[0.16em] text-[#f1d79b] shadow-none hover:bg-transparent hover:text-[#f1d79b]";

export const noiseBackground =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.85'/%3E%3C/svg%3E\")";

const seededParticleValue = (seed: number) => {
  const wave = Math.sin(seed * 12.9898) * 43758.5453;
  return wave - Math.floor(wave);
};

export const createParticles = () =>
  Array.from({ length: 42 }, (_, id) => ({
    id,
    left: `${(seededParticleValue(id + 1) * 100).toFixed(4)}%`,
    duration: Number((12 + seededParticleValue(id + 101) * 16).toFixed(4)),
    delay: Number((seededParticleValue(id + 201) * 16).toFixed(4)),
    size: `${(1 + seededParticleValue(id + 301) * 2.4).toFixed(4)}px`,
  }));
