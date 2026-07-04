import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhruv Alpeshkumar Parekh — Marriage Biodata",
  description:
    "Personal marriage biodata portfolio of Dhruv Alpeshkumar Parekh — a sincere, ambitious, and family-oriented individual currently residing in Canada.",
  keywords: [
    "marriage biodata",
    "Dhruv Parekh",
    "biodata portfolio",
    "personal profile",
  ],
  authors: [{ name: "Dhruv Alpeshkumar Parekh" }],
  openGraph: {
    title: "Dhruv Alpeshkumar Parekh — Marriage Biodata",
    description:
      "Building a future rooted in family, ambition & love",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-ivory text-charcoal font-body">
        {children}
      </body>
    </html>
  );
}
