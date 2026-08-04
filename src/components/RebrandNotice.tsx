import Reveal from "./Reveal";
import Mark from "./Mark";
import { site } from "@/lib/site";

/**
 * Rebrand announcement for the home page.
 *
 * Intended to run for six to twelve months after the name change and then be
 * retired — delete the <RebrandNotice /> line in src/app/page.tsx to remove
 * it. Everything it states is verifiable: the trading name changed, the legal
 * entity and ABN did not.
 */
export default function RebrandNotice() {
  const assurances = [
    { k: "Same ABN", v: site.abn },
    { k: "Same team", v: `Led by ${site.ceo}` },
    { k: "Same contacts", v: site.phoneDisplay },
  ];

  return (
    <section
      aria-labelledby="rebrand-heading"
      className="border-b border-line bg-mist-2"
    >
      <div className="mx-auto max-w-[88rem] px-6 py-14 md:py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label label-tick text-aqua-2">Announcement</p>
              <h2
                id="rebrand-heading"
                className="font-display t-2 mt-6 text-petrol"
              >
                We have rebranded to serve you better
              </h2>
              <div className="mt-7 flex items-center gap-4">
                <Mark className="h-10 w-10 shrink-0 text-petrol" />
                <p className="text-sm leading-snug text-ink-3">
                  <span className="line-through">{site.formerName}</span>
                  <br />
                  <span className="font-medium text-ink">
                    is now {site.name}
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={110}>
              <p className="leading-relaxed text-ink-2">
                The new name reflects what the business has grown into.
                Alongside food safety testing we now deliver full quality
                control consultancy and place specialist QA and QC personnel
                directly onto client sites across {site.region}. &ldquo;Testing&rdquo;
                described only part of that work.
              </p>
              <p className="mt-5 leading-relaxed text-ink-2">
                Nothing that matters to you has changed. The same team applies
                the same technical standards under the same ABN, and the same
                people answer the phone. A change of trading name does not
                affect existing agreements, quotations or issued reports.
              </p>

              <dl className="mt-9 grid gap-px border border-line bg-line sm:grid-cols-3">
                {assurances.map((a) => (
                  <div
                    key={a.k}
                    className="flex flex-col justify-between bg-mist-2 px-5 py-5"
                  >
                    <dt className="label text-ink-3">{a.k}</dt>
                    <dd className="font-display mt-3 text-base tracking-[-0.01em]">
                      {a.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
