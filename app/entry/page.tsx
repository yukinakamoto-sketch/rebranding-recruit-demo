import type { Metadata } from "next";
import SubPageHeader from "@/components/recruit/SubPageHeader";

export const metadata: Metadata = {
  title: "ENTRY | REBRANDING RECRUIT",
};

export default function EntryPage() {
  return (
    <>
      <SubPageHeader
        eyebrow="ENTRY"
        title="エントリー"
        lead="リブランディング株式会社にご興味をお持ちいただき、ありがとうございます。下記フォームよりエントリー情報をお送りください。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[720px] px-5 md:px-10">
          <p className="text-sm leading-loose text-[#555555]">
            エントリーいただいた内容をもとに、採用担当より書類選考のご案内をお送りします。
            通過された方には一次面接の日程調整のご連絡をいたします。
          </p>

          <form className="mt-10 flex flex-col gap-6">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)]" htmlFor="name">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-navy)]"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)]" htmlFor="email">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-navy)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)]" htmlFor="position">
                希望職種
              </label>
              <select
                id="position"
                name="position"
                className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-navy)]"
                defaultValue="コンサルティング"
              >
                <option>コンサルティング</option>
                <option>コンテンツ・SEO</option>
                <option>制作・クリエイティブ</option>
                <option>マーケティング</option>
                <option>コーポレート</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)]" htmlFor="message">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full border border-[var(--color-border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-navy)]"
                placeholder="自己紹介や志望動機などをご記入ください"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center gap-2 h-14 px-10 bg-[var(--color-bordeaux)] text-white text-sm md:text-base font-bold hover:bg-[var(--color-bordeaux-light)] transition-colors"
            >
              ENTRY
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
