interface ProgressProp {
  attended: number;
  total: number;
  color: string;
}

export function ProgressRing({ attended, total, color }: ProgressProp) {
  const pct = total === 0 ? 0 : attended / total;

  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - pct * circ;

  // Strips special characters like '#' to prevent breaking SVG url string selectors
  const safeId = color.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className="relative">
      <svg
        width="88"
        height="88"
        style={{ transform: "rotate(-90deg)" }}
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient
            id={`progressGradient-${safeId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
          
          <filter id={`glow-${safeId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="#eadfd4"
          strokeWidth="6"
          className="opacity-40"
        />

        {/* Outer glow ring */}
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeOpacity="0.08"
          className="animate-pulse"
        />

        {/* Progress arc with gradient */}
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke={`url(#progressGradient-${safeId})`}
          strokeWidth="6"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          filter={`url(#glow-${safeId})`}
          style={{
            transition: "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Percentage display */}
        <text
          x="44"
          y="40"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#2f251f"
          fontSize="15"
          fontWeight="600"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "44px 44px",
          }}
        >
          {Math.round(pct * 100)}%
        </text>

        <text
          x="44"
          y="54"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#8f6249"
          fontSize="8"
          fontWeight="500"
          letterSpacing="0.1em"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "44px 44px",
          }}
        >
          complete
        </text>
      </svg>

      {/* Subtle decorative dot */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        style={{
          backgroundColor: color,
          top: "6px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}