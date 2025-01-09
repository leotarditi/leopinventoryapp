import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LeoPinventoryApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full mx-auto bg-[#fffade] text-[#000540]">
        <header className="text-2xl font-bold leading-[3rem] text-center bg-[#000540] text-[#fffade] py-2">
          <Link href="/">LeoPinventoryApp</Link>
        </header>
        <main className="py-8 min-h-screen">{children}</main>
        <footer className="text-center text-sm leading-[3rem] text-[#000540] opacity-70">
          © {new Date().getFullYear()} LeoPinventoryApp
        </footer>
      </body>
    </html>
  );
}
