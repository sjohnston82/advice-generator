import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

export const metadata: Metadata = {
  title: "Advice Generator",
  description: "Advice Generator App by Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-[#141414] min-h-screen flex justify-center items-center`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
