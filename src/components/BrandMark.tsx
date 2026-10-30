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
      <path
        d="M6 22.5 11.5 9h3.2L20.2 22.5h-3.1l-1.1-2.8h-5.7l-1.1 2.8H6zm5.2-5.2h4.1L13.4 12l-2.2 5.3zM22 9h4.2c2.7 0 4.5 1.6 4.5 4.1 0 2.6-1.8 4.2-4.5 4.2H24.6V22.5H22V9zm2.6 5.8h1.4c1.2 0 1.9-.6 1.9-1.6s-.7-1.6-1.9-1.6h-1.4v3.2z"
        fill="#fff"
      />
    </svg>
  );
}
