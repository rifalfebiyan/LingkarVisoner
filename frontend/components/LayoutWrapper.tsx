"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Pages that should NOT have the global Navbar and Footer
  const noLayoutPages = ["/login", "/daftar", "/dashboard"];
  const isNoLayout = noLayoutPages.some(page => pathname === page || pathname?.startsWith("/dashboard"));

  if (isNoLayout) {
    return <main className="flex-1 w-full">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24 md:pt-28 lg:pt-32">{children}</main>
      <Footer />
    </>
  );
}
