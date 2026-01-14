import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";
import { Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import SmoothScrolling from "@/components/SmoothScrolling";
import SVGLoader from "@/components/SVGloader";

// Optimize font loading
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// -----------------------
// Metadata
// -----------------------
export const metadata = {
  title: "Divine Ezechukwu - Software Developer Portfolio",
  description:
    "Divine Ezechukwu is a frontend and full-stack developer creating professional, scalable, and SEO-friendly websites and web applications that help businesses grow online.",
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
    "Portfolio Website",
    "SEO Optimization",
    "Web Applications",
    "Freelance Developer",
    "UI/UX",
    "Performance Optimization",
    "Professional Websites",
    "Portfolio Showcase",
    "Software Engineering",
  ],
  verification: {
    google: "ltfOnPx-NMzt2vBROfh-jAQr5R-U7ynE-3t3kmMTJGo", // keep if this is your GA/site verification
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  robots: {
    googleBot: {
      index: true,
    },
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Ezechukwu - Software Developer Portfolio",
    description:
      "Divine Ezechukwu builds professional, scalable, and SEO-friendly websites and web applications that help businesses succeed online.",
    creator: "@DYNANIXw5", // change to your own Twitter handle if you have one
  },
};


// -----------------------
// Viewport (Next.js 14 compliant)
// -----------------------
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// -----------------------
// Root Layout Component
// -----------------------
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-2PKP3NR2VS"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2PKP3NR2VS');
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
