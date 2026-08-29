// 5 vertical hero photos, unequal widths, recommended 3:4 portrait crop, cropped to fill full hero height.
// Real photography at public/images/recruit/hero/hero-slit-01.png ... hero-slit-05.png.
export type HeroSlide = {
  src: string;
  alt: string;
  /** Relative width weight of this slice within the 5-photo strip. */
  weight: number;
  /** CSS object-position for this slice's image crop. */
  position?: string;
  /** Optional subtle line-art decoration overlaid on this slice. */
  decoration?: "arc" | "lines" | "watermark";
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/recruit/hero/hero-slit-01.png",
    alt: "窓辺の企業オフィス空間に立つ男性社員",
    weight: 18,
    position: "50% 50%",
    decoration: "arc",
  },
  {
    src: "/images/recruit/hero/hero-slit-02.png",
    alt: "オフィスの窓辺に立つ女性社員",
    weight: 21,
    position: "50% 50%",
    decoration: "arc",
  },
  {
    src: "/images/recruit/hero/hero-slit-03.png",
    alt: "摩天楼を望む静かな会議室",
    weight: 19,
    position: "50% 50%",
  },
  {
    src: "/images/recruit/hero/hero-slit-04.png",
    alt: "黄昏の摩天楼と輝く都市景観",
    weight: 18,
    position: "50% 50%",
    decoration: "lines",
  },
  {
    src: "/images/recruit/hero/hero-slit-05.png",
    alt: "企画資料を扱うクリエイティブ職の社員",
    weight: 24,
    position: "50% 50%",
    decoration: "watermark",
  },
];

export const heroCopy = {
  eyebrowEn: "REBRANDING",
  eyebrowJa: "RECRUIT",
  headlineLines: ["AI時代の", "ブランドを、", "つくる側へ。"] as const,
  /** Index of the headline line rendered as a white highlight block (bordeaux text). */
  highlightIndex: 2,
  // Split so the component can keep "パートナーです。" from breaking
  // mid-word on PC (md:whitespace-nowrap) — same sentence, same wording,
  // just split at a natural clause boundary so the two pieces can wrap
  // independently.
  bodyMain: "リブランディングは、検索・評判・ブランディング・デジタル戦略の力で、企業の成長に伴走する",
  bodyEmphasis: "パートナーです。",
  scrollLabel: "SCROLL DOWN",
  /**
   * Background photo for the HERO left (bordeaux) panel. Falls back to the
   * flat --color-bordeaux fill if unset. Copy is never baked into the image
   * — it always renders as real HTML/CSS layered on top.
   */
  leftBackgroundImage: "/images/recruit/hero/hero-left-bg.png" as string | undefined,
};

export type HeroTopLink = {
  label: string;
  href: string;
  variant: "text" | "solid";
};

export const heroTopLinks: HeroTopLink[] = [
  { label: "INTERVIEW", href: "/people", variant: "text" },
  { label: "ENTRY", href: "/entry", variant: "solid" },
];
