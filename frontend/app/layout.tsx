import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lingkar Visioner",
    template: "%s | Lingkar Visioner",
  },
  description: "Wadah kolaborasi strategis untuk pengembangan kepemimpinan, organisasi, politik, dan kewirausahaan pemuda.",
  keywords: ["Lingkar Visioner", "LIVI", "Kepemimpinan Pemuda", "Organisasi", "Politik Pemuda", "Kewirausahaan", "Ketapang", "Pemuda Visioner"],
  authors: [{ name: "Lingkar Visioner" }],
  creator: "Lingkar Visioner",
  publisher: "Lingkar Visioner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lingkarvisioner.com",
    siteName: "Lingkar Visioner",
    title: "Lingkar Visioner - Wadah Perkembangan Pemuda",
    description: "Membentuk pemimpin masa depan melalui inovasi sosial, kewirausahaan, dan dampak nyata bagi masyarakat.",
    images: [
      {
        url: "/og-image.png", // Assuming this will be created or exists
        width: 1200,
        height: 630,
        alt: "Lingkar Visioner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingkar Visioner",
    description: "Wadah kolaborasi strategis untuk pengembangan kepemimpinan pemuda.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "t4oyTwy8y4bSAhsIkwRV0qQN_jdpHEVhFYKa1JsTK2w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-background-light text-slate-900 transition-colors duration-300 dark:bg-background-dark dark:text-slate-100 font-display m-0 p-0 w-full antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen w-full flex-col">
              <LayoutWrapper>{children}</LayoutWrapper>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
