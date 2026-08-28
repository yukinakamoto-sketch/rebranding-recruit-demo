import Image from "next/image";
import Link from "next/link";
import { workItems } from "@/lib/content/work";
import Reveal from "@/components/recruit/Reveal";

export default function Work() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display-ja text-[26px] font-semibold tracking-[0.02em] text-[var(--color-navy)] md:text-[32px]">仕事を知る</h2>
          <Link
            href="/work"
            className="group inline-flex items-center gap-1 text-sm font-semibold tracking-[0.06em] text-[var(--color-bordeaux)] hover:underline"
          >
            すべての仕事を見る
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {workItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: item.image.position ?? "center center" }}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555555] whitespace-pre-line">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
