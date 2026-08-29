import Image from "next/image";
import Link from "next/link";
import { recruitCards } from "@/lib/content/recruit";
import Reveal from "@/components/recruit/Reveal";

export default function RecruitInfo() {
  return (
    <section className="bg-[var(--color-navy)] py-14 md:py-[88px]">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display-ja text-[29px] font-semibold tracking-[0.02em] text-white md:text-[36px]">採用情報</h2>
          <Link
            href="/recruit"
            className="group inline-flex items-center gap-1 text-[13px] tracking-[0.08em] text-white hover:underline"
          >
            採用情報一覧を見る
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {recruitCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <Link href={card.href} className="group block bg-white">
                <div className="relative aspect-[4/3.6] overflow-hidden">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: card.image.position ?? "center center" }}
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="font-display-ja text-lg font-semibold text-[var(--color-navy)] md:text-[19px]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-[#555555] whitespace-pre-line">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold tracking-[0.06em] text-[var(--color-bordeaux)]">
                    詳しく見る
                    <span aria-hidden className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
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
