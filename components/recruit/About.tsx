import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import Reveal from "@/components/recruit/Reveal";

// Each paragraph is pre-split (lib/content/about.ts) into "meaning unit"
// chunks. On PC each chunk becomes its own inline-block + nowrap box, so a
// line can only break BETWEEN chunks, never inside one — e.g. "コンテンツ
// 制作" can't split as "コンテンツ｜制作" even though the browser is free
// to wrap right before or after that whole chunk. On SP the chunks fall
// back to plain inline text and wrap freely within themselves too.
function renderChunkedParagraph(chunks: string[]) {
  return chunks.map((chunk, i) => (
    <span key={i} className="md:inline-block md:whitespace-nowrap">
      {chunk}
    </span>
  ));
}

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
        <div className="max-w-[650px]">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--color-bordeaux)] md:text-[12px]">
            {aboutContent.label}
          </p>
          <h2 className="font-display-ja mt-4 text-[28px] font-medium leading-tight tracking-[0.02em] text-[var(--color-navy)] md:text-[35px] lg:text-[41px]">
            <span className="block">{aboutContent.titleLine1}</span>
            <span className="block">{aboutContent.titleLine2}</span>
          </h2>
          <div className="mt-6 space-y-[6px]">
            {aboutContent.bodyParagraphChunks.map((chunks, i) => (
              <p
                key={i}
                className="text-jp-flow text-[13px] font-normal leading-[1.95] tracking-[0.02em] text-[#555555] md:text-[14px]"
              >
                {renderChunkedParagraph(chunks)}
              </p>
            ))}
          </div>
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
