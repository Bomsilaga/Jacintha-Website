import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import SpecimenCard from "./SpecimenCard";

/** Where the hero photograph is expected to live. */
export const HERO_IMAGE = "/hero-lab.jpg";

/**
 * Resolved once, at build time. Keeping the check here means the page never
 * ships a broken <img> if the photograph has not been added yet — it falls
 * back to the certificate-of-analysis panel instead.
 */
export const hasHeroPhoto = existsSync(
  path.join(process.cwd(), "public", HERO_IMAGE.replace(/^\//, "")),
);

export default function HeroMedia() {
  if (!hasHeroPhoto) {
    return (
      <div className="mx-auto max-w-md lg:max-w-none">
        <SpecimenCard />
      </div>
    );
  }

  return (
    <div className="relative h-[22rem] w-full overflow-hidden sm:h-[28rem] lg:h-full lg:min-h-[34rem]">
      <Image
        src={HERO_IMAGE}
        alt="Epitome Quality Group analysts examining a culture plate and recording results in a laboratory"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover object-center"
      />
      {/* Feathers the photograph into the page on large screens so it reads
          as one composition rather than a pasted-in rectangle. Kept narrow —
          a wider fade washed over the subject's hands and culture plate. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--color-mist) 0%, rgba(255,255,255,0) 16%)",
        }}
        aria-hidden
      />
    </div>
  );
}
