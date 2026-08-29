export const aboutContent = {
  label: "ABOUT REBRANDING",
  titleLine1: "企業の変化に、",
  titleLine2: "伴走する。",
  // Flat paragraph text — used as-is by app/about/page.tsx (the /about
  // subpage, joined with \n there). Kept in sync word-for-word with
  // bodyParagraphChunks below; update both together.
  bodyParagraphs: [
    "リブランディングは、検索・評判・ブランディング・デジタル戦略を通じて、企業の価値を高める会社です。",
    "企業が持つ本当の強みを見つけ、正しく伝え、成長につなげていく。戦略を考えるだけでなく、コンテンツ制作やデジタル実装まで一気通貫で手がけます。",
    "領域や職種にとらわれず、変化を楽しみながら挑戦できる仲間を求めています。",
  ],
  // Same 3 paragraphs, pre-split into "meaning unit" chunks for the TOP
  // page's About.tsx: each chunk renders as its own md:inline-block +
  // md:whitespace-nowrap span there, so a line can only break BETWEEN
  // chunks (never inside one) on PC, while SP still wraps freely within
  // each chunk. Concatenating a paragraph's chunks reproduces the matching
  // string in bodyParagraphs exactly (no extra spaces — Japanese text needs
  // none between clauses).
  bodyParagraphChunks: [
    ["リブランディングは、", "検索・評判・ブランディング・デジタル戦略を通じて、", "企業の価値を高める会社です。"],
    [
      "企業が持つ本当の強みを見つけ、",
      "正しく伝え、成長につなげていく。",
      "戦略を考えるだけでなく、",
      "コンテンツ制作やデジタル実装まで",
      "一気通貫で手がけます。",
    ],
    ["領域や職種にとらわれず、", "変化を楽しみながら", "挑戦できる仲間を求めています。"],
  ],
  images: {
    large: {
      src: "/images/recruit/about/about-01-office.png",
      alt: "リブランディングのオフィス全景",
      position: "center center",
    },
    small1: {
      src: "/images/recruit/about/about-02-meeting.png",
      alt: "ミーティングをするメンバー",
      position: "center center",
    },
    small2: {
      src: "/images/recruit/about/about-03-lounge.png",
      alt: "オフィスのラウンジスペース",
      position: "center center",
      // Source photo is noticeably darker/warmer than the other two (evening ambient
      // lighting) — small brightness/contrast lift only, to balance the 3-photo collage.
      filter: "brightness(1.16) contrast(1.03)",
    },
  },
};
