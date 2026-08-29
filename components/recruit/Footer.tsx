import Link from "next/link";
import { footerLinkGroups, companyInfo } from "@/lib/content/footer";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <div>
            <span className="font-serif text-xl font-bold tracking-wide">REBRANDING</span>
            <p className="mt-4 text-[13px] font-normal leading-[1.9] text-white/70">
              {companyInfo.name}
              <br />
              {companyInfo.address}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[14px] font-semibold">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[12px] font-normal leading-[2] text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1600px] px-5 md:px-10 py-6 text-[12px] text-white/60">
          © Rebranding Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
