import Link from "next/link";
import { footerLinkGroups, companyInfo } from "@/lib/content/footer";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-12 pb-12 md:pt-[72px] md:pb-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14">
          <div>
            <span className="font-serif text-[22px] font-bold tracking-wide">REBRANDING</span>
            <p className="mt-4 text-[12px] font-normal leading-[1.7] text-white/70">
              {companyInfo.name}
              <br />
              {companyInfo.address}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[13px] font-semibold md:text-[14px]">{group.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[11px] font-normal leading-[1.9] text-white/78 hover:text-white transition-colors md:text-[12px]"
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

      <div className="border-t border-white/[0.12]">
        <p className="mx-auto max-w-[1600px] px-5 md:px-10 py-5 text-[11px] text-white/60">
          © Rebranding Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
