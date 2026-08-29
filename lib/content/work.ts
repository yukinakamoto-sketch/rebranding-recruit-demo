export type WorkItem = {
  title: string;
  description: string;
  image: { src: string; alt: string; position?: string };
  href: string;
};

export const workItems: WorkItem[] = [
  {
    title: "コンサルティング",
    description: "企業の課題を分析し、ブランド戦略の設計を担う。",
    image: {
      src: "/images/recruit/work/work-01-consulting.png",
      alt: "コンサルティング業務の様子",
      position: "center center",
    },
    href: "/work",
  },
  {
    title: "コンテンツ・SEO",
    description: "検索と人の心を動かすコンテンツを企画・制作。",
    image: {
      src: "/images/recruit/work/work-02-digital.png",
      alt: "デジタル・分析業務の様子",
      position: "40% center",
    },
    href: "/work",
  },
  {
    title: "制作・クリエイティブ",
    description: "デザインの力でブランドの価値を形にする。",
    image: {
      src: "/images/recruit/work/work-03-creative.png",
      alt: "クリエイティブ制作の様子",
      position: "center center",
    },
    href: "/work",
  },
];
