import type { Metadata } from "next";
import Image from "next/image";
import SubPageHeader from "@/components/recruit/SubPageHeader";
import { aboutContent } from "@/lib/content/about";
import { numberItems, numbersHeading } from "@/lib/content/numbers";

export const metadata: Metadata = {
  title: "会社を知る | REBRANDING RECRUIT",
};

export default function AboutPage() {
  return (
    <>
      <SubPageHeader
        eyebrow="ABOUT REBRANDING"
        title="会社を知る"
        lead="検索・評判・ブランディング・デジタル戦略の力で、企業の成長に伴走するリブランディング株式会社について紹介します。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] leading-tight">
              <span className="block">{aboutContent.titleLine1}</span>
              <span className="block">{aboutContent.titleLine2}</span>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-loose text-[#555555] whitespace-pre-line">
              {aboutContent.body}
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={aboutContent.images.large.src}
              alt={aboutContent.images.large.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section-gray)] py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-navy)]">
            {numbersHeading}
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
            {numberItems.map((item) => (
              <div key={item.label} className="py-8 sm:py-0 sm:px-8 first:pl-0">
                <p className="text-sm text-[#555555]">{item.label}</p>
                <p className="mt-2 text-4xl md:text-5xl font-bold text-[var(--color-bordeaux)]">
                  {item.value}
                </p>
                <p className="mt-3 text-xs md:text-sm text-[#555555]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">会社概要</h2>
          <dl className="mt-8 max-w-2xl divide-y divide-[var(--color-border)] text-sm md:text-base">
            {[
              ["会社名", "リブランディング株式会社"],
              ["所在地", "〒150-0001 東京都渋谷区神宮前6-23-4 桑野ビル2F"],
              ["事業内容", "ブランディング支援、SEO・コンテンツマーケティング支援、デジタル戦略コンサルティング"],
              ["設立", "2016年"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="text-[#777777]">{label}</dt>
                <dd className="col-span-2 text-[#1e1e1e]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
