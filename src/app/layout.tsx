import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '副業税金シミュレーター【2026年版】会社員・個人事業主対応',
  description:
    '副業で増える税金はいくら？本業年収・副業収入・経費を入力するだけで、所得税・住民税の増加額を自動計算。社会保険料・扶養控除にも対応した無料シミュレーターです。',
  keywords: [
    '副業 税金',
    '副業 税金 計算',
    '副業 住民税',
    '副業 シミュレーション',
  ],
  openGraph: {
    title: '副業税金シミュレーター【2026年版】',
    description:
      '副業で増える税金を簡単計算。社会保険料・扶養控除にも対応。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-gray-50">

        {/* メインコンテンツ */}
        <div className="flex-grow">
          {children}
        </div>

        {/* フッター */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-600 flex justify-between items-center">
            <div>© 2026 NodeCatDev</div>
            <div className="space-x-6">
              <Link href="/privacy" className="hover:text-black">
                プライバシーポリシー
              </Link>
              <Link href="/contact" className="hover:text-black">
                お問い合わせ
              </Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}