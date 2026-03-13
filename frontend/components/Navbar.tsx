"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/80 md:px-10 lg:px-20">
      <div className="mx-auto flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">diversity_3</span>
            <h1 className="text-xl font-black tracking-tight dark:text-white">
              Lingkar<span className="text-slate-900 dark:text-slate-300">Visioner</span>
            </h1>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className={`text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary ${pathname === "/"
                ? "border-b-2 border-primary pb-1 text-primary"
                : "text-slate-600 dark:text-slate-300"
                }`}
            >
              Beranda
            </Link>
            <Link
              href="/tentang"
              className={`text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary ${pathname === "/tentang"
                ? "border-b-2 border-primary pb-1 text-primary"
                : "text-slate-600 dark:text-slate-300"
                }`}
            >
              Tentang Kami
            </Link>
            {/* <Link
              href="/fokus"
              className={`text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary ${pathname === "/fokus"
                ? "border-b-2 border-primary pb-1 text-primary"
                : "text-slate-600 dark:text-slate-300"
                }`}
            >
              Fokus
            </Link> */}
            <Link
              href="/program"
              className={`text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary ${pathname === "/program"
                ? "border-b-2 border-primary pb-1 text-primary"
                : "text-slate-600 dark:text-slate-300"
                }`}
            >
              Program
            </Link>
            <Link
              href="/berita"
              className={`text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary ${pathname === "/berita"
                ? "border-b-2 border-primary pb-1 text-primary"
                : "text-slate-600 dark:text-slate-300"
                }`}
            >
              Berita
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden items-center rounded-lg bg-slate-100 px-3 py-1.5 dark:bg-slate-800 sm:flex">
            <span className="material-symbols-outlined text-xl text-slate-400">search</span>
            <input
              className="w-32 border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-slate-100 md:w-48 outline-none"
              placeholder="Cari informasi..."
              type="text"
            />
          </div>
          <button className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:flex">
            Masuk
          </button>
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/50">
            Gabung Gerakan
          </button>
          {/* Avatar only visible when logged in (mocked for demo as visible) */}
          <div className="size-9 overflow-hidden rounded-full bg-slate-200 ring-2 ring-primary/20 dark:bg-slate-700 hidden">
            <img
              className="h-full w-full object-cover"
              alt="User profile avatar of a member"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6jgSOzHBWm0HnXwKmyJ5_4HmVKxu7RkoUbBsnK8EMUhBNLhgX9krAPN5jp2LZodYqu1K5OOg9dbTUf_7im3A_UjxO-iEDGvRZX3CxWY41UePHIynvOVxOnN-xMSZ87lD-i_SjJ6f443lykexg3dUQ_vVTbt2JjrhN98TVKROmP6Tav49ehhTEQIAqZSB-hEybNy2-JFqPCbUscYbw8XEPZ6-jDihcWywsEBbiRMsj1DYXGN5tIwTPzxYdSQu_zuC_UzoMe-oL0I24"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
