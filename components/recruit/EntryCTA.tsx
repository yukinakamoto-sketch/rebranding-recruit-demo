import Link from "next/link";
import Reveal from "@/components/recruit/Reveal";

export default function EntryCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bordeaux)] py-16 md:py-[92px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 h-full w-px bg-white/10"
        style={{ transform: "rotate(8deg)" }}
      />
      <Reveal className="relative mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col items-center text-center">
        <h2 className="font-display-ja text-2xl md:text-[36px] font-medium tracking-[0.03em] text-white leading-relaxed">
          あなたの視点が、次のブランドをつくる。
        </h2>
        <Link
          href="/entry"
          className="group mt-9 inline-flex items-center gap-2 h-[52px] px-11 rounded-[4px] bg-white text-[var(--color-bordeaux)] text-sm md:text-base font-semibold tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-section-gray)]"
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
