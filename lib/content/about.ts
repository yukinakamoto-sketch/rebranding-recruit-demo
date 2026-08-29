export const aboutContent = {
  label: "ABOUT REBRANDING",
  titleLine1: "企業の変化に、",
  titleLine2: "伴走する。",
  // 3 separate paragraphs (not \n/<br> inside one block) — each is its own
  // <p> in About.tsx, so paragraph breaks stay fixed while each paragraph's
  // own line-wrapping still follows the container width naturally. The 2nd
  // paragraph's 2 sentences are joined as ordinary flowing text (no br)
  // within that same <p>.
  bodyParagraphs: [
    "リブランディングは、検索・評判・ブランディング・デジタル戦略を通じて、企業の価値を高める会社です。",
    "企業が持つ本当の強みを見つけ、正しく伝え、成長につなげていく。戦略を考えるだけでなく、コンテンツ制作やデジタル実装まで一気通貫で手がけます。",
    "領域や職種にとらわれず、変化を楽しみながら挑戦できる仲間を求めています。",
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
