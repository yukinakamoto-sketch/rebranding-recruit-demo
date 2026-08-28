// Generates abstract SVG placeholder photos (gradient + human silhouette)
// in brand navy/bordeaux/gray tones. No external network dependency.
import fs from "node:fs";
import path from "node:path";

const NAVY = "#132B50";
const NAVY_L = "#274469";
const BORDEAUX = "#611B24";
const BORDEAUX_L = "#7F2C37";
const GRAY = "#D9D9D9";
const GRAY_L = "#EDEDED";

function silhouette(cx, cy, scale, fill, opacity = 0.55) {
  // simple bust/shoulder silhouette
  return `
  <g transform="translate(${cx} ${cy}) scale(${scale})" fill="${fill}" opacity="${opacity}">
    <circle cx="0" cy="-58" r="34" />
    <path d="M -70 90 C -70 10 -40 -20 0 -20 C 40 -20 70 10 70 90 Z" />
  </g>`;
}

function monitorGlyph(cx, cy, scale, fill, opacity = 0.5) {
  return `
  <g transform="translate(${cx} ${cy}) scale(${scale})" fill="none" stroke="${fill}" stroke-width="6" opacity="${opacity}">
    <rect x="-60" y="-45" width="120" height="80" rx="4" />
    <line x1="-20" y1="35" x2="20" y2="35" />
    <line x1="0" y1="35" x2="0" y2="50" />
    <polyline points="-40,-5 -15,15 0,-10 40,-25" stroke-width="5" />
  </g>`;
}

function buildingsGlyph(cx, cy, scale, fill, opacity = 0.5) {
  return `
  <g transform="translate(${cx} ${cy}) scale(${scale})" fill="${fill}" opacity="${opacity}">
    <rect x="-90" y="-20" width="40" height="120" />
    <rect x="-40" y="-70" width="50" height="170" />
    <rect x="20" y="-40" width="40" height="140" />
    <rect x="70" y="10" width="30" height="90" />
  </g>`;
}

function card(w, h, seed, kind = "silhouette", tone = "navy") {
  const base = tone === "navy" ? NAVY : BORDEAUX;
  const baseL = tone === "navy" ? NAVY_L : BORDEAUX_L;
  const id = `g${seed}`;
  let inner = "";
  if (kind === "silhouette") {
    inner = silhouette(w / 2, h * 0.58, Math.min(w, h) / 260, "#FFFFFF", 0.35);
  } else if (kind === "duo") {
    inner =
      silhouette(w * 0.38, h * 0.6, Math.min(w, h) / 300, "#FFFFFF", 0.35) +
      silhouette(w * 0.66, h * 0.55, Math.min(w, h) / 340, "#FFFFFF", 0.28);
  } else if (kind === "monitor") {
    inner = monitorGlyph(w / 2, h * 0.5, Math.min(w, h) / 220, "#FFFFFF", 0.4);
  } else if (kind === "buildings") {
    inner = buildingsGlyph(w / 2, h * 0.62, Math.min(w, h) / 260, "#FFFFFF", 0.3);
  }

  const stripes = Array.from({ length: 5 })
    .map((_, i) => {
      const x = (w / 5) * i;
      const op = 0.05 + (i % 2) * 0.04;
      return `<rect x="${x}" y="0" width="${w / 5}" height="${h}" fill="#FFFFFF" opacity="${op}" />`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${base}" />
      <stop offset="100%" stop-color="${baseL}" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id})" />
  ${stripes}
  ${inner}
</svg>`;
}

const outRoot = path.join(process.cwd(), "public", "images", "demo");

const files = [
  // Hero: 5 portrait photos, tall 4:5-ish
  { p: "hero/hero-1.svg", w: 600, h: 900, kind: "silhouette", tone: "navy" },
  { p: "hero/hero-2.svg", w: 600, h: 900, kind: "silhouette", tone: "bordeaux" },
  { p: "hero/hero-3.svg", w: 600, h: 900, kind: "monitor", tone: "navy" },
  { p: "hero/hero-4.svg", w: 600, h: 900, kind: "silhouette", tone: "bordeaux" },
  { p: "hero/hero-5.svg", w: 600, h: 900, kind: "silhouette", tone: "navy" },
  // About collage
  { p: "about/about-large.svg", w: 900, h: 700, kind: "buildings", tone: "navy" },
  { p: "about/about-1.svg", w: 620, h: 380, kind: "silhouette", tone: "bordeaux" },
  { p: "about/about-2.svg", w: 620, h: 380, kind: "duo", tone: "navy" },
  // Work cards
  { p: "work/work-consulting.svg", w: 800, h: 520, kind: "monitor", tone: "navy" },
  { p: "work/work-content.svg", w: 800, h: 520, kind: "silhouette", tone: "bordeaux" },
  { p: "work/work-creative.svg", w: 800, h: 520, kind: "duo", tone: "navy" },
  // People 5
  { p: "people/people-1.svg", w: 480, h: 560, kind: "silhouette", tone: "navy" },
  { p: "people/people-2.svg", w: 480, h: 560, kind: "silhouette", tone: "bordeaux" },
  { p: "people/people-3.svg", w: 480, h: 560, kind: "silhouette", tone: "navy" },
  { p: "people/people-4.svg", w: 480, h: 560, kind: "silhouette", tone: "bordeaux" },
  { p: "people/people-5.svg", w: 480, h: 560, kind: "silhouette", tone: "navy" },
  // Recruit info 3
  { p: "recruit/recruit-persona.svg", w: 800, h: 520, kind: "silhouette", tone: "bordeaux" },
  { p: "recruit/recruit-requirements.svg", w: 800, h: 520, kind: "monitor", tone: "navy" },
  { p: "recruit/recruit-flow.svg", w: 800, h: 520, kind: "duo", tone: "bordeaux" },
];

for (const f of files) {
  const full = path.join(outRoot, f.p);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, card(f.w, f.h, f.p.replace(/[^a-z0-9]/gi, ""), f.kind, f.tone), "utf8");
  console.log("wrote", full);
}
