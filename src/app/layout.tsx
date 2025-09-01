import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Numerious - Thần Số Học Việt Nam",
  description:
    "Khám phá bí ẩn của các con số trong cuộc sống bạn. Máy tính thần số học, ý nghĩa các con số, tương thích và nhiều hơn nữa.",
  keywords:
    "thần số học, numerology, máy tính thần số học, ý nghĩa số, tương thích số học, Việt Nam",
  authors: [{ name: "Numerious Team" }],
  creator: "Numerious",
  publisher: "Numerious",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://numerious.vn"),
  openGraph: {
    title: "Numerious - Thần Số Học Việt Nam",
    description: "Khám phá bí ẩn của các con số trong cuộc sống bạn",
    url: "https://numerious.vn",
    siteName: "Numerious",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numerious - Thần Số Học Việt Nam",
    description: "Khám phá bí ẩn của các con số trong cuộc sống bạn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={montserrat.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
