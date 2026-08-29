export type RecruitCard = {
  title: string;
  description: string;
  image: { src: string; alt: string; position?: string };
  href: string;
};

export const recruitCards: RecruitCard[] = [
  {
    title: "求める人物像",
    description: "変化を楽しみ、本質を追求できる人を求めています。",
    image: {
      src: "/images/recruit/info/recruit-01-communication.png",
      alt: "社員同士のコミュニケーションの様子",
      position: "center center",
    },
    href: "/recruit",
  },
  {
    title: "募集要項",
    description: "募集職種・雇用条件など、採用に関する詳細情報。",
    image: {
      src: "/images/recruit/info/recruit-02-environment.png",
      alt: "働く環境のイメージ",
      position: "center center",
    },
    href: "/recruit",
  },
  {
    title: "選考フロー",
    description: "エントリーから内定までの流れをご案内します。",
    image: {
      src: "/images/recruit/info/recruit-03-career.png",
      alt: "若手社員のイメージ",
      position: "center center",
    },
    href: "/recruit",
  },
];
