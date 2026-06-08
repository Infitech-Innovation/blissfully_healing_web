interface ProgressProp {
  attended: number;
  total: number;
  color: string;
}

export function ProgressRing({
  attended,
  total,
  color,
}: ProgressProp) {
  const pct = total === 0 ? 0 : attended / total;

  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - pct * circ;

  return (
    <svg width="88" height="88" style={{ transform: "rotate(-90deg)" }}>
      {/* Background track */}
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke="rgba(212,175,55,0.15)"
        strokeWidth="6"
      />

      {/* Progress */}
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 1s ease",
          filter: `drop-shadow(0 0 6px ${color}66)`,
        }}
      />

      {/* Percentage */}
      <text
        x="44"
        y="44"
        dominantBaseline="middle"
        textAnchor="middle"
        // fill="#F8F8F5"
        fill="#2f251f"
        fontSize="14"
        fontWeight="600"
        fontFamily="'Cormorant Garamond', serif"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "44px 44px",
        }}
      >
        {Math.round(pct * 100)}%
      </text>
    </svg>
  );
}