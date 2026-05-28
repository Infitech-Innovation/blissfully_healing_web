import type { ReactNode, SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "stroke"> & {
  size?: number;
  stroke?: number;
};

function createIcon(paths: ReactNode) {
  return function Icon({ size = 24, stroke = 2, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

export const IconBook2 = createIcon(
  <>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
    <path d="M8 6h8" />
  </>,
);

export const IconArrowLeft = createIcon(<path d="M5 12h14M5 12l6 6M5 12l6-6" />);

export const IconMoon = createIcon(
  <path d="M12 3a7 7 0 1 0 7 9.8A8 8 0 0 1 12 3z" />,
);

export const IconChevronDown = createIcon(<path d="m6 9 6 6 6-6" />);

export const IconUserCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="10" r="3" />
    <path d="M6.2 18.5a6.5 6.5 0 0 1 11.6 0" />
  </>,
);

export const IconBrandReact = createIcon(
  <>
    <circle cx="12" cy="12" r="1.8" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
  </>,
);

export const IconBrandTypescript = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 8h6" />
    <path d="M11 8v8" />
    <path d="M15 15c.6.7 1.3 1 2.1 1 1.1 0 1.9-.6 1.9-1.5 0-2-3.8-1.2-3.8-3.8 0-1.1.9-1.9 2.2-1.9.8 0 1.5.2 2.1.7" />
  </>,
);

export const IconBrandTailwind = createIcon(
  <path d="M6 10c1.2-4 3.7-5.5 7.5-4.5 2.3.6 2.5 2.2 4.1 2.4 1 .1 1.8-.3 2.4-1.2-1.2 4-3.7 5.5-7.5 4.5-2.3-.6-2.5-2.2-4.1-2.4-1-.1-1.8.3-2.4 1.2zm-2 7c1.2-4 3.7-5.5 7.5-4.5 2.3.6 2.5 2.2 4.1 2.4 1 .1 1.8-.3 2.4-1.2-1.2 4-3.7 5.5-7.5 4.5-2.3-.6-2.5-2.2-4.1-2.4-1-.1-1.8.3-2.4 1.2z" />,
);

export const IconSchool = createIcon(
  <>
    <path d="m3 10 9-5 9 5-9 5z" />
    <path d="M7 12v5c3 2 7 2 10 0v-5" />
  </>,
);

export const IconCategory = createIcon(
  <>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </>,
);

export const IconClockHour4 = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);

export const IconPlayerPlay = createIcon(<path d="M7 4v16l13-8z" />);

export const IconCheck = createIcon(<path d="m5 12 5 5L20 7" />);

export const IconDeviceMobile = createIcon(
  <>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 18h2" />
  </>,
);

export const IconCertificate = createIcon(
  <>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 14 7 21l5-3 5 3-2-7" />
  </>,
);
