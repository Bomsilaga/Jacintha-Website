import Link from "next/link";
import Reveal from "./Reveal";
import { standards, site } from "@/lib/site";

/* -------------------------------------------------------- section head ---- */

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-mist/55" : "text-ink-3";
  const body = tone === "dark" ? "text-mist/70" : "text-ink-2";

  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`label ${align === "left" ? "label-tick" : ""} ${muted}`}>
        {eyebrow}
      </p>
      <h2 className="font-display t-1 mt-6">{title}</h2>
      {intro ? <p className={`lede mt-6 ${body}`}>{intro}</p> : null}
    </Reveal>
  );
}

/* ----------------------------------------------------- standards strip ---- */

export function StandardsMarquee() {
  const row = [...standards, ...standards];

  return (
    <section
      aria-label="Standards and frameworks we work to"
      className="overflow-hidden border-y border-line bg-mist-2 py-5"
    >
      <div className="flex w-max anim-marquee">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label flex shrink-0 items-center gap-8 px-8 text-ink-3"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-aqua-2" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ cta band ---- */

export function CtaBand({
  eyebrow = "Next step",
  title = (
    <>
      Tell us what you make.
      <br />
      We&rsquo;ll tell you what it needs.
    </>
  ),
  body = "A first conversation costs nothing and usually saves a lot. Send us your product range and current documentation, and we will come back with a scope, a timeline and a fixed price.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="grain grain-inv relative overflow-hidden band-deep text-mist">
      <div className="substrate-grid-inv absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-aqua)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[88rem] gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
        <div className="md:col-span-7">
          <Reveal>
            <p className="label label-tick text-aqua">{eyebrow}</p>
            <h2 className="font-display t-1 mt-6">{title}</h2>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pt-4">
          <Reveal delay={120}>
            <p className="text-[1.05rem] leading-relaxed text-mist/70">{body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-aqua">
                Request a scope
              </Link>
              <a
                href={site.phoneHref}
                className="btn border-mist/40 text-mist hover:border-mist hover:bg-mist hover:text-petrol"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- page hero ----- */

export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  meta?: readonly { label: string; value: string }[];
}) {
  return (
    <section className="grain bloom relative overflow-hidden border-b border-line">
      <div className="substrate-grid absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[88rem] px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:px-10">
        <p className="label label-tick anim-rise text-ink-3">{eyebrow}</p>
        <h1
          className="font-display t-hero anim-rise mt-7 max-w-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        <p
          className="lede anim-rise mt-8 max-w-2xl"
          style={{ animationDelay: "160ms" }}
        >
          {intro}
        </p>

        {meta ? (
          <dl
            className="anim-rise mt-14 grid gap-px border border-line bg-line sm:grid-cols-3"
            style={{ animationDelay: "240ms" }}
          >
            {meta.map((m) => (
              <div key={m.label} className="bg-mist px-6 py-6">
                <dt className="label text-ink-3">{m.label}</dt>
                <dd className="font-display mt-3 text-2xl tracking-[-0.03em]">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
