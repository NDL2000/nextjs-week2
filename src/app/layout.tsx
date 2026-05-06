import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Week 2',
  description: 'Backend in Next.js — Server Actions, Service, Repository',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        {/* Navbar */}
        <header className="border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="font-semibold text-gray-800">Next.js W2</span>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/users" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Users
            </Link>
          </nav>
        </header>

        {/* Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 px-8 py-8">
          <div className="max-w-5xl mx-auto flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  N
                </div>
                <span className="font-semibold text-gray-800">Next.js W2</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Week 2 demo app — Backend in Next.js with Server Actions.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
              <Link href="/users" className="hover:text-gray-800 transition-colors">Users</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
