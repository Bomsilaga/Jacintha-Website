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
      {/* A single clean document panel. The stacked-paper illustration this
          replaced read as a design flourish rather than a report. */}
      <div className="relative overflow-hidden border border-mist-3 bg-mist shadow-[0_24px_48px_-28px_rgba(12,28,40,0.32)]">
        <header className="flex items-center justify-between border-b border-line bg-mist-2 px-6 py-4">
          <p className="label text-ink-3">Certificate of analysis</p>
          <p className="label text-petrol">SPEC · 0417</p>
        </header>

        <dl className="grid grid-cols-2 gap-px border-b border-line bg-line">
          <div className="bg-mist px-6 py-4">
            <dt className="label text-ink-3">Matrix</dt>
            <dd className="mt-2 text-sm font-medium">Ready-to-eat, chilled</dd>
          </div>
          <div className="bg-mist px-6 py-4">
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
                <span className="label whitespace-nowrap text-petrol">
                  {row.result}
                </span>
              </div>
              <div className="mt-2.5 h-[3px] w-full bg-mist-3">
                <div
                  className="anim-bar h-full bg-petrol-2"
                  style={{
                    width: `${row.fill}%`,
                    animationDelay: `${600 + i * 130}ms`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        <footer className="flex items-center justify-between gap-4 border-t border-line bg-petrol px-6 py-4 text-mist">
          <p className="label text-mist/60">Specification</p>
          <p className="label flex items-center gap-2 text-aqua">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-aqua" />
            Conforms
          </p>
        </footer>
      </div>
    </div>
  );
}
