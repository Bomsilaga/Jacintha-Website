"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Contact ribbon — the details a prospective client scans for first */}
      <div className="hidden bg-petrol text-mist md:block">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-2 lg:px-10">
          <p className="label text-mist/70">
            ABN {site.abn} · {site.region}
          </p>
          <div className="label flex items-center gap-6">
            <a href={site.phoneHref} className="link-draw text-mist">
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="link-draw text-aqua">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow] duration-300 ${
          lifted
            ? "border-line bg-mist/92 shadow-[0_1px_30px_-18px_rgba(15,23,20,0.9)] backdrop-blur-md"
            : "border-transparent bg-mist/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-8 px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <Mark className="h-9 w-9 shrink-0 text-petrol transition-transform duration-500 group-hover:rotate-90" />
            <span className="leading-none">
              <span className="font-display block text-[1.15rem] font-semibold tracking-[-0.03em] text-petrol">
                Epitome Quality Group
              </span>
              <span className="label mt-1 block text-ink-3">
                Quality control &amp; QA hire
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 xl:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.href)}
                className={`label link-draw transition-colors ${
                  isActive(item.href)
                    ? "text-petrol"
                    : "text-ink-2 hover:text-petrol"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="btn btn-solid">
              {site.phoneDisplay}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="label flex items-center gap-3 border border-petrol px-4 py-3 text-petrol xl:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="flex h-3 w-4 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 bg-petrol text-mist xl:hidden"
      >
        <div className="substrate-grid-inv flex h-full flex-col justify-between gap-8 overflow-y-auto px-6 pt-28 pb-10">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-line-inv py-3.5 text-3xl text-mist"
                style={{ animation: `rise .5s ${i * 60}ms both` }}
              >
                <span className="label mr-4 align-middle text-aqua">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            <a
              href={site.phoneHref}
              className="btn btn-aqua w-full"
            >
              Call {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="label block text-mist/70">
              {site.email}
            </a>
            <p className="label text-mist/50">ABN {site.abn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
