import type { Metadata } from "next";
import { environmentItems } from "@/lib/content/environment";
import SubPageHeader from "@/components/recruit/SubPageHeader";

export const metadata: Metadata = {
  title: "働く環境 | REBRANDING RECRUIT",
};

export default function EnvironmentPage() {
  return (
    <>
      <SubPageHeader
        eyebrow="ENVIRONMENT"
        title="働く環境"
        lead="専門性を伸ばしながら長く活躍できるよう、研修制度・キャリアパス・福利厚生を整備しています。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
          {environmentItems.map((item) => (
            <div key={item.title} className="border-t-2 border-[var(--color-navy)] pt-6">
              <h2 className="text-lg font-bold text-[var(--color-navy)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
