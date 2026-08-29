import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import Reveal from "@/components/recruit/Reveal";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-section-gray)] py-16 md:py-24">
      {/* One quiet diagonal line, echoing HERO's line decoration without
          copying it — a low-opacity bordeaux stroke rising left to right,
          just enough to say "the brand's line continues through the middle
          of the page" without becoming its own decoration. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[22%] h-px w-[55%] origin-left -rotate-[7deg] bg-[var(--color-bordeaux)] opacity-[0.15]"
      />

      <Reveal className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-bordeaux)] md:text-[12px]">
            {aboutContent.label}
          </p>
          <h2 className="font-display-ja mt-4 text-[28px] font-medium leading-tight tracking-[0.02em] text-[var(--color-navy)] md:text-[35px] lg:text-[41px]">
            <span className="block">{aboutContent.titleLine1}</span>
            <span className="block">{aboutContent.titleLine2}</span>
          </h2>
          <p className="mt-6 text-[13px] font-normal leading-[1.95] tracking-[0.02em] text-[#555555] md:text-[14px] whitespace-pre-line">
            {aboutContent.body}
          </p>
        </div>

        <div className="grid grid-cols-[1.1fr_1fr] gap-3 md:gap-4">
          <div className="relative col-span-1 row-span-2 aspect-[9/11] overflow-hidden">
            <Image
              src={aboutContent.images.large.src}
              alt={aboutContent.images.large.alt}
              fill
              unoptimized
              className="object-cover"
              style={{ objectPosition: aboutContent.images.large.position }}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={aboutContent.images.small1.src}
              alt={aboutContent.images.small1.alt}
              fill
              unoptimized
              className="object-cover"
              style={{ objectPosition: aboutContent.images.small1.position }}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={aboutContent.images.small2.src}
              alt={aboutContent.images.small2.alt}
              fill
              unoptimized
              className="object-cover"
              style={{
                objectPosition: aboutContent.images.small2.position,
                filter: aboutContent.images.small2.filter,
              }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
