import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Diego Henriquez | Front End Developer",
  description: "Portfolio of Diego Henriquez, Front End Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shareTechMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
