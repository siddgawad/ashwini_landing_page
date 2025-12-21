import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwini Gawad - Best Clinical Dietitian Mumbai | 25+ Years Experience | Diabetes, PCOS, Weight Loss Expert",
  description:
    "Ashwini Gawad - Award-winning Clinical Dietitian in Mumbai with 25+ years experience. Expert in diabetes management, PCOS treatment, cardiac care, weight loss & elderly nutrition. Former VLCC Area Head. Online consultations available. Book now!",
  keywords:
    "Ashwini Gawad dietitian, best dietitian Mumbai, clinical dietitian Borivali, diabetes diet plan Mumbai, PCOS dietitian Mumbai, weight loss expert Mumbai, cardiac diet specialist, elderly nutrition Mumbai, online dietitian India, VLCC dietitian, nutritionist Maharashtra, diet counseling Mumbai, therapeutic diet planning, Indian diet plans",
  authors: [{ name: "Ashwini Gawad, MSc Dietetics" }],
  openGraph: {
    title: "Ashwini Gawad - Clinical Dietitian Mumbai | Diabetes, PCOS, Weight Loss Expert",
    description:
      "Transform your health with India's trusted clinical dietitian. 25+ years experience, 500+ success stories. Specialized in diabetes, PCOS, cardiac care & weight management.",
    type: "website",
    locale: "en_IN",
    siteName: "Ashwini Gawad - Clinical Dietitian",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwini Gawad - Best Clinical Dietitian Mumbai",
    description:
      "Award-winning dietitian with 25+ years experience. Diabetes, PCOS, weight loss expert. Book consultation now!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ashwinigawad.vercel.app/" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Borivali, Maharashtra" />
        <meta name="geo.position" content="19.2183;72.9781" />
        <meta name="ICBM" content="19.2183, 72.9781" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
