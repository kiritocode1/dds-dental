import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const SITE_URL = "https://dentsspa.in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F4" },
    { media: "(prefers-color-scheme: dark)", color: "#FAF8F4" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Dentsspa Dental Studio",
  title: {
    default:
      "Dentsspa Dental Studio — Dr. Priti Munde, BDS · Shivaji Nagar, Pune",
    template: "%s · Dentsspa Dental Studio",
  },
  description:
    "Dental clinic in Model Colony, Shivaji Nagar, Pune. Cosmetic dentistry, implants, smile design and general dental care, led by Dr. Priti Munde, BDS, with 17 years of practice. Established 2011.",
  keywords: [
    "dentist Pune",
    "dental clinic Shivaji Nagar",
    "cosmetic dentist Pune",
    "dental implants Pune",
    "Dr Priti Munde",
    "Dentsspa",
    "Dentsspa Dental Studio",
    "Model Colony dentist",
    "smile design Pune",
    "Invisalign Pune",
    "dental veneers Pune",
    "best dentist near Shivaji Nagar",
  ],
  authors: [{ name: "Dr. Priti Munde", url: SITE_URL }],
  creator: "Dentsspa Dental Studio",
  publisher: "Dentsspa Dental Studio",
  category: "health",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Dentsspa Dental Studio",
    title: "Dentsspa Dental Studio — Shivaji Nagar, Pune",
    description:
      "Dental clinic in Model Colony, Shivaji Nagar, Pune. Led by Dr. Priti Munde, BDS. Established 2011.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentsspa Dental Studio — Shivaji Nagar, Pune",
    description:
      "Dental clinic in Model Colony, Shivaji Nagar, Pune. Led by Dr. Priti Munde, BDS.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/Logo.png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Dentsspa",
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5345;73.8389",
    ICBM: "18.5345, 73.8389",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={cn(
        "h-full antialiased",
        inter.variable,
        fraunces.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
