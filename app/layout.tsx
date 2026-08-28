import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/recruit/Header";
import Footer from "@/components/recruit/Footer";

// Editorial display serif for HERO / PEOPLE headings only — kept separate
// from the sans body/nav typeface. `display: swap` + Google's per-glyph
// unicode-range chunking means only the handful of Kanji/Hiragana actually
// used on the page are ever fetched by the browser, so this doesn't add a
// meaningful load-time cost.
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  // NOTE: deliberately NOT named "--font-display-ja" — that name is reused
  // as our own app-level token in globals.css (--font-display-ja / --font-
  // body-ja both resolve through it). Naming this raw next/font variable
  // identically caused a self-referential `var(--font-display-ja)` cycle in
  // globals.css, which made the custom property invalid and silently fell
  // back to the browser default font everywhere.
  variable: "--font-serif-jp",
});

export const metadata: Metadata = {
  title: "REBRANDING RECRUIT | リブランディング株式会社 採用サイト",
  description:
    "リブランディング株式会社の採用サイト。検索・評判・ブランディング・デジタル戦略の力で企業の成長に伴走する、リブランディングの仲間を募集しています。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`h-full antialiased ${notoSerifJP.variable}`}>
      <body
        className="min-h-full flex flex-col text-[#1e1e1e] bg-white"
        style={{ fontFamily: "var(--font-body-ja)" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
