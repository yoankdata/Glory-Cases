import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TextMarquee } from "@/components/ui/TextMarquee";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glory Cases - Étuis à Lunettes Premium | Abidjan",
  description: "Glory Cases : Étuis à lunettes faits main à Abidjan. Cuir vegan, Wax, Raphia. L'excellence artisanale ivoirienne pour protéger vos lunettes avec style.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col bg-brand-canvas text-text-main`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <TextMarquee />
        <Footer />
      </body>
    </html>
  );
}
