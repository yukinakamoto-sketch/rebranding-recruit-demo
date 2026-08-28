import { environmentItems, type EnvironmentItem } from "@/lib/content/environment";
import Reveal from "@/components/recruit/Reveal";

function Icon({ name }: { name: EnvironmentItem["icon"] }) {
  const common = {
    width: 46,
    height: 46,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-navy)",
    strokeWidth: 1.3,
  } as const;

  if (name === "book") {
    return (
      <svg {...common}>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
        <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
      </svg>
    );
  }
  if (name === "growth") {
    return (
      <svg {...common}>
        <path d="M4 20V15" strokeLinecap="round" />
        <path d="M9 20V11" strokeLinecap="round" />
        <path d="M14 20V7" strokeLinecap="round" />
        <path d="M19 20V4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 20s-7-4.3-9.3-8.7C1.4 8.4 3 5.5 6 5.2c1.9-.2 3.4.8 4.5 2.2 1.1-1.4 2.6-2.4 4.5-2.2 3 .3 4.6 3.2 3.3 6.1C19 15.7 12 20 12 20Z" />
    </svg>
  );
}

export default function Environment() {
  return (
    <section className="bg-[var(--color-section-gray)] py-11 md:py-16">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 className="font-display-ja text-[26px] font-semibold tracking-[0.02em] text-[var(--color-navy)] md:text-[32px]">働く環境</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
          {environmentItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <Icon name={item.icon} />
              <h3 className="mt-4 text-[19px] font-semibold tracking-[0.01em] text-[var(--color-navy)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#555555] whitespace-pre-line">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
