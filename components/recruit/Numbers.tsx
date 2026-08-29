import type { ReactNode } from "react";
import { numberItems, numbersHeading } from "@/lib/content/numbers";
import Reveal from "@/components/recruit/Reveal";

const icons: Record<number, ReactNode> = {
  0: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h18M3 6h18M3 18h12" strokeLinecap="round" />
    </svg>
  ),
  1: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  ),
  2: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
};

export default function Numbers() {
  return (
    <section className="bg-white py-14 md:py-[84px]">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 className="font-display-ja text-lg md:text-xl font-semibold text-[var(--color-navy)]">
          {numbersHeading}
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(19,43,80,0.18)]">
          {numberItems.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 100}
              className="py-8 sm:py-2 sm:px-8 first:pl-0 sm:first:pl-0"
            >
              <div className="text-[var(--color-navy)]">{icons[i]}</div>
              <p className="mt-4 text-sm text-[#555555]">{item.label}</p>
              <p className="font-display-ja mt-2 text-[50px] leading-none font-semibold tracking-[0.01em] text-[var(--color-bordeaux)] md:text-[70px]">
                {item.value}
              </p>
              <p className="mt-3 text-xs md:text-sm text-[#555555]">{item.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
