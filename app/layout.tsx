import type { Metadata } from "next";
import { Bitcount_Grid_Double } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const bitcountGridSingle = localFont({
  src: './fonts/BitcountGridSingle.ttf',
  variable: "--font-bitcount-grid-single"
});

const bitcountGridDouble = localFont({
  src: './fonts/BitcountGridDouble.ttf',
  variable: "--font-bitcount-grid-double"
});

const bitcountPropSingle = localFont({
  src: './fonts/BitcountPropSingle.ttf',
  variable: "--font-bitcount-prop-single"
});
const bitcountPropDouble = localFont({
  src: './fonts/BitcountPropDouble.ttf',
  variable: "--font-bitcount-prop-double"
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Made with React, NextJS, ShadCN, Tailwind, Gsap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bitcountGridSingle.variable} ${bitcountGridDouble.variable} ${bitcountPropSingle.variable} ${bitcountPropDouble.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
