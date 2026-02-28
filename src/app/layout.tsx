import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "副業税金シミュレーター【2026年版】会社員・個人事業主対応",
  description:
    "副業で増える税金はいくら？本業年収・副業収入・経費を入力するだけで、所得税・住民税の増加額を自動計算。社会保険料・扶養控除にも対応した無料シミュレーターです。",
  keywords: [
    "副業 税金",
    "副業 税金 計算",
    "副業 住民税",
    "副業 シミュレーション",
  ],
  openGraph: {
    title: '副業税金シミュレーター',
    description: '副業で増える税金を自動計算できる無料シミュレーター',
    url: 'https://tax-simulator.com',
    siteName: '副業税金シミュレーター',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://tax-simulator.com/og',
        width: 1200,
        height: 630,
        alt: '副業税金シミュレーター',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '副業税金シミュレーター【2026年版】',
    description:
      '副業で増える税金を自動計算。会社員向け対応。',
    images: ['https://tax-simulator.com/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-gray-50">
        
        {/* メインコンテンツ */}
        <div className="flex-grow">
          {children}
        </div>

        {/* 共通フッター */}
        <Footer />

      </body>
    </html>
  );
}