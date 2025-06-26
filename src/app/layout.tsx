import type { Metadata } from "next";
import { Inter, Space_Grotesk, Manrope, Barlow, Urbanist } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Local Fonts
const calistoga = localFont({
    src: './fonts/Calistoga/Calistoga-Regular.ttf',
    variable: '--font-calistoga',
    display: 'swap',
});

const spaceGrotesk = localFont({
    src: './fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf',
    variable: '--font-space',
    display: 'swap',
});

const barlow = localFont({
    src: './fonts/Barlow/Barlow-Regular.ttf',
    variable: "--font-barlow",
    display: "swap",
});

const manrope = localFont({
    src: './fonts/Manrope/Manrope-VariableFont_wght.ttf',
    variable: "--font-manrope",
    display: "swap",
});

const urbanist = localFont({
    src: './fonts/Urbanist/Urbanist-VariableFont_wght.ttf',
    variable: "--font-urbanist",
    display: "swap",
});

// Google Fonts
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

// const spaceGrotesk = Space_Grotesk({
//     subsets: ["latin"],
//     variable: "--font-space",
//     display: "swap",
// });

// const barlow = Barlow({
//     subsets: ["latin"],
//     variable: "--font-barlow",
//     display: "swap",
//     weight: ["400", "500", "600", "700"],
// });

// const manrope = Manrope({
//     subsets: ["latin"],
//     variable: "--font-manrope",
//     display: "swap",
//     weight: ["400", "500", "600", "700"],
// });

// const urbanist = Urbanist({
//     subsets: ["latin"],
//     variable: "--font-urbanist",
//     display: "swap",
//     weight: ["400", "500", "600", "700"],
// });

// Metadata
export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Created with the help of Frontend Tribe",
};

// Root Layout
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
                spaceGrotesk.variable,
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
