export default function SubPageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="bg-[var(--color-navy)] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="text-xs md:text-sm font-semibold tracking-widest text-white/70">
          {eyebrow}
        </p>
        <h1 className="font-display-ja mt-3 text-2xl md:text-4xl font-normal tracking-wide text-white">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm md:text-base leading-loose text-white/80 whitespace-pre-line">
          {lead}
        </p>
      </div>
    </section>
  );
}
