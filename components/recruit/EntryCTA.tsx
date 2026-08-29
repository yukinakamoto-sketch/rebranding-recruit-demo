import Link from "next/link";
import Reveal from "@/components/recruit/Reveal";

export default function EntryCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bordeaux)] py-[60px] md:py-[90px]">
      {/* One very thin diagonal line, matching the same quiet gesture used
          in ABOUT — kept faint enough to read as texture, not decoration. */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[26%] h-px w-[50%] origin-right -rotate-[6deg] bg-white opacity-[0.1]"
      />

      <Reveal className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center md:px-10">
        <h2 className="font-display-ja text-[22px] font-medium leading-relaxed tracking-[0.03em] text-white md:text-[30px] lg:text-[35px]">
          あなたの視点が、次のブランドをつくる。
        </h2>
        <Link
          href="/entry"
          className="group mt-8 inline-flex h-[60px] items-center gap-2 rounded-[4px] bg-white px-11 text-sm font-semibold tracking-[0.08em] text-[var(--color-bordeaux)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[var(--color-section-gray)] md:text-base"
        >
          ENTRY
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
