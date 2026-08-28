export type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "会社を知る",
    links: [
      { label: "会社を知る トップ", href: "/about" },
      { label: "代表メッセージ", href: "/about" },
      { label: "会社概要", href: "/about" },
      { label: "ニュース", href: "/about" },
    ],
  },
  {
    title: "仕事を知る",
    links: [
      { label: "仕事を知る トップ", href: "/work" },
      { label: "コンサルティング", href: "/work" },
      { label: "コンテンツ・SEO", href: "/work" },
      { label: "制作・クリエイティブ", href: "/work" },
    ],
  },
  {
    title: "働く環境",
    links: [
      { label: "働く環境 トップ", href: "/environment" },
      { label: "研修制度", href: "/environment" },
      { label: "キャリアパス", href: "/environment" },
      { label: "福利厚生", href: "/environment" },
    ],
  },
  {
    title: "人を知る",
    links: [
      { label: "人を知る トップ", href: "/people" },
      { label: "社員インタビュー", href: "/people" },
    ],
  },
  {
    title: "採用情報",
    links: [
      { label: "採用情報 トップ", href: "/recruit" },
      { label: "求める人物像", href: "/recruit" },
      { label: "募集要項", href: "/recruit" },
      { label: "選考フロー", href: "/recruit" },
      { label: "アクセス", href: "/about" },
      { label: "ENTRY", href: "/entry" },
    ],
  },
];

export const companyInfo = {
  name: "リブランディング株式会社",
  address: "〒150-0001 東京都渋谷区神宮前6-23-4 桑野ビル2F",
};
