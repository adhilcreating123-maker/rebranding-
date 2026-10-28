import Link from "next/link";
import { brand, footerLinks } from "@/config/brand";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg tracking-[0.3em] uppercase">
              {brand.name}
            </Link>
            <p className="mt-4 text-sm text-[#666666] max-w-xs">
              Thoughtfully designed essentials. Made for every day.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4">Shopping</p>
            <ul className="space-y-2 text-sm">
              {footerLinks.shopping.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:opacity-60 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4">Customer Support</p>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:opacity-60 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:opacity-60 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:opacity-60">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
