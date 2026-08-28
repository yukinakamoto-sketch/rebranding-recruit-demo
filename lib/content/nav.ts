export type NavItem = {
  label: string;
  href: string;
};

export const mainNavItems: NavItem[] = [
  { label: "会社を知る", href: "/about" },
  { label: "仕事を知る", href: "/work" },
  { label: "働く環境", href: "/environment" },
  { label: "人を知る", href: "/people" },
  { label: "採用情報", href: "/recruit" },
];
