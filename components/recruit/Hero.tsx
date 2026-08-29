import Image from "next/image";
import { heroSlides, heroCopy } from "@/lib/content/hero";

// Terms in heroCopy.bodyMain that must not split mid-word on PC (a plain
// Japanese line-break can legally fall inside e.g. "デジ|タル戦略"). Wrapped
// in md:whitespace-nowrap only — SP still wraps normally.
const HERO_BODY_NOWRAP_TERMS = ["デジタル戦略", "企業の成長"];

function withProtectedTerms(text: string, terms: string[]) {
  const pattern = new RegExp(`(${terms.join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="md:whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-white">
      <div className="relative flex flex-col lg:h-[100svh] lg:min-h-[100svh] lg:flex-row">
        {/* Left: bordeaux copy panel — background image swappable via heroCopy.leftBackgroundImage, falls back to flat --color-bordeaux */}
        <div
          className="relative z-10 flex flex-col justify-between bg-[var(--color-bordeaux)] bg-cover bg-center bg-no-repeat px-6 py-10 sm:px-10 sm:py-12 lg:w-[38%] lg:shrink-0 lg:px-16 lg:py-16 xl:px-20"
          style={
            heroCopy.leftBackgroundImage
              ? { backgroundImage: `url(${heroCopy.leftBackgroundImage})` }
              : undefined
          }
        >
          {/* Invisible (not removed): the Header's own logo now carries this
              brand mark while the FV is showing, so this copy stays hidden to
              avoid a duplicate — kept in the DOM only to preserve the exact
              flex spacing/position of the headline below. */}
          <div className="hero-anim-eyebrow invisible" aria-hidden="true">
            <p className="text-sm font-semibold tracking-wide text-white sm:text-base">
              {heroCopy.eyebrowEn}
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-white/70">
              {heroCopy.eyebrowJa}
            </p>
          </div>

          <div className="mt-10 lg:mt-20">
            <h1 className="hero-anim-headline font-display-ja text-[clamp(38px,11vw,48px)] font-normal leading-[1.5] tracking-[0.08em] text-white lg:text-[clamp(48px,4.4vw,68px)]">
              {heroCopy.headlineLines.map((line, i) =>
                i === heroCopy.highlightIndex ? (
                  <span
                    key={line}
                    className="mt-2 inline-block w-fit bg-white text-[var(--color-bordeaux)]"
                    style={{ padding: "8px 18px 10px" }}
                  >
                    {line}
                  </span>
                ) : (
                  <span key={line} className="block">
                    {line}
                  </span>
                )
              )}
            </h1>

            <p className="text-jp-flow hero-anim-body font-body-ja mt-7 max-w-[380px] text-[13px] font-normal leading-[1.95] tracking-[0.06em] text-white/85">
              {withProtectedTerms(heroCopy.bodyMain, HERO_BODY_NOWRAP_TERMS)}
              <span className="md:whitespace-nowrap">{heroCopy.bodyEmphasis}</span>
            </p>
          </div>

          <div className="hero-anim-scroll mt-16 lg:mt-0">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-white/80">
              {heroCopy.scrollLabel}
            </p>
            <span aria-hidden className="mt-2 block h-px w-10 bg-white/60" />
          </div>
        </div>

        {/* Right: photo strip, 5 unequal-width slices */}
        <div className="relative h-[320px] overflow-hidden sm:h-[420px] lg:h-auto lg:flex-1">
          <div className="flex h-full">
            {heroSlides.map((slide, i) => {
              const slitDelay = 150 + i * 80;
              const decorDelay = slitDelay + 100;
              return (
                <div
                  key={slide.src}
                  className="hero-slit-reveal relative h-full w-full overflow-hidden"
                  style={{
                    flex: `${slide.weight} ${slide.weight} 0%`,
                    animationDelay: `${slitDelay}ms`,
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    unoptimized
                    priority={i === 0}
                    className="hero-image-settle object-cover"
                    style={{
                      objectPosition: slide.position ?? "center center",
                      animationDelay: `${slitDelay}ms`,
                    }}
                  />
                  {slide.decoration === "arc" && (
                    <svg
                      aria-hidden
                      className="hero-decor-arc pointer-events-none absolute -left-1/2 top-0 h-[70%] w-[200%]"
                      viewBox="0 0 200 100"
                      fill="none"
                      style={{ animationDelay: `${decorDelay}ms` }}
                    >
                      <path d="M0 100 A 100 100 0 0 1 200 100" stroke="white" strokeWidth="0.5" />
                    </svg>
                  )}
                  {slide.decoration === "lines" && (
                    <>
                      <span
                        aria-hidden
                        className="hero-decor-line pointer-events-none absolute left-[10%] top-[30%] h-px w-[80%] rotate-[18deg] bg-white/30"
                        style={{ animationDelay: `${decorDelay}ms` }}
                      />
                      <span
                        aria-hidden
                        className="hero-decor-line pointer-events-none absolute left-[15%] top-[55%] h-px w-[70%] -rotate-[8deg] bg-white/20"
                        style={{ animationDelay: `${decorDelay + 60}ms` }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Subtle top scrim — keeps the Header's own overlaid logo/nav
              legible against the photos while it's transparent over the FV */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent"
          />

          {/* The right-edge "REBRANDING" watermark used to live here,
              scoped to the FV only. It's now a page-wide fixed element
              (components/recruit/SiteWatermark.tsx, mounted once in
              app/layout.tsx) that stays on screen through every section —
              removed from here so it isn't rendered twice over the FV. */}
        </div>
      </div>
    </section>
  );
}
