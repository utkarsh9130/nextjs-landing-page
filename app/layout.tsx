import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Expense Manager - Smart Expense Tracking & Budget Planning",
  description:
    "Track expenses, manage budgets, and grow your savings with AI. Automated receipt scanning, intelligent cash flow forecasts, and real-time financial insights.",
  keywords: [
    "AI Expense Manager",
    "AI expense tracking",
    "Smart budget planning",
    "Financial insights",
    "Personal finance app",
    "Automated budget tracker",
    "Receipt scanner AI",
    "Savings optimizer",
  ],
  authors: [{ name: "AI Expense Manager Team" }],
  creator: "AI Expense Manager",
  publisher: "AI Expense Manager Inc.",
  metadataBase: new URL("https://nextjs-landing-page-ai-expense-manager.vercel.app"),
  openGraph: {
    title: "AI Expense Manager - Track Expenses & Grow Savings with AI",
    description:
      "Track expenses, manage budgets, and grow your savings with AI. Autonomous finance tools built for modern individuals and teams.",
    url: "https://nextjs-landing-page-ai-expense-manager.vercel.app",
    siteName: "AI Expense Manager",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Expense Manager Landing Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Expense Manager - Autonomous Finance with AI",
    description:
      "Track expenses, manage budgets, and grow your savings with AI.",
    creator: "@aiexpensemgr",
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
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Expense Manager",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    description:
      "Track expenses, manage budgets, and grow your savings with AI. Automated receipt scanning, intelligent cash flow forecasts, and real-time financial insights.",
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
