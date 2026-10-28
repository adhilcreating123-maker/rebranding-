"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { brand, navLinks } from "@/config/brand";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="w-full">
      <div className="bg-[#111111] text-white text-center text-xs tracking-[0.2em] uppercase py-2 px-4">
        Seasonal Edit — Thoughtfully designed essentials
      </div>
      <div className="border-b border-[#E5E5E5] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/" className="text-lg lg:text-xl font-semibold tracking-[0.3em] uppercase">
              {brand.name}
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                  onMouseEnter={() => setIsMegaOpen(true)}
                  onMouseLeave={() => setIsMegaOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/search" className="p-2 hover:opacity-60 transition-opacity" aria-label="Search">
                <Search className="w-5 h-5" />
              </Link>
              <button className="hidden sm:block p-2 hover:opacity-60 transition-opacity" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              <Link href="/wishlist" className="p-2 hover:opacity-60 transition-opacity" aria-label="Wishlist">
                <Heart className="w-5 h-5" />
              </Link>
              <Link href="/bag" className="p-2 hover:opacity-60 transition-opacity relative" aria-label="Shopping bag">
                <ShoppingBag className="w-5 h-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D92332] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
        {isMegaOpen && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white border-b border-[#E5E5E5] shadow-sm"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4">Women</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/women" className="hover:opacity-60">All Clothing</Link></li>
                    <li><Link href="/women?sub=T-Shirts" className="hover:opacity-60">T-Shirts</Link></li>
                    <li><Link href="/women?sub=Sweatshirts" className="hover:opacity-60">Sweatshirts</Link></li>
                    <li><Link href="/women?sub=Trousers" className="hover:opacity-60">Trousers</Link></li>
                    <li><Link href="/women?sub=Dresses" className="hover:opacity-60">Dresses</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4">Men</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/men" className="hover:opacity-60">All Clothing</Link></li>
                    <li><Link href="/men?sub=Shirts" className="hover:opacity-60">Shirts</Link></li>
                    <li><Link href="/men?sub=T-Shirts" className="hover:opacity-60">T-Shirts</Link></li>
                    <li><Link href="/men?sub=Trousers" className="hover:opacity-60">Trousers</Link></li>
                    <li><Link href="/men?sub=Outerwear" className="hover:opacity-60">Outerwear</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4">Kids</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/kids" className="hover:opacity-60">All Clothing</Link></li>
                    <li><Link href="/kids?sub=T-Shirts" className="hover:opacity-60">T-Shirts</Link></li>
                    <li><Link href="/kids?sub=Sweatshirts" className="hover:opacity-60">Sweatshirts</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4">Baby</p>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/baby" className="hover:opacity-60">All Clothing</Link></li>
                    <li><Link href="/baby?sub=Everyday%20Essentials" className="hover:opacity-60">Everyday Essentials</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-white">
            <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5]">
              <span className="text-sm tracking-[0.3em] uppercase">{brand.name}</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm tracking-[0.2em] uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E5E5E5] space-y-2">
                <Link href="/search" className="block text-sm" onClick={() => setIsMenuOpen(false)}>Search</Link>
                <Link href="/wishlist" className="block text-sm" onClick={() => setIsMenuOpen(false)}>Wishlist</Link>
                <Link href="/bag" className="block text-sm" onClick={() => setIsMenuOpen(false)}>Shopping Bag</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
