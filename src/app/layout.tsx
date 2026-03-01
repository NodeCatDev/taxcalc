import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';
import Footer from './components/Footer';

export const metadata: Metadata = {
	metadataBase: new URL('https://tax-simulator.com'),
	title: {
		default: '副業税金シミュレーター【2026年版】会社員・個人事業主対応',
		template: '%s | 副業税金シミュレーター',
	},
	description:
		'副業で増える税金はいくら？本業年収・副業収入・経費を入力するだけで、所得税・住民税の増加額を自動計算。社会保険料・扶養控除にも対応した無料シミュレーターです。',
	keywords: ['副業 税金', '副業 税金 計算', '副業 住民税', '副業 シミュレーション'],
	alternates: { canonical: '/' },
	robots: { index: true, follow: true },
	openGraph: {
		title: '副業税金シミュレーター【2026年版】',
		description: '副業で増える税金を自動計算できる無料シミュレーター。会社員・個人事業主対応。',
		url: '/',
		siteName: '副業税金シミュレーター',
		locale: 'ja_JP',
		type: 'website',
		images: [{ url: '/og', width: 1200, height: 630, alt: '副業税金シミュレーター' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: '副業税金シミュレーター【2026年版】',
		description: '副業で増える税金を自動計算。会社員向け対応の無料ツール。',
		images: ['/og'],
	},
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
				{/* 構造化データ（SEO強化） */}
				<Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: '副業税金シミュレーター',
						url: 'https://tax-simulator.com',
						description: '副業で増える税金（所得税・住民税）を自動計算できる無料シミュレーター。',
						inLanguage: 'ja',
					})}
				</Script>

				{/* ヘッダー */}
				<header className="border-b bg-white">
					<div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
						<Link href="/" className="font-bold text-lg">
							副業税金シミュレーター
						</Link>
						<nav className="text-sm space-x-4">
							<Link href="/calculator" className="hover:underline">
								計算する
							</Link>
							<Link href="/about" className="hover:underline">
								このサイトについて
							</Link>
							<Link href="/contact" className="hover:underline">
								お問い合わせ
							</Link>
						</nav>
					</div>
				</header>

				{/* メイン */}
				<main className="flex-grow max-w-4xl mx-auto px-4 py-6">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
