"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { peopleCards, peopleCopy, type PersonCard } from "@/lib/content/people";
import Reveal from "@/components/recruit/Reveal";

function PeopleCard({ person }: { person: PersonCard }) {
  return (
    <Link
      href="/people"
      className="group block transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      {/* Containing block for the two absolute text blocks below. It has no
          size of its own beyond what the <Image> renders at — no shared
          aspect-ratio box, no `fill`/`object-contain` — so this box's edges
          are, pixel for pixel, the same as the visible card art's edges.
          Mobile (default): width:100% / height:auto, matching the Swiper
          slide's own width. Desktop row (sm:): a common fixed height so all
          5 cards line up visually despite each PNG's slightly different
          trimmed aspect ratio; width is left auto so it hugs whatever width
          that height produces for this particular image (never stretched
          or squashed). */}
      <div className="peopleCardVisual relative overflow-hidden sm:h-[clamp(560px,43vw,650px)]">
        {/* The finished card image IS the card — photo, diagonal frame, and
            color face are already baked in. Real width/height (each PNG's
            own trimmed size, see lib/content/people.ts) + no object-fit:
            the <img> renders at its native ratio, so the box above is an
            exact match for the art with zero letterbox padding. */}
        <Image
          src={person.cardImage.src}
          alt={person.cardImage.alt}
          width={person.cardImage.width}
          height={person.cardImage.height}
          sizes="(max-width: 768px) 78vw, 235px"
          className="block h-auto w-full sm:h-full sm:w-auto"
        />
        {/* Text — two independently positioned blocks, coordinates set via
            inline style against peopleCardVisual (the position:relative
            parent immediately above), which now exactly matches the
            rendered image. The meta block is top-anchored (top:58%,
            bottom:auto) and the copy block is bottom-anchored (bottom:8%,
            top:auto) — each sets only the one edge it cares about. */}
        <div
          className="pointer-events-none z-[1] text-white"
          style={{ position: "absolute", left: "6%", right: "6%", top: "63%", bottom: "auto" }}
        >
          <p className="font-semibold" style={{ fontSize: "12px", lineHeight: 1.15, letterSpacing: "0.1em" }}>
            {person.labelEn}
          </p>
          <p className="font-semibold" style={{ fontSize: "14px", lineHeight: 1.3, marginTop: "3px" }}>
            {person.labelJa}
          </p>
          <p className="font-normal text-white/85" style={{ fontSize: "11px", lineHeight: 1.3, marginTop: "3px" }}>
            {person.year}
          </p>
        </div>
        <div
          className="pointer-events-none z-[1] text-white"
          style={{ position: "absolute", left: "6%", right: "6%", bottom: "12%", top: "auto" }}
        >
          <p className="whitespace-pre-line font-semibold" style={{ fontSize: "16px", lineHeight: 1.5 }}>
            {person.message}
          </p>
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

        {/* Desktop/tablet: centered flex row, not a grid of equal-width
            columns — each card's width is left to its own trimmed image
            ratio (see PeopleCard's peopleCardVisual) instead of being
            stretched/squashed to a shared column width. */}
        <div className="mt-[30px] hidden items-start justify-center gap-[14px] sm:flex">
          {peopleCards.map((person) => (
            <PeopleCard key={person.id} person={person} />
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

        <div className="mt-9 flex justify-center">
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
