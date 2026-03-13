import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 px-6 py-12 text-slate-400 md:px-10 lg:px-20">
      <div className="mx-auto grid w-full grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6 flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-3xl font-bold text-primary">diversity_3</span>
            <h2 className="text-2xl font-black tracking-tight">LingkarVisioner</h2>
          </div>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-400">
            Platform independen bagi generasi muda untuk mengeksplorasi gagasan, membangun kapasitas kepemimpinan, dan
            berkolaborasi demi masa depan Indonesia yang lebih baik.
          </p>
          <div className="flex gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-primary hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-primary hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">forum</span>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-primary hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-6 font-bold text-white">Navigasi</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link className="transition-colors hover:text-primary" href="/tentang">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-primary" href="#">
                Kegiatan Strategis
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-primary" href="/berita">
                Artikel & Opini
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-primary" href="#">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-bold text-white">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a className="transition-colors hover:text-primary" href="#">
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-primary" href="#">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-primary" href="#">
                Kode Etik
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 w-full border-t border-slate-800 pt-8 text-center text-xs">
        <p>© 2024 Lingkar Visioner Organization. Vision for Better Tomorrow.</p>
      </div>
    </footer>
  );
}
