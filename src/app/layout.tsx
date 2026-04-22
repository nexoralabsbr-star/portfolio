import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NexoraLabs | Engenharia de Elite & Inteligência Artificial",
  description: "Transformamos gargalos tecnológicos em motores de crescimento autônomos. Growth Architecture, IA e Sistemas de Alta Performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans antialiased`}>
      <body
        className="flex min-h-screen bg-center selection:bg-slate-900 selection:text-white xl:p-8 text-slate-800 bg-zinc-500 bg-cover px-0 py-0 relative items-start"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
