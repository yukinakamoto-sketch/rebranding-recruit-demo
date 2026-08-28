"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { peopleCards, peopleCopy, type PersonCard } from "@/lib/content/people";
import Reveal from "@/components/recruit/Reveal";

// Frame PNGs are the shape of truth now — object-fit:fill deliberately
// conforms each frame to the shared card aspect ratio (below) so all 5
// cards stay exactly the same height, even though the two source PNGs
// differ very slightly in their own native aspect ratio.
const frameSrc: Record<PersonCard["colorVariant"], string> = {
  bordeaux: "/images/recruit/people/frame-bordeaux.png",
  navy: "/images/recruit/people/frame-navy.png",
};

// Card aspect ratio taken from the bordeaux frame's native size (948x1659).
const CARD_ASPECT = "aspect-[948/1659]";

function PeopleCard({ person }: { person: PersonCard }) {
  return (
    <Link href="/people" className="group block h-full">
      <div className={`relative w-full overflow-hidden ${CARD_ASPECT}`}>
        {/* 1. Photo — behind everything */}
        <Image
          src={person.photo.src}
          alt={person.photo.alt}
          fill
          sizes="(max-width: 768px) 80vw, 20vw"
          className="z-[1] object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: person.photo.position ?? "center center" }}
        />
        {/* 2. Frame overlay — the card's actual visible shape */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frameSrc[person.colorVariant]}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-fill"
        />
        {/* 3. Text — on top of the frame's color face */}
        <div className="absolute inset-x-5 bottom-6 z-[3] flex flex-col justify-between text-white">
          <div>
            <p className="text-[11px] font-semibold leading-[1.3] tracking-[0.13em]">{person.labelEn}</p>
            <p className="mt-1 text-[13px] font-medium leading-[1.5]">{person.labelJa}</p>
            <p className="mt-1 text-[11px] font-normal text-white/85">{person.year}</p>
          </div>
          <p className="mt-8 whitespace-pre-line text-[14px] font-medium leading-[1.7]">{person.message}</p>
        </div>
      </div>
    </Link>
  );
}

export default function People() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-section-gray)] pt-16 pb-20 md:pt-24 md:pb-[188px]">
      {/* Corner wedges: bordeaux (left) / navy (right), asymmetric — right is intentionally larger to visually hand off to the navy RECRUIT section below. Sizes: 64x54/94x58 on mobile, then clamp()-scaled from tablet up (≈105x92 @1280, ≈118x104 @1440, capped by the clamp max above ~1920) */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[54px] w-[64px] bg-[var(--color-bordeaux)] sm:h-[clamp(96px,7vw,120px)] sm:w-[clamp(110px,8.2vw,145px)]"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[58px] w-[94px] bg-[var(--color-navy)] sm:h-[clamp(100px,7.3vw,128px)] sm:w-[clamp(165px,12.4vw,220px)]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      <Reveal className="relative z-[2] mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-[var(--color-bordeaux)]">
              {peopleCopy.eyebrow}
            </p>
            <h2 className="font-display-ja mt-4 text-[38px] font-normal leading-[1.4] tracking-[0.08em] text-[#151515] sm:text-[44px] lg:text-[52px]">
              {peopleCopy.heading}
            </h2>
            <span aria-hidden className="mt-3 block h-[2px] w-10 bg-[var(--color-bordeaux)]" />
          </div>
          <p className="max-w-[410px] text-[12px] leading-[1.9] tracking-[0.04em] text-[#555555] md:text-right">
            {peopleCopy.lead}
          </p>
        </div>

        {/* Desktop/tablet: tight non-scroll row of 5 */}
        <div className="mt-4 hidden gap-[10px] sm:flex">
          {peopleCards.map((person) => (
            <div key={person.id} className="flex-1">
              <PeopleCard person={person} />
            </div>
          ))}
        </div>

        {/* Mobile: Swiper slider, next card peeking */}
        <div className="mt-4 sm:hidden">
          <Swiper spaceBetween={10} slidesPerView={1.15}>
            {peopleCards.map((person) => (
              <SwiperSlide key={person.id}>
                <PeopleCard person={person} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 flex justify-center md:mt-8">
          <Link
            href={peopleCopy.ctaHref}
            className="group inline-flex items-center gap-2 border border-[var(--color-navy)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-colors duration-300 hover:bg-[var(--color-section-gray)]"
          >
            {peopleCopy.ctaLabel}
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              —→
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
