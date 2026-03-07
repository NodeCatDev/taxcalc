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
		'副業で増える税金はいくら？本業年収・副業収入・経費を入力するだけで、所得税・住民税の増加額を自動計算。',
	keywords: ['副業 税金', '副業 税金 計算', '副業 住民税'],
	alternates: { canonical: '/' },
	robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
				<Script id="structured-data" type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: '副業税金シミュレーター',
						url: 'https://tax-simulator.com',
					})}
				</Script>

				<header className="bg-white border-b">
					<div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
						<Link href="/" className="font-bold text-xl">
							副業税金シミュレーター
						</Link>

						<nav className="flex gap-6 text-sm text-gray-600">
							<Link href="/calculator" className="hover:text-blue-600 transition">
								計算する
							</Link>
							<Link href="/about" className="hover:text-blue-600 transition">
								このサイトについて
							</Link>
							<Link href="/contact" className="hover:text-blue-600 transition">
								お問い合わせ
							</Link>
						</nav>
					</div>
				</header>

				<main className="flex-grow max-w-5xl mx-auto px-6 py-12">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
