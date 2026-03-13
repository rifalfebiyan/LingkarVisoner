"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/aspirasi", label: "Aspirasi" },
    { href: "/program", label: "Program" },
    { href: "/berita", label: "Berita" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-slate-900 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-slate-100 dark:bg-background-dark/95 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">diversity_3</span>
            <h1 className="text-xl font-black uppercase tracking-tighter dark:text-white">
              Lingkar<span className="text-slate-900 dark:text-slate-300">Visioner</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-primary ${pathname === link.href
                  ? "border-b-4 border-primary pb-1 text-primary"
                  : "text-slate-600 dark:text-slate-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden items-center rounded-lg bg-slate-100 px-3 py-1.5 dark:bg-slate-800 sm:flex">
            <span className="material-symbols-outlined text-xl text-slate-400">search</span>
            <input
              className="w-32 border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-slate-100 md:w-48 outline-none"
              placeholder="Cari informasi..."
              type="text"
            />
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="text-sm font-black uppercase tracking-widest text-slate-600 transition-colors hover:text-primary dark:text-slate-300">
              Masuk
            </button>
            <button className="border-4 border-slate-900 bg-primary px-6 py-2.5 text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-slate-100 dark:shadow-[4px_4px_0px_0px_rgba(241,245,249,1)]">
              Gabung Gerakan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 text-slate-900 dark:text-white md:hidden"
          >
            <span className="material-symbols-outlined text-3xl font-black">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col border-b-4 border-slate-900 bg-white p-6 shadow-xl dark:border-slate-100 dark:bg-background-dark md:hidden">
          {/* Mobile Search */}
          <div className="mb-6 flex items-center rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">
            <span className="material-symbols-outlined text-xl text-slate-400">search</span>
            <input
              className="ml-2 w-full border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-slate-100 outline-none"
              placeholder="Cari informasi..."
              type="text"
            />
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-black uppercase tracking-tighter transition-all ${pathname === link.href
                  ? "border-l-8 border-primary pl-4 text-primary"
                  : "text-slate-700 dark:text-slate-300"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t-4 border-slate-100 pt-6 dark:border-slate-800">
              <button className="w-full border-4 border-slate-900 py-3 text-sm font-black uppercase tracking-widest dark:border-slate-100">
                Masuk
              </button>
              <button className="w-full border-4 border-slate-900 bg-primary py-3 text-sm font-black uppercase tracking-widest text-white dark:border-slate-100">
                Gabung Gerakan
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
