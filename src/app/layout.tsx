import type { Metadata } from "next";
import { Inter, Calistoga, Space_Grotesk, Manrope, Barlow, Urbanist } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
const space_grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space"})
const barlow = Barlow({ subsets: ["latin"], variable: "--font-barlow", weight: ["400", "500", "600", "700"],
    display: "swap",});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700"],
    display: "swap",})
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist", weight: ["400", "500", "600", "700"],})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
            space_grotesk.variable,
          barlow.variable,
          manrope.variable,
          urbanist.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
