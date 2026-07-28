type MarkProps = {
  className?: string;
  /** Colour of the ring and ticks. Defaults to currentColor. */
  tone?: string;
};

/**
 * Brand mark: a petri dish read through an instrument crosshair — a circle,
 * a horizon rule and four calibration ticks, with a single filled colony.
 */
export default function Mark({ className = "", tone }: MarkProps) {
  const stroke = tone ?? "currentColor";
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="15" stroke={stroke} strokeWidth="1.4" />
      <circle
        cx="20"
        cy="20"
        r="9.5"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.45"
      />
      <path d="M5 20h30" stroke={stroke} strokeWidth="1" opacity="0.45" />
      <path d="M20 1.5v5M20 33.5v5M1.5 20h5M33.5 20h5" stroke={stroke} strokeWidth="1.4" />
      <circle cx="25.4" cy="14.6" r="3.1" fill="var(--color-agar)" />
    </svg>
  );
}
