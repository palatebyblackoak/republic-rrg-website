import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Republic of the Rio Grande · Grill & Cantina · McAllen, TX",
  description:
    "A McAllen dining institution since 1998. Fire-crafted steaks, seafood, and Latin cuisine on our legendary covered patio.",
  metadataBase: new URL("https://republicoftheriogrande.com"),
  openGraph: {
    title: "Republic of the Rio Grande",
    description:
      "Est. 1998 · McAllen, TX. Steaks, seafood, brick oven, cantina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-bg text-cream">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
