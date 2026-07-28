import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import { CtaBand, PageHero, SectionHead } from "@/components/Bits";
import { principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Epitome Quality Group is a Victorian food safety and quality assurance practice led by ${site.ceo}. ABN ${site.abn}.`,
};

const commitments = [
  {
    k: "Independence",
    v: "We have no stake in the outcome of a result. If a batch fails, we tell you it failed.",
  },
  {
    k: "Confidentiality",
    v: "Your formulations, results and audit findings stay yours. Nothing is shared without written instruction.",
  },
  {
    k: "Traceability",
    v: "Every sample is logged, every method is recorded, and every report can be reconstructed from source data.",
  },
  {
    k: "Turnaround",
    v: "We agree a reporting date before work starts and we tell you early if anything threatens it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A quality function
            <br />
            you can <span className="swash">actually reach.</span>
          </>
        }
        intro="Epitome Quality Group is a Victorian quality control consultancy for the food industry. We were built for businesses that need real technical judgement — and sometimes real technical people — without carrying a full laboratory or a permanent technical department."
        meta={[
          { label: "Chief Executive", value: site.ceo },
          { label: "ABN", value: site.abn },
          { label: "Based in", value: site.regionShort },
        ]}
      />

      {/* Story */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label label-tick text-ink-3">Why we exist</p>
              <h2 className="font-display t-1 mt-6">
                Good food businesses lose money to avoidable technical problems.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <Reveal delay={100}>
              <p className="lede">
                A rejected pallet. A shortened date mark that was never validated.
                A corrective action written the night before an audit. None of
                these are failures of effort — they are failures of access to
                technical support at the moment the decision is made.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                Epitome Quality Group exists to close that access gap for Victorian
                food producers, processors and food service operators. We combine
                laboratory analysis with the practical systems work that turns a
                result into a decision: what to release, what to hold, what to
                change, and what to write down so the same problem does not
                return next quarter.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                The labour hire side of the business grew out of the same
                problem. Clients kept asking us to find them a QA officer, and
                kept being sent candidates who interviewed well and could not do
                the work. Because we run quality systems ourselves, we can tell
                the difference — so we started placing people directly.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                We are deliberately small and deliberately local. You deal with a
                person who has stood in your production area, not an account
                manager reading a file.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="grain relative overflow-hidden border-y border-line band-deep text-mist">
        <div className="substrate-grid-inv absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label label-tick text-aqua">Leadership</p>
                <div className="mt-10 border border-line-inv p-10">
                  <Mark className="h-14 w-14 text-mist" />
                  <p className="font-display mt-10 text-5xl tracking-[-0.03em]">
                    {site.ceo}
                  </p>
                  <p className="label mt-4 text-aqua">{site.ceoTitle}</p>
                  <div className="mt-8 border-t border-line-inv pt-6">
                    <p className="label text-mist/45">Direct line</p>
                    <a
                      href={site.phoneHref}
                      className="link-draw mt-2 inline-block text-lg text-mist"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
              <Reveal delay={120}>
                <p className="font-display text-3xl leading-[1.2] tracking-[-0.03em] md:text-4xl">
                  &ldquo;Every business I meet already knows something is not
                  right. What they need is someone to measure it, name it, and
                  put a fix in writing.&rdquo;
                </p>
                <p className="mt-8 leading-relaxed text-mist/70">
                  {site.ceo} leads {site.name}, setting the technical direction of
                  every engagement and remaining personally contactable on live
                  issues. Under his direction the practice holds a simple rule:
                  no recommendation leaves the office unless it is supported by
                  a result, a validated method, or a clause of the Code.
                </p>
                <p className="mt-6 leading-relaxed text-mist/70">
                  That discipline is what clients are buying. It is also what
                  makes our reports usable in front of a certifier, a retailer&rsquo;s
                  technical team, or a local council environmental health
                  officer.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="How we work"
          title="Three rules we do not bend"
          intro="They sound obvious. In practice they are the difference between a report that helps and a report that sits in a folder."
        />

        <ul className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <div className="card h-full bg-mist p-9">
                <p className="label text-aqua-2">
                  R/{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-8 text-2xl tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-3">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Commitments + business details */}
      <section className="border-y border-line bg-mist-2">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="Our commitments"
                title="What you can hold us to"
              />
              <Reveal delay={120}>
                <dl className="mt-10 divide-y divide-line border-y border-line">
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="label text-ink-3">Trading name</dt>
                    <dd className="text-sm font-medium">{site.name}</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="label text-ink-3">Legal entity</dt>
                    <dd className="text-sm font-medium">{site.legalEntity}</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="label text-ink-3">ABN</dt>
                    <dd className="text-sm font-medium">{site.abn}</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="label text-ink-3">Service area</dt>
                    <dd className="text-sm font-medium">{site.region}</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-4">
                    <dt className="label text-ink-3">Hours</dt>
                    <dd className="text-right text-sm font-medium">
                      {site.hours}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <ul className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {commitments.map((c, i) => (
                <Reveal as="li" key={c.k} delay={i * 70}>
                  <div className="card h-full bg-mist-2 p-8">
                    <p className="label text-ink-3">{c.k}</p>
                    <p className="mt-4 leading-relaxed text-ink-2">{c.v}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title={
          <>
            Start with a
            <br />
            conversation.
          </>
        }
        body="No obligation and no sales script. Tell us what you make and what is worrying you, and we will tell you honestly whether we are the right fit."
      />
    </>
  );
}
