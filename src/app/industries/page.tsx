import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/Bits";
import { industries, standards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Food safety testing and QA support for dairy, meat and smallgoods, fresh produce, bakery, beverage and food service businesses in Victoria.",
};

const concerns = [
  {
    title: "Ready-to-eat risk",
    body: "Product that will not be cooked again carries the whole burden of your process control. Environmental monitoring and validated dating are not optional here.",
  },
  {
    title: "Retailer programs",
    body: "Supermarket supply brings HARPS, SQF or BRCGS obligations with fixed audit windows. We prepare you for the audit you are actually going to sit.",
  },
  {
    title: "Label truth",
    body: "Nutrition panels, allergen declarations and country of origin claims are enforceable statements. Each one needs analysis behind it.",
  },
  {
    title: "Council inspection",
    body: "For food service, the Food Act 1984 and Standard 3.2.2A drive what your records must show. We build the records, then train the team to keep them.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Different matrix.
            <br />
            Different <span className="swash">hazard.</span>
          </>
        }
        intro="A soft cheese, a bagged salad and a shelf-stable sauce fail in completely different ways. We choose the method to suit the product rather than running the same panel over everything."
      />

      {/* Sector grid — oversized editorial cards */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 md:py-28 lg:px-10">
        <ul className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal as="li" key={industry.title} delay={i * 70}>
              <article className="card group relative flex h-full flex-col overflow-hidden bg-mist p-9">
                <span
                  className="absolute inset-x-0 bottom-0 h-0 bg-aqua/25 transition-all duration-500 group-hover:h-full"
                  aria-hidden
                />
                <div className="relative">
                  <p className="label text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-8 text-3xl tracking-[-0.03em]">
                    {industry.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-2">
                    {industry.blurb}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label border border-ink/20 px-2.5 py-1.5 text-ink-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Cross-cutting concerns */}
      <section className="grain relative overflow-hidden border-y border-line bg-mist-2">
        <div className="substrate-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="Common ground"
            title="What every sector eventually runs into"
            intro="Whatever you produce, four pressures show up sooner or later. Preparing for them early is materially cheaper than reacting to them."
          />

          <dl className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
            {concerns.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card h-full bg-mist-2 p-9">
                  <dt className="font-display text-2xl tracking-[-0.03em]">
                    {c.title}
                  </dt>
                  <dd className="mt-4 leading-relaxed text-ink-3">{c.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Standards list */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Frameworks"
              title="The standards we build toward"
              intro="Our documentation and testing programs are designed to satisfy the frameworks your customers and regulators hold you to."
            />
          </div>
          <ul className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {standards.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 40}>
                <div className="flex items-center gap-4 bg-mist px-6 py-5">
                  <span className="label text-aqua-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-ink-2">{s}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Your sector"
        title={
          <>
            Not on the list?
            <br />
            Ask anyway.
          </>
        }
        body="Food is a wide category and this page is not exhaustive. If you produce, pack, import or serve it, there is a good chance we have looked at something like it."
      />
    </>
  );
}
