import Link from "next/link";
import Mark from "./Mark";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain grain-inv relative overflow-hidden bg-ink text-bone">
      <div className="substrate-grid-inv absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-14 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-10 w-10 text-bone" />
              <span className="font-display text-2xl tracking-[-0.03em]">
                Epitome Quality Group
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-bone/65">
              Quality control consultancy and specialist QA labour hire for
              producers, processors and food service operators across{" "}
              {site.region}.
            </p>
            <a
              href={site.phoneHref}
              className="font-display mt-8 block text-4xl text-agar transition-opacity hover:opacity-70"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="link-draw mt-2 inline-block text-bone/80"
            >
              {site.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="label label-tick text-bone/45">Navigate</p>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw text-bone/80 hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label label-tick text-bone/45">Services</p>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={
                      service.id === "qa-labour-hire"
                        ? "/labour-hire"
                        : `/services#${service.id}`
                    }
                    className="link-draw text-bone/80 hover:text-bone"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line-inv py-8">
          <p className="label text-bone/45">{site.legalLine}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <p className="label text-bone/45">
              © {year} {site.legalEntity}
            </p>
            <p className="label text-bone/45 md:text-center">ABN {site.abn}</p>
            <p className="label text-bone/45 md:text-right">
              {site.ceo} · {site.ceoTitle}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
