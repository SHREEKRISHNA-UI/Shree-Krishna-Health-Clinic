import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Krishna Health Clinic",
  description: "Gynecology, Dermatology, and Orthopedics care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <span className="text-xl font-semibold">
              Shree Krishna Health Clinic
            </span>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gynecology" className="text-gray-700 hover:text-gray-900">
                  Gynecology
                </Link>
              </li>
              <li>
                <Link href="/laparoscopy" className="text-gray-700 hover:text-gray-900">
                  Laparoscopy
                </Link>
              </li>
              <li>
                <Link href="/dermatology" className="text-gray-700 hover:text-gray-900">
                  Dermatology
                </Link>
              </li>
              <li>
                <Link href="/orthopedics" className="text-gray-700 hover:text-gray-900">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-100 mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            <p>© 2026 Shree Krishna Health Clinic. All rights reserved.</p>
            <p>Puspalal Park-6, Butwal 32907 | +977 985-7086368, 985-7083903</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
