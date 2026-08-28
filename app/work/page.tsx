import type { Metadata } from "next";
import Image from "next/image";
import { workItems } from "@/lib/content/work";
import SubPageHeader from "@/components/recruit/SubPageHeader";

export const metadata: Metadata = {
  title: "仕事を知る | REBRANDING RECRUIT",
};

export default function WorkPage() {
  return (
    <>
      <SubPageHeader
        eyebrow="OUR WORK"
        title="仕事を知る"
        lead="コンサルティング、コンテンツ・SEO、制作・クリエイティブ。3つの専門領域が連携し、クライアントのブランド価値を高めています。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col gap-16 md:gap-24">
          {workItems.map((item, i) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">
                  {item.title}
                </h2>
                <p className="mt-5 text-sm md:text-base leading-loose text-[#555555] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
