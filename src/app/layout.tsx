import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: {
    default: "Vanishd - Real-World Chase Game",
    template: "%s | Vanishd",
  },
  description:
    "One hides. The rest hunt. Vanishd turns your city into a real-time GPS chase game. Play with friends, use special items, and catch Agent X before time runs out.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Vanishd - Real-World Chase Game",
    description:
      "One hides. The rest hunt. Your city is the game board.",
    images: ["/logo.png"],
  },
};

function Header() {
  return (
    <header className="border-b border-border bg-bg-primary/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Vanishd" className="w-8 h-8" />
          <span className="text-lg font-bold text-text-primary">
            Vanish<span className="text-accent">d</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/support"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Vanishd" className="w-6 h-6" />
            <span className="text-sm font-semibold text-text-primary">
              Vanish<span className="text-accent">d</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="/support" className="hover:text-text-secondary transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <a
              href="mailto:privacy@pursuitlabs.dev"
              className="hover:text-text-secondary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <p className="text-center text-text-muted text-xs mt-6">
          &copy; 2026 Pursuit Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
