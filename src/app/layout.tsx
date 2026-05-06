import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://dentsspa.in"),
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
    "Model Colony dentist",
    "smile design Pune",
    "Invisalign Pune",
  ],
  authors: [{ name: "Dentsspa Dental Studio" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Dentsspa Dental Studio",
    title: "Dentsspa Dental Studio — Shivaji Nagar, Pune",
    description:
      "Dental clinic in Model Colony, Shivaji Nagar, Pune. Led by Dr. Priti Munde, BDS. Established 2011.",
    images: [{ url: "/Logo.png", width: 800, height: 200, alt: "Dentsspa Dental Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentsspa Dental Studio — Shivaji Nagar, Pune",
    description:
      "Dental clinic in Model Colony, Shivaji Nagar, Pune. Led by Dr. Priti Munde, BDS.",
    images: ["/Logo.png"],
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
