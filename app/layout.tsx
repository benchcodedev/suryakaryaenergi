import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://suryakaryaenergi.com"),
  title: {
    default: "PT Surya Karya Energi — Solusi Rekayasa & Energi Terbarukan",
    template: "%s | PT Surya Karya Energi",
  },
  description: "Penyedia solusi dan jasa EPC (Engineering, Procurement, Construction) energi surya, pembangkit listrik terbarukan, dan infrastruktur energi terintegrasi di Indonesia.",
  keywords: ["EPC Solar", "PLTS Atap", "Energi Terbarukan Indonesia", "Solar PV EPC", "PT Surya Karya Energi", "Pembangkit Listrik"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://suryakaryaenergi.com",
    siteName: "PT Surya Karya Energi",
    title: "PT Surya Karya Energi — Solusi Rekayasa & Energi Terbarukan",
    description: "Rekayasa teknik andal dan konstruksi infrastruktur energi bersih untuk masa depan industri Indonesia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Surya Karya Energi Corporate Portal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-brown-900">
        {children}
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "8px",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}