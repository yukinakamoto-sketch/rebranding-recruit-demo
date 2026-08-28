import type { Metadata } from "next";
import Image from "next/image";
import { peopleCards } from "@/lib/content/people";
import SubPageHeader from "@/components/recruit/SubPageHeader";

export const metadata: Metadata = {
  title: "人を知る | REBRANDING RECRUIT",
};

export default function PeoplePage() {
  return (
    <>
      <SubPageHeader
        eyebrow="PEOPLE"
        title="働く人を知る"
        lead="さまざまな職種のメンバーが、それぞれの専門性を活かしながら活躍しています。"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {peopleCards.map((person) => (
            <div key={person.id} className="block">
              <div className="relative aspect-[6/7] overflow-hidden">
                <Image
                  src={person.photo.src}
                  alt={person.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-0 bg-[var(--color-bordeaux)] text-white text-xs font-semibold px-3 py-1.5">
                  {person.labelJa}
                </span>
              </div>
              <p className="mt-4 text-xs text-[#777777]">{person.year}</p>
              <p className="mt-2 text-base font-bold leading-snug text-[var(--color-navy)] whitespace-pre-line">
                {person.message}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
