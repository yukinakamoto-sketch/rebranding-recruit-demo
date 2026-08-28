// 5 people portraits, recommended 3:5 vertical crop, portrait/profile shot with moody editorial lighting.
// Real photography at public/images/recruit/people/people-01.png ... people-05.png.
export type ColorVariant = "bordeaux" | "navy";

export type PersonCard = {
  id: string;
  labelEn: string;
  labelJa: string;
  year: string;
  message: string;
  colorVariant: ColorVariant;
  photo: { src: string; alt: string; position?: string };
};

export const peopleCards: PersonCard[] = [
  {
    id: "consulting",
    labelEn: "CONSULTING",
    labelJa: "コンサルティング",
    year: "2022年入社",
    message: "本質を見抜き、\n最適な道筋を描く。",
    colorVariant: "bordeaux",
    photo: {
      src: "/images/recruit/people/people-01.png",
      alt: "窓辺に立つ紳士服姿の男性社員",
      position: "50% 32%",
    },
  },
  {
    id: "content-seo",
    labelEn: "CONTENT・SEO",
    labelJa: "コンテンツ・SEO",
    year: "2021年入社",
    message: "検索と人の心を動かす\nコンテンツを。",
    colorVariant: "navy",
    photo: {
      src: "/images/recruit/people/people-02.png",
      alt: "窓辺に立つ若手ビジネスウーマン",
      position: "50% 32%",
    },
  },
  {
    id: "creative",
    labelEn: "CREATIVE",
    labelJa: "クリエイティブ",
    year: "2023年入社",
    message: "デザインの力で、\nブランドの価値を届ける。",
    colorVariant: "bordeaux",
    photo: {
      src: "/images/recruit/people/people-03.png",
      alt: "資料を確認するクリエイティブ職の社員",
      position: "50% 37%",
    },
  },
  {
    id: "marketing",
    labelEn: "MARKETING",
    labelJa: "マーケティング",
    year: "2022年入社",
    message: "データと仮説で、\n成長を加速する。",
    colorVariant: "navy",
    photo: {
      src: "/images/recruit/people/people-04.png",
      alt: "窓辺に立つ洗練されたビジネスウーマン",
      position: "50% 32%",
    },
  },
  {
    id: "corporate",
    labelEn: "CORPORATE",
    labelJa: "コーポレート",
    year: "2021年入社",
    message: "挑戦を支える\n仕組みをつくり続ける。",
    colorVariant: "bordeaux",
    photo: {
      src: "/images/recruit/people/people-05.png",
      alt: "モダンオフィスで微笑む男性社員",
      position: "50% 31%",
    },
  },
];

export const peopleCopy = {
  eyebrow: "PEOPLE",
  heading: "働く人を知る",
  lead: "リブランディングで活躍するメンバーのインタビューを通して、仕事のやりがいや働く環境についてご紹介します。",
  ctaLabel: "すべてのインタビューを見る",
  ctaHref: "/people",
};
