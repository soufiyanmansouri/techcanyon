export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="brand-mark"
    >
      <rect width="32" height="32" fill="currentColor" />
      {/* Canyon mark — ascending chevrons */}
      <path
        d="M6 20.5 16 9.5l10 11"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M9.5 23.5 16 16.5l6.5 7"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}
