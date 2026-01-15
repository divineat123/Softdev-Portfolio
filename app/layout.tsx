import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";
import { Outfit } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import SVGLoader from "@/components/SVGloader";
import type { Metadata, Viewport } from "next";

// -----------------------
// Font
// -----------------------
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// -----------------------
// Metadata
// -----------------------
export const metadata: Metadata = {
  title: "Divine Ezechukwu – Software Developer Portfolio",
  description:
    "Divine Ezechukwu is a frontend and full-stack developer building clean, responsive, and SEO-friendly websites and web applications.",
  keywords: [
    "Divine Ezechukwu",
    "Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Responsive Web Design",
    "Web Development Portfolio",
    "UI/UX",
    "SEO Optimization",
  ],
  verification: {
    google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo",
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Ezechukwu – Software Developer Portfolio",
    description:
      "Frontend and full-stack developer creating scalable, high-performance web applications.",
    creator: "@DYNANIXw5",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// -----------------------
// Viewport
// -----------------------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// -----------------------
// Root Layout
// -----------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-X843JX6GM7"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X843JX6GM7');
  `}
      </Script>

      <body className="antialiased overflow-x-hidden bg-[#ebebf3]">
        <SVGLoader />
        <NavBar />
        <SmoothScrolling>
          <main className="relative">{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
