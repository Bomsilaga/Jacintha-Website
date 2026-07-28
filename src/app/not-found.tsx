import Link from "next/link";
import Mark from "@/components/Mark";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grain bloom relative overflow-hidden">
      <div className="substrate-grid absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-[70vh] max-w-[88rem] flex-col justify-center px-6 py-24 lg:px-10">
        <Mark className="h-12 w-12 text-spruce" />
        <p className="label label-tick mt-10 text-ink-3">Error 404</p>
        <h1 className="font-display t-hero mt-6 max-w-4xl">
          Sample not found.
        </h1>
        <p className="lede mt-7 max-w-xl">
          The page you were after does not exist, or has been moved. Nothing has
          been lost — the chain of custody is intact.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-solid">
            Back to home
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
