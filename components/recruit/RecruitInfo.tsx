import Image from "next/image";
import Link from "next/link";
import { recruitCards } from "@/lib/content/recruit";
import Reveal from "@/components/recruit/Reveal";

export default function RecruitInfo() {
  return (
    <section className="bg-[var(--color-navy)] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display-ja text-[26px] font-semibold tracking-[0.02em] text-white md:text-[32px]">採用情報</h2>
          <Link
            href="/recruit"
            className="group inline-flex items-center gap-1 text-sm font-semibold tracking-[0.06em] text-white hover:underline"
          >
            採用情報一覧を見る
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {recruitCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <Link href={card.href} className="group block bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: card.image.position ?? "center center" }}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555] whitespace-pre-line">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold tracking-[0.06em] text-[var(--color-bordeaux)]">
                    詳しく見る
                    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
