import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Epitome Quality Group — call ${site.phoneDisplay} or email ${site.email}. Quality control consultancy and QA labour hire across Victoria.`,
};

const reasons = [
  {
    k: "Testing & analysis",
    v: "Micro, chemical, shelf life or environmental work you need scoped and priced.",
  },
  {
    k: "Systems & audits",
    v: "A HACCP plan, an internal audit program, or a certification audit you are preparing for.",
  },
  {
    k: "Labour hire",
    v: "A QA or QC role you need filled — for a shift, a season or permanently.",
  },
  {
    k: "Something urgent",
    v: "A hold decision, a customer complaint or an inspection. Call rather than email.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="grain bloom relative overflow-hidden border-b border-line">
        <div className="substrate-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 pt-20 pb-16 md:pt-28 md:pb-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label label-tick anim-rise text-ink-3">Contact</p>
              <h1
                className="font-display t-hero anim-rise mt-7"
                style={{ animationDelay: "80ms" }}
              >
                Let&rsquo;s talk
                <br />
                about your
                <br />
                <span className="swash">product.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pt-6">
              <div className="anim-rise" style={{ animationDelay: "180ms" }}>
                <p className="lede">
                  Call for anything urgent. Email or use the form for scoping,
                  quotes and labour hire briefs.
                </p>

                <a
                  href={site.phoneHref}
                  className="font-display mt-10 block text-5xl tracking-[-0.04em] text-petrol transition-opacity hover:opacity-70 md:text-6xl"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.emailHref}
                  className="link-draw mt-4 inline-block text-lg text-ink-2"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- form + panel */}
      <section className="mx-auto max-w-[88rem] px-6 py-20 md:py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display t-2">Send an enquiry</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-2">
                The more you tell us up front, the more useful our first reply
                will be. Product, market, standard, deadline.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <EnquiryForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={140}>
              {/* Business card block */}
              <div className="grain relative overflow-hidden border border-line band-deep p-9 text-mist">
                <div
                  className="substrate-grid-inv absolute inset-0 opacity-60"
                  aria-hidden
                />
                <div className="relative">
                  <Mark className="h-11 w-11 text-mist" />
                  <p className="font-display mt-8 text-2xl tracking-[-0.03em]">
                    {site.name}
                  </p>
                  <p className="label mt-3 text-aqua">{site.tagline}</p>

                  <dl className="mt-8 space-y-5 border-t border-line-inv pt-7">
                    <div>
                      <dt className="label text-mist/45">Phone</dt>
                      <dd className="mt-2">
                        <a href={site.phoneHref} className="link-draw text-mist">
                          {site.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-mist/45">Email</dt>
                      <dd className="mt-2">
                        <a
                          href={site.emailHref}
                          className="link-draw break-all text-mist"
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-mist/45">Chief Executive</dt>
                      <dd className="mt-2 text-mist">{site.ceo}</dd>
                    </div>
                    <div>
                      <dt className="label text-mist/45">ABN</dt>
                      <dd className="mt-2 text-mist">{site.abn}</dd>
                    </div>
                    <div>
                      <dt className="label text-mist/45">Service area</dt>
                      <dd className="mt-2 text-mist">{site.region}</dd>
                    </div>
                    <div>
                      <dt className="label text-mist/45">Hours</dt>
                      <dd className="mt-2 text-mist">{site.hours}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {reasons.map((r) => (
                  <div key={r.k} className="py-5">
                    <dt className="label text-aqua-2">{r.k}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink-2">
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
