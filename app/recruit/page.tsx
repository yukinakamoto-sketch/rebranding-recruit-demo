import type { Metadata } from "next";
import Link from "next/link";
import { recruitCards } from "@/lib/content/recruit";
import SubPageHeader from "@/components/recruit/SubPageHeader";

export const metadata: Metadata = {
  title: "採用情報 | REBRANDING RECRUIT",
};

const requirements = [
  ["募集職種", "コンサルティング / コンテンツ・SEO / 制作・クリエイティブ / マーケティング / コーポレート"],
  ["雇用形態", "正社員"],
  ["勤務地", "東京都渋谷区（オフィス）／リモート勤務制度あり"],
  ["勤務時間", "フレックスタイム制（コアタイム 11:00-16:00）"],
  ["休日休暇", "完全週休2日制（土日祝）、年末年始休暇、有給休暇"],
];

const flowSteps = [
  "エントリー",
  "書類選考",
  "一次面接",
  "最終面接",
  "内定",
];

export default function RecruitPage() {
  return (
    <>
      <SubPageHeader
        eyebrow="RECRUIT INFORMATION"
        title="採用情報"
        lead="求める人物像、募集要項、選考フローをご案内します。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {recruitCards.map((card) => (
            <div key={card.title} className="border border-[var(--color-border)] p-6 md:p-8">
              <h2 className="text-lg font-bold text-[var(--color-navy)]">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555] whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-section-gray)] py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">募集要項</h2>
          <dl className="mt-8 max-w-3xl divide-y divide-[var(--color-border)] text-sm md:text-base bg-white">
            {requirements.map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 p-5">
                <dt className="text-[#777777]">{label}</dt>
                <dd className="col-span-2 text-[#1e1e1e]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">選考フロー</h2>
          <ol className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2 flex-wrap">
            {flowSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-3 border border-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-[var(--color-navy)]">
                  <span className="text-[var(--color-bordeaux)]">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-[var(--color-border)] hidden sm:inline" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <Link
              href="/entry"
              className="inline-flex items-center gap-2 h-14 px-10 bg-[var(--color-bordeaux)] text-white text-sm md:text-base font-bold hover:bg-[var(--color-bordeaux-light)] transition-colors"
            >
              ENTRY
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
