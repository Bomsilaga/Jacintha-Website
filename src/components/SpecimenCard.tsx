const rows = [
  { analyte: "Standard plate count", result: "< 10² cfu/g", fill: 24, pass: true },
  { analyte: "E. coli", result: "Not detected", fill: 8, pass: true },
  { analyte: "Listeria monocytogenes", result: "Not detected /25g", fill: 6, pass: true },
  { analyte: "Salmonella spp.", result: "Not detected /25g", fill: 5, pass: true },
  { analyte: "Water activity (aw)", result: "0.91", fill: 62, pass: true },
];

/**
 * The hero's anchor object: a certificate of analysis rendered as a physical
 * card. Illustrative sample data — the layout is the point, not the figures.
 */
export default function SpecimenCard() {
  return (
    <div className="relative">
      {/* Stacked paper behind, so the card reads as one sheet off a pile */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 border border-line bg-bone-2"
        aria-hidden
      />
      <div
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-line bg-bone-3/60"
        aria-hidden
      />

      <div className="relative border border-ink/25 bg-bone shadow-[0_30px_60px_-40px_rgba(15,23,20,0.85)]">
        {/* Scan line sweeping the card — the "reading" gesture */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="h-16 w-full bg-gradient-to-b from-transparent via-agar/25 to-transparent"
            style={{ animation: "sweep 5.5s ease-in-out infinite" }}
          />
        </div>

        <header className="flex items-center justify-between border-b border-line px-6 py-4">
          <p className="label text-ink-3">Certificate of analysis</p>
          <p className="label text-spruce">SPEC · 0417</p>
        </header>

        <dl className="grid grid-cols-2 gap-px border-b border-line bg-line">
          <div className="bg-bone px-6 py-4">
            <dt className="label text-ink-3">Matrix</dt>
            <dd className="mt-2 text-sm font-medium">Ready-to-eat, chilled</dd>
          </div>
          <div className="bg-bone px-6 py-4">
            <dt className="label text-ink-3">Received</dt>
            <dd className="mt-2 text-sm font-medium">Chain of custody intact</dd>
          </div>
        </dl>

        <ul className="divide-y divide-line">
          {rows.map((row, i) => (
            <li key={row.analyte} className="px-6 py-3.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.82rem] font-medium text-ink-2">
                  {row.analyte}
                </span>
                <span className="label whitespace-nowrap text-spruce">
                  {row.result}
                </span>
              </div>
              <div className="mt-2.5 h-[3px] w-full bg-bone-3">
                <div
                  className="anim-bar h-full bg-spruce-2"
                  style={{
                    width: `${row.fill}%`,
                    animationDelay: `${600 + i * 130}ms`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        <footer className="flex items-center justify-between gap-4 border-t border-line bg-spruce px-6 py-4 text-bone">
          <p className="label text-bone/60">Specification</p>
          <p className="label flex items-center gap-2 text-agar">
            <span className="inline-block t-1.5 w-1.5 rounded-full bg-agar" />
            Conforms
          </p>
        </footer>
      </div>
    </div>
  );
}
