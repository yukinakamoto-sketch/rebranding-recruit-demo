import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import Reveal from "@/components/recruit/Reveal";

export default function About() {
  return (
    <section className="bg-[var(--color-section-gray)] py-16 md:py-24">
      <Reveal className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[var(--color-bordeaux)]">
            {aboutContent.label}
          </p>
          <h2 className="font-display-ja mt-4 text-[26px] font-medium leading-tight tracking-[0.02em] text-[var(--color-navy)] md:text-[32px] lg:text-[38px]">
            <span className="block">{aboutContent.titleLine1}</span>
            <span className="block">{aboutContent.titleLine2}</span>
          </h2>
          <p className="mt-6 text-[13px] font-normal leading-[1.9] tracking-[0.02em] text-[#555555] md:text-[14px] whitespace-pre-line">
            {aboutContent.body}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
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
