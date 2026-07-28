import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/Bits";
import { caseStudies, contracts, testimonials } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work & success stories",
  description:
    "Client success stories, completed contracts and quality control engagements delivered by Epitome Quality Group across Victoria.",
};

export default function WorkPage() {
  const completed = contracts.filter((c) => c.status === "Completed").length;
  const ongoing = contracts.filter((c) => c.status === "Ongoing").length;

  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            The problems
            <br />
            we were <span className="swash">called in for.</span>
          </>
        }
        intro="Quality work is judged on what changed afterwards. These are engagements described by sector and region rather than by client name, because most of this work is commercially sensitive."
        meta={[
          { label: "Contracts completed", value: String(completed) },
          { label: "Engagements ongoing", value: String(ongoing) },
          { label: "Register from", value: "2023" },
        ]}
      />

      {/* --------------------------------------------------- case studies */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 md:py-28 lg:px-10">
        <SectionHead
          eyebrow="Success stories"
          title="Six engagements, start to outcome"
          intro="Each one follows the same shape: what was wrong, what we did about it, and what the business was left holding."
        />

        <div className="mt-16 space-y-px bg-line">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 50}>
              <article
                id={study.id}
                className="scroll-mt-32 bg-mist px-0 py-12 md:px-0"
              >
                <div className="grid gap-10 lg:grid-cols-12">
                  {/* Rail */}
                  <div className="lg:col-span-3">
                    <p className="label text-aqua-2">{study.index}</p>
                    <p className="font-display mt-6 text-2xl tracking-[-0.03em]">
                      {study.sector}
                    </p>
                    <p className="label mt-3 text-ink-3">{study.location}</p>
                    <p className="label mt-1.5 text-ink-3">{study.year}</p>

                    <div className="mt-8 border border-line bg-mist-2 p-5">
                      <p className="font-display text-3xl leading-none tracking-[-0.03em] text-petrol">
                        {study.metric.value}
                      </p>
                      <p className="label mt-3 text-ink-3">
                        {study.metric.label}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="lg:col-span-9">
                    <h3 className="font-display t-2">{study.title}</h3>

                    <dl className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
                      <div className="bg-mist p-6">
                        <dt className="label text-amber">The challenge</dt>
                        <dd className="mt-4 text-sm leading-relaxed text-ink-2">
                          {study.challenge}
                        </dd>
                      </div>
                      <div className="bg-mist p-6">
                        <dt className="label text-ink-3">What we did</dt>
                        <dd className="mt-4 text-sm leading-relaxed text-ink-2">
                          {study.approach}
                        </dd>
                      </div>
                      <div className="bg-mist p-6">
                        <dt className="label text-petrol">The outcome</dt>
                        <dd className="mt-4 text-sm leading-relaxed text-ink-2">
                          {study.outcome}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.services.map((s) => (
                        <span
                          key={s}
                          className="label border border-line px-2.5 py-1.5 text-ink-3"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- testimonials */}
      <section className="grain relative overflow-hidden border-y border-line band-deep text-mist">
        <div className="substrate-grid-inv absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="In their words"
            title="What clients say afterwards"
            intro="Attributed by role and sector at our clients' request. Full references are available on request for serious enquiries."
            tone="dark"
          />

          <ul className="mt-16 grid gap-px border border-line-inv bg-line-inv md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.org} delay={i * 80}>
                <figure className="flex h-full flex-col justify-between bg-petrol p-9">
                  <blockquote className="font-display text-2xl leading-[1.25] tracking-[-0.02em]">
                    <span aria-hidden className="text-aqua">
                      &ldquo;
                    </span>
                    {t.quote}
                    <span aria-hidden className="text-aqua">
                      &rdquo;
                    </span>
                  </blockquote>
                  <figcaption className="mt-10 border-t border-line-inv pt-5">
                    <p className="label text-aqua">{t.role}</p>
                    <p className="mt-2.5 text-sm text-mist/60">{t.org}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ contract register */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="Register"
          title="Contracts and engagements"
          intro="A running record of the work. Client identities are withheld; scope, sector and period are not."
        />

        <Reveal className="mt-14">
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">
                Register of contracts and engagements completed by Epitome
                Quality Group
              </caption>
              <thead>
                <tr className="border-b border-line bg-mist-2">
                  {["Ref", "Scope of works", "Sector", "Region", "Year", "Status"].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="label px-5 py-4 text-ink-3"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {contracts.map((c) => (
                  <tr
                    key={c.ref}
                    className="border-b border-line last:border-0 transition-colors hover:bg-mist-2/70"
                  >
                    <td className="label px-5 py-4 whitespace-nowrap text-petrol">
                      {c.ref}
                    </td>
                    <td className="px-5 py-4 text-sm font-medium text-ink">
                      {c.scope}
                    </td>
                    <td className="px-5 py-4 text-sm text-ink-3">{c.sector}</td>
                    <td className="px-5 py-4 text-sm text-ink-3">{c.region}</td>
                    <td className="label px-5 py-4 text-ink-3">{c.year}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`label inline-flex items-center gap-2 border px-2.5 py-1.5 ${
                          c.status === "Completed"
                            ? "border-petrol/30 text-petrol"
                            : "border-amber/40 text-amber"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`h-1.5 w-1.5 rounded-full ${
                            c.status === "Completed" ? "bg-aqua-2" : "bg-amber"
                          }`}
                        />
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <CtaBand
        eyebrow="Your turn"
        title={
          <>
            Bring us the
            <br />
            awkward one.
          </>
        }
        body="The engagements that go best are the ones where something has already gone wrong. Tell us what is happening and we will tell you what it will take to fix it."
      />
    </>
  );
}
