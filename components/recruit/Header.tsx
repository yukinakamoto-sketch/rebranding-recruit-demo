"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNavItems } from "@/lib/content/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  // Only the home page has a #hero (FV). Fixed positioning there removes the
  // header from document flow so the FV can render all the way up to the
  // true top of the page and show through the transparent header — sub-pages
  // keep the original sticky-in-flow behavior untouched.
  const isHome = pathname === "/";
  // Guarding with isHome (rather than resetting heroVisible on route change)
  // avoids a stale "transparent" flash if the header persists across a
  // client-side navigation away from the home page mid-scroll.
  const transparent = isHome && heroVisible;
  // While the FV is showing, the full nav would duplicate/collide with the
  // page's own brand mark and photo strip — collapse it down to just the
  // single "INTERVIEW" link (ENTRY stays, rendered separately below).
  const visibleNavItems = transparent ? [{ href: "/people", label: "INTERVIEW" }] : mainNavItems;

  // Header stays transparent for as long as the page's #hero section (if any)
  // is intersecting below the header's own height — i.e. while the FV is
  // still on screen. Pages without a #hero (all sub-pages) simply keep the
  // default opaque header.
  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 92;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`${isHome ? "fixed" : "sticky"} top-0 z-[100] w-full border-b transition-colors duration-300 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white border-[var(--color-border)]"
      }`}
    >
      <div className="mx-auto flex h-[72px] md:h-[92px] max-w-[1600px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span
            className={`font-serif text-[17px] font-semibold tracking-[0.1em] transition-colors duration-300 sm:text-[19px] ${
              transparent ? "text-white" : "text-[var(--color-navy)]"
            }`}
          >
            REBRANDING
          </span>
          <span
            className={`text-[9px] font-semibold tracking-[0.22em] transition-colors duration-300 sm:text-[10px] ${
              transparent ? "text-white/80" : "text-[var(--color-bordeaux)]"
            }`}
          >
            RECRUIT
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto mr-10">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] font-semibold tracking-[0.03em] transition-colors duration-300 ${
                transparent
                  ? "text-white hover:text-white/70"
                  : "text-[#1e1e1e] hover:text-[var(--color-bordeaux)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/entry"
          className={`hidden lg:inline-flex items-center justify-center h-11 px-7 text-[11px] font-semibold tracking-[0.08em] shrink-0 transition-colors duration-300 ${
            transparent
              ? "bg-[rgba(97,27,36,0.85)] text-white border border-white/30 hover:bg-[var(--color-bordeaux-dark)]"
              : "bg-[var(--color-bordeaux)] text-white border border-transparent hover:bg-[var(--color-bordeaux-dark)]"
          }`}
        >
          ENTRY
        </Link>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0"
        >
          <span
            className={`block h-[2px] w-6 transition-[transform,background-color] duration-300 ${
              transparent ? "bg-white" : "bg-[var(--color-navy)]"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 transition-[opacity,background-color] duration-300 ${
              transparent ? "bg-white" : "bg-[var(--color-navy)]"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 transition-[transform,background-color] duration-300 ${
              transparent ? "bg-white" : "bg-[var(--color-navy)]"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <nav className="flex flex-col px-5 py-4">
            {visibleNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] font-semibold tracking-[0.03em] text-[#1e1e1e] border-b border-[var(--color-border)] last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/entry"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center h-11 bg-[var(--color-bordeaux)] text-white text-[12px] font-semibold tracking-[0.08em]"
            >
              ENTRY
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
