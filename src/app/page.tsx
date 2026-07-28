import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroMedia, { hasHeroPhoto } from "@/components/HeroMedia";
import { CtaBand, SectionHead, StandardsMarquee } from "@/components/Bits";
import { industries, principles, process, roles, services, site } from "@/lib/site";
import { caseStudies, contracts, testimonials } from "@/lib/work";

export default function Home() {
  const featured = caseStudies.slice(0, 3);
  const completed = contracts.filter((c) => c.status === "Completed").length;

  return (
    <>
      {/* ------------------------------------------------------------ hero
          Split hero: copy on the left, the laboratory photograph bleeding to
          the right edge. Falls back to the report panel until the photo is
          added — see HeroMedia. */}
      <section className="grain bloom relative overflow-hidden">
        <div className="substrate-grid absolute inset-0" aria-hidden />

        <div
          className={`relative mx-auto grid max-w-[88rem] items-center gap-12 px-6 pt-14 pb-16 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pt-20 lg:pb-20 ${
            hasHeroPhoto ? "lg:pr-0" : ""
          }`}
        >
          <div className={hasHeroPhoto ? "lg:col-span-6" : "lg:col-span-7"}>
            <p className="label label-tick anim-rise text-ink-3">
              {site.region} · ABN {site.abn}
            </p>

            <h1
              className="font-display t-hero anim-rise mt-8"
              style={{ animationDelay: "70ms" }}
            >
              Quality
              <br />
              control you
              <br />
              <span className="swash">can prove.</span>
            </h1>

            <p
              className="lede anim-rise mt-9 max-w-xl"
              style={{ animationDelay: "150ms" }}
            >
              Epitome Quality Group is a Victorian quality control consultancy for
              the food industry. We test the product, build the systems that keep
              it compliant, and place the QA people who run those systems on your
              floor.
            </p>

            <div
              className="anim-rise mt-11 flex flex-wrap gap-3"
              style={{ animationDelay: "230ms" }}
            >
              <Link href="/contact" className="btn btn-solid">
                Request a quote
              </Link>
              <Link href="/labour-hire" className="btn btn-ghost">
                Need QA staff?
              </Link>
            </div>

            <div
              className="anim-rise mt-16 grid max-w-xl gap-px border border-line bg-line sm:grid-cols-3"
              style={{ animationDelay: "300ms" }}
            >
              {[
                { k: "Coverage", v: "All of Victoria" },
                { k: "Contracts", v: `${completed}+ delivered` },
                { k: "Reporting", v: "Plain English" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="flex flex-col justify-between bg-mist px-5 py-5"
                >
                  <p className="label text-ink-3">{item.k}</p>
                  <p className="font-display mt-3 text-xl tracking-[-0.02em]">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              hasHeroPhoto
                ? "lg:col-span-6 lg:-mr-10 lg:h-full"
                : "lg:col-span-5 lg:pt-10"
            }
          >
            <div
              className="anim-rise lg:h-full"
              style={{ animationDelay: "380ms" }}
            >
              <HeroMedia />
            </div>
            {hasHeroPhoto ? null : (
              <p className="label mt-6 text-center text-ink-3 lg:text-right">
                Illustrative report layout
              </p>
            )}
          </div>
        </div>
      </section>

      <StandardsMarquee />

      {/* -------------------------------------------------------- position */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label label-tick text-ink-3">01 / The problem</p>
              <h2 className="font-display t-1 mt-6">
                Compliance fails in the gap between the folder and the floor.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <Reveal delay={100}>
              <p className="lede">
                Most food businesses do not fail an audit because they lack a
                food safety plan. They fail because the plan describes a
                different factory to the one their team works in — or because
                the one person who understood it left in March.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                We close both gaps. We walk your process before we write a word,
                we test where the risk actually sits, and we document it in
                language a production supervisor can act on at 5am. When the
                system needs hands to run it, we place people we have screened
                ourselves rather than leaving you to a general recruiter.
              </p>

              <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
                {principles.map((p) => (
                  <li key={p.title} className="bg-mist p-6">
                    <h3 className="font-display text-lg tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-3">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- services */}
      <section className="border-y border-line bg-mist-2">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="02 / Capability"
            title={
              <>
                Seven services. One
                <br />
                accountable result.
              </>
            }
            intro="Engage us for a single test, hand us the whole quality function, or take a QA officer on hire. Either way you get one named contact and one report you can act on."
          />

          <ul className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal as="li" key={service.id} delay={i * 60}>
                <Link
                  href={
                    service.id === "qa-labour-hire"
                      ? "/labour-hire"
                      : `/services#${service.id}`
                  }
                  className="card group flex h-full flex-col bg-mist p-8 transition-colors duration-300 hover:bg-petrol"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="label text-aqua-2 transition-colors group-hover:text-aqua">
                      {service.index}
                    </span>
                    <span
                      aria-hidden
                      className="text-ink-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-mist"
                    >
                      →
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-2xl tracking-[-0.03em] transition-colors group-hover:text-mist">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-3 transition-colors group-hover:text-mist/70">
                    {service.summary}
                  </p>
                </Link>
              </Reveal>
            ))}

            {/* Grid-completing tile so the 7-item row never leaves a hole */}
            <Reveal as="li" delay={420}>
              <div className="flex h-full flex-col justify-between bg-petrol p-8 text-mist">
                <p className="label text-aqua">Not sure what you need?</p>
                <div>
                  <p className="font-display mt-10 text-2xl tracking-[-0.03em]">
                    Send us your product range and we will scope it.
                  </p>
                  <Link href="/contact" className="btn btn-aqua mt-8">
                    Get in touch
                  </Link>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------- labour hire */}
      <section className="grain relative overflow-hidden">
        <div className="substrate-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="03 / Labour hire"
                title={
                  <>
                    We also supply the
                    <br />
                    people who run it.
                  </>
                }
                intro="A consultancy that screens QA candidates is a very different proposition to a recruiter who screens résumés. We ask technical questions because we understand the answers."
              />
              <Reveal delay={140}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/labour-hire" className="btn btn-solid">
                    Labour hire
                  </Link>
                  <Link href="/contact" className="btn btn-ghost">
                    Brief a role
                  </Link>
                </div>
              </Reveal>
            </div>

            <ul className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {roles.map((role, i) => (
                <Reveal as="li" key={role.title} delay={i * 60}>
                  <div className="card h-full bg-mist p-7">
                    <p className="label text-aqua-2">
                      R/{String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-6 text-xl tracking-[-0.03em]">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-3">
                      {role.blurb}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- success stories */}
      <section className="border-y border-line bg-mist-2">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="04 / Success stories"
            title="What changed afterwards"
            intro="Engagements are described by sector and region rather than by client name. Full references are available on request."
          />

          <ul className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-3">
            {featured.map((study, i) => (
              <Reveal as="li" key={study.id} delay={i * 80}>
                <Link
                  href={`/work#${study.id}`}
                  className="card group flex h-full flex-col bg-mist-2 p-8 transition-colors duration-300 hover:bg-mist"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="label text-aqua-2">{study.index}</span>
                    <span className="label text-ink-3">{study.year}</span>
                  </div>

                  <p className="font-display mt-10 text-4xl leading-none tracking-[-0.03em] text-petrol">
                    {study.metric.value}
                  </p>
                  <p className="label mt-3 text-ink-3">{study.metric.label}</p>

                  <h3 className="font-display mt-8 text-xl leading-snug tracking-[-0.02em]">
                    {study.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-3">
                    {study.outcome}
                  </p>

                  <p className="label mt-7 flex items-center gap-2 border-t border-line pt-5 text-petrol">
                    {study.sector}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-12 text-center">
            <Link href="/work" className="btn btn-ghost">
              All work &amp; contracts
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ testimonials */}
      <section className="grain grain-inv relative overflow-hidden band-deep text-mist">
        <div className="substrate-grid-inv absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="05 / In their words"
            title="Clients, after the fact"
            tone="dark"
          />

          <ul className="mt-14 grid gap-px border border-line-inv bg-line-inv md:grid-cols-2">
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

      {/* --------------------------------------------------------- process */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="06 / Method"
          title="Chain of custody, start to finish."
          intro="Every engagement runs the same four stages, so you always know where your samples are and what happens next."
        />

        <ol className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 90}>
              <div className="card relative h-full bg-mist p-8">
                <span
                  className="absolute top-0 left-0 h-px bg-aqua-2"
                  style={{ width: `${((i + 1) / process.length) * 100}%` }}
                  aria-hidden
                />
                <p className="label text-ink-3">{step.step}</p>
                <h3 className="font-display mt-8 text-3xl tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-3">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------ industries */}
      <section className="grain relative overflow-hidden border-y border-line bg-mist-2">
        <div className="substrate-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow="07 / Sectors"
                title="Who we work with"
                intro="Different products, different hazards, different regulators. We adjust the method to the matrix."
              />
              <Reveal delay={140}>
                <Link href="/industries" className="btn btn-ghost mt-9">
                  All industries
                </Link>
              </Reveal>
            </div>

            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-8">
              {industries.map((industry, i) => (
                <Reveal as="li" key={industry.title} delay={i * 60}>
                  <div className="card h-full bg-mist-2 p-7">
                    <h3 className="font-display text-xl tracking-[-0.03em]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-3">
                      {industry.blurb}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="label border border-line px-2.5 py-1.5 text-ink-3"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- quote */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="label text-ink-3">From the CEO</p>
          <blockquote className="font-display mt-8 text-3xl leading-[1.15] tracking-[-0.03em] md:text-5xl">
            &ldquo;A test result is only worth what someone does with it. Our job
            is to make sure the person on the floor knows what to do
            <span className="text-petrol"> before</span>{" "}
            the problem leaves the building.&rdquo;
          </blockquote>
          <footer className="label mt-10 text-ink-3">
            {site.ceo} — {site.ceoTitle}, {site.name}
          </footer>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
