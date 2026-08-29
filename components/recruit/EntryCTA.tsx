import Link from "next/link";
import Reveal from "@/components/recruit/Reveal";

export default function EntryCTA() {
  return (
    <section className="bg-[var(--color-bordeaux)] py-16 md:py-24">
      <Reveal className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col items-center text-center">
        <h2 className="font-display-ja text-xl md:text-3xl font-medium tracking-wide text-white leading-relaxed">
          あなたの視点が、次のブランドをつくる。
        </h2>
        <Link
          href="/entry"
          className="group mt-8 inline-flex items-center gap-2 h-14 px-10 rounded-full bg-white text-[var(--color-bordeaux)] text-sm md:text-base font-semibold tracking-[0.08em] transition-colors duration-300 hover:bg-[var(--color-section-gray)]"
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
