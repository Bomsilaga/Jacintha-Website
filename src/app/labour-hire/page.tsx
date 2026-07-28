import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/Bits";
import {
  labourHireAssurances,
  labourHireSteps,
  roles,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "QA & QC labour hire",
  description:
    "Specialist quality assurance and quality control labour hire for Victorian food businesses — QA officers, food technologists, line QC inspectors and Food Safety Supervisors.",
};

export default function LabourHirePage() {
  return (
    <>
      <PageHero
        eyebrow="Labour hire"
        title={
          <>
            Quality people,
            <br />
            <span className="swash">screened</span> by people
            <br />
            who do the work.
          </>
        }
        intro="We are a quality control consultancy first. That is exactly why our labour hire is different — we can assess whether a QA candidate is actually any good, because we do the job ourselves every week."
        meta={[
          { label: "Engagement", value: "Temp to permanent" },
          { label: "Coverage", value: site.regionShort },
          { label: "Notice", value: "Short notice cover" },
        ]}
        image={{
          src: "/qa-analyst.jpg",
          alt: "An Epitome Quality Group analyst inspecting a culture plate while recording the result on a clipboard",
        }}
      />

      {/* --------------------------------------------------- the argument */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label label-tick text-ink-3">Why us</p>
              <h2 className="font-display t-1 mt-6">
                A generalist recruiter cannot tell a good QA officer from a
                confident one.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <Reveal delay={100}>
              <p className="lede">
                Quality roles are unusually easy to interview well for and
                unusually hard to perform well in. The gap only shows up when
                something goes wrong on a Friday afternoon.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                Because we run food safety programs, shelf life studies and
                audits ourselves, we can put technical questions to a candidate
                and understand the answers. We know what a competent hold
                decision looks like, what a real corrective action reads like,
                and whether someone has genuinely run an environmental
                monitoring program or has only watched one being run.
              </p>
              <p className="mt-6 leading-relaxed text-ink-2">
                Placements are also backed by our consultancy team. If the person
                on your site hits something outside their depth, they have
                somewhere to go that is not your production manager.
              </p>

              <Link href="/contact" className="btn btn-solid mt-9">
                Discuss a role
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ roles */}
      <section className="border-y border-line bg-mist-2">
        <div className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <SectionHead
            eyebrow="Roles we place"
            title="From line inspector to interim QA manager"
            intro="Single shifts, seasonal peaks, leave cover, or a permanent hire we place and then step away from."
          />

          <ul className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <Reveal as="li" key={role.title} delay={i * 70}>
                <div className="card group flex h-full flex-col bg-mist-2 p-8 transition-colors duration-300 hover:bg-petrol">
                  <p className="label text-aqua-2">
                    R/{String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-9 text-2xl tracking-[-0.03em] transition-colors group-hover:text-mist">
                    {role.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-3 transition-colors group-hover:text-mist/70">
                    {role.blurb}
                  </p>
                  <p className="label mt-7 border-t border-line pt-5 text-ink-3 transition-colors group-hover:border-line-inv group-hover:text-aqua">
                    {role.basis}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------- process */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <SectionHead
          eyebrow="How placement works"
          title="Brief on Monday, on site by the week after."
          intro="Timelines depend on the role and the shift pattern, but the sequence never changes."
        />

        <ol className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {labourHireSteps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 90}>
              <div className="card relative h-full bg-mist p-8">
                <span
                  className="absolute top-0 left-0 h-px bg-aqua-2"
                  style={{
                    width: `${((i + 1) / labourHireSteps.length) * 100}%`,
                  }}
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

      {/* ------------------------------------------------------ assurances */}
      <section className="grain relative overflow-hidden border-y border-line bg-mist-2">
        <div className="substrate-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead
                eyebrow="What you get"
                title="Four things we take off your desk"
              />
            </div>

            <dl className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {labourHireAssurances.map((a, i) => (
                <Reveal key={a.k} delay={i * 70}>
                  <div className="card h-full bg-mist-2 p-8">
                    <dt className="font-display text-xl tracking-[-0.03em]">
                      {a.k}
                    </dt>
                    <dd className="mt-4 text-sm leading-relaxed text-ink-3">
                      {a.v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ candidates */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-14 border border-line bg-mist p-10 md:p-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="label label-tick text-ink-3">For candidates</p>
              <h2 className="font-display t-2 mt-6">
                Looking for QA work in Victoria?
              </h2>
              <p className="mt-6 leading-relaxed text-ink-2">
                We are always interested in food technologists, QA officers,
                line inspectors and sanitation leads — including people early in
                their career who have the qualification but are struggling to
                get the first Australian placement.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <ul className="space-y-4">
                {[
                  "Send a CV and your right-to-work status",
                  "Tell us your available shifts and travel radius",
                  "Note any food safety or HACCP training held",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-line pt-4 text-sm text-ink-2"
                  >
                    <span
                      className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 bg-aqua-2"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={site.emailHref} className="btn btn-ghost mt-9">
                Send your CV
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Labour hire"
        title={
          <>
            Short a person
            <br />
            this week?
          </>
        }
        body="Tell us the role, the shift pattern and the standard you work to. We will tell you honestly whether we can cover it and when."
      />
    </>
  );
}
