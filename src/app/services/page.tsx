import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, StandardsMarquee } from "@/components/Bits";
import { process, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Microbiological and chemical testing, HACCP and food safety plans, shelf life validation, audits and QA training for food businesses across Victoria.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Testing, systems
            <br />
            and the <span className="swash">evidence</span>
            <br />
            behind both.
          </>
        }
        intro="Take one service or the whole quality function. Scopes are fixed-price wherever the work allows, and every engagement finishes with a report your team can act on without a translator."
        meta={[
          { label: "Engagement", value: "Project or retained" },
          { label: "Pricing", value: "Fixed scope" },
          { label: "Coverage", value: site.regionShort },
        ]}
      />

      <StandardsMarquee />

      {/* Index rail + detail — an editorial contents page */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="label label-tick text-ink-3">Contents</p>
              <ol className="mt-6 space-y-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="link-draw flex gap-3 text-sm text-ink-2 hover:text-spruce"
                    >
                      <span className="label pt-1 text-agar-2">{s.index}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border border-line bg-bone-2 p-6">
                <p className="label text-ink-3">Not sure where to start?</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  Send us your product range and we will scope it for you.
                </p>
                <Link href="/contact" className="btn btn-ghost mt-5 w-full">
                  Get in touch
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <ul className="space-y-px bg-line">
              {services.map((service, i) => (
                <Reveal as="li" key={service.id} delay={i * 40}>
                  <article id={service.id} className="scroll-mt-32 bg-bone py-12">
                    <div className="flex items-baseline gap-5">
                      <span className="label text-agar-2">{service.index}</span>
                      <div className="rule flex-1" />
                    </div>

                    <h2 className="font-display t-2 mt-7">{service.title}</h2>
                    <p className="lede mt-5">{service.summary}</p>
                    <p className="mt-5 max-w-2xl leading-relaxed text-ink-3">
                      {service.detail}
                    </p>

                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 border-t border-line pt-3 text-sm text-ink-2"
                        >
                          <span
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-agar-2"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Method recap */}
      <section className="border-y border-line bg-bone-2">
        <div className="mx-auto max-w-[88rem] px-6 py-20 md:py-28 lg:px-10">
          <Reveal>
            <p className="label label-tick text-ink-3">How an engagement runs</p>
          </Reveal>
          <ol className="mt-10 grid gap-px border border-line bg-line md:grid-cols-4">
            {process.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 80}>
                <div className="h-full bg-bone-2 p-7">
                  <p className="label text-agar-2">{step.step}</p>
                  <h3 className="font-display mt-6 text-2xl tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-3">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Scoping"
        title={
          <>
            Send the product.
            <br />
            Get the scope.
          </>
        }
        body="Describe what you make and the standard you are being held to. We will come back with the tests that matter, what they cost and how long they take."
      />
    </>
  );
}
