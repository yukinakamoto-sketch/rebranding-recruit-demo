export type EnvironmentItem = {
  title: string;
  description: string;
  icon: "book" | "growth" | "heart";
};

export const environmentItems: EnvironmentItem[] = [
  {
    title: "研修制度",
    description: "入社後は体系的な研修で、\n専門知識と実務力を身につける。",
    icon: "book",
  },
  {
    title: "キャリアパス",
    description: "専門性を深めるも、\n領域を広げるも自分次第。",
    icon: "growth",
  },
  {
    title: "福利厚生",
    description: "柔軟な働き方を支える\n各種制度を整備。",
    icon: "heart",
  },
];
