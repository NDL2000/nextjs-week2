import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Week 2",
  description: "Week 2 practice app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="flex gap-6 bg-blue-600 px-8 py-4">
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
          <Link href="/users" className="text-white">
            Users
          </Link>
        </nav>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
