import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Shree Krishna Health Clinic | Professional Medical Care in Butwal",
  description: "Specialized care in Gynecology, Dermatology, and Orthopedics. Trusted doctors and modern facilities in Butwal, Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-extrabold text-primary leading-tight">
                Shree Krishna
              </span>
              <span className="text-xs tracking-[0.2em] font-medium text-secondary uppercase">
                Health Clinic
              </span>
            </Link>

            <ul className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gynecology", href: "/gynecology" },
                { name: "Dermatology", href: "/dermatology" },
                { name: "Orthopedics", href: "/orthopedics" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-secondary transition-all shadow-md active:scale-95"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>

            {/* Mobile menu trigger could be added here */}
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-neutral-base text-white">
          <div className="container mx-auto px-6 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div>
                  <span className="text-2xl font-bold text-white leading-tight">
                    Shree Krishna
                  </span>
                  <div className="text-xs tracking-[0.2em] font-medium text-accent uppercase">
                    Health Clinic
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Providing compassionate and expert medical services in Gynecology, Dermatology, and Orthopedics. Your health is our lifelong priority.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-white italic">Quick Links</h4>
                <ul className="space-y-3">
                  {["Home", "About Us", "Our Services", "Contact Us"].map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase().replace(" ", "")}`} className="text-gray-400 hover:text-accent text-sm transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-white italic">Our Services</h4>
                <ul className="space-y-3">
                  {["Gynecology & Obstetrics", "Laparoscopy", "Dermatology", "Orthopedics"].map((service) => (
                    <li key={service} className="text-gray-400 text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6 text-white italic">Get In Touch</h4>
                <div className="space-y-4 text-sm text-gray-400">
                  <p className="flex items-start space-x-3">
                    <span>📍</span>
                    <span>Puspalal Park-6, Butwal 32907, Nepal</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span>📞</span>
                    <span>+977 985-7086368</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span>✉️</span>
                    <span>info@shreekrishnaclinic.com</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
              <p>© 2026 Shree Krishna Health Clinic. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
