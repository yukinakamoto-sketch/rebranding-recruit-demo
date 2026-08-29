// Page-wide fixed vertical watermark — a quiet, always-on-screen "REBRANDING"
// brand mark pinned to the right edge, readable top-to-bottom via
// writing-mode:vertical-rl. Uses mix-blend-mode:difference so a single faint
// white layer stays visible over both light and dark section backgrounds
// without needing per-section theme detection. Fixed positioning takes it
// out of document flow entirely, so where it sits in the tree doesn't
// matter — it's mounted once in the root layout, above <Footer />.
//
// Deliberately NOT a flex container: writing-mode:vertical-rl combined with
// display:flex on a text-only element can collapse the box to zero width in
// some engines (see the same note that used to live on Hero.tsx's own,
// now-removed, in-section watermark). Plain absolute/fixed + natural
// vertical-rl sizing only.
export default function SiteWatermark() {
  return (
    <span
      aria-hidden
      className="pointer-events-none fixed top-1/2 right-[8px] z-20 hidden -translate-y-1/2 [writing-mode:vertical-rl] [text-orientation:mixed] select-none whitespace-nowrap font-semibold md:block"
      style={{
        fontSize: "60px",
        letterSpacing: "0.32em",
        lineHeight: 1.3,
        color: "rgba(255,255,255,0.08)",
        mixBlendMode: "difference",
      }}
    >
      REBRANDING
    </span>
  );
}
