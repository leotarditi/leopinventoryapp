import type { Metadata } from "next";

import "./globals.css";

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
      <body className="container mx-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-[#fffade] text-[#000540] px-4">
        <header className="text-2xl font-bold leading-[3rem] text-center bg-[#000540] text-[#fffade] py-2">
          LeoPinventoryApp
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center text-sm leading-[3rem] text-[#000540] opacity-70">
          © {new Date().getFullYear()} LeoPinventoryApp
        </footer>
      </body>
    </html>
  );
}
