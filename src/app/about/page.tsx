import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
	title: '運営者情報 | 副業税金シミュレーター',
	description:
		'副業税金シミュレーターの運営者情報ページ。サイトの目的・免責事項・参考情報について掲載しています。',
	alternates: {
		canonical: '/about',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function AboutPage() {
	return (
		<>
			{/* Organization構造化データ */}
			<Script
				id="organization-structured-data"
				type="application/ld+json"
				strategy="afterInteractive"
			>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: '副業税金シミュレーター',
					url: 'https://tax-simulator.com',
					contactPoint: {
						'@type': 'ContactPoint',
						contactType: 'customer support',
						url: 'https://tax-simulator.com/contact',
					},
				})}
			</Script>

			<main className="min-h-screen bg-gray-50 px-6 py-16">
				<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
					<p className="text-sm text-gray-500 mb-4">最終更新日：2026年3月</p>

					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">運営者情報</h1>

					<section className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">サイトについて</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							副業税金シミュレーターは、副業をしている方・これから始める方が
							「税金がどれくらい増えるのか」を手軽に把握できるように作られた無料ツールです。
						</p>
						<p className="text-gray-600 leading-relaxed">
							登録不要・完全無料でご利用いただけます。
							入力された情報はサーバーに保存されず、ブラウザ上でのみ計算されます。
						</p>
					</section>

					<section className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">運営者</h2>
						<p className="text-gray-600 leading-relaxed">
							本サイトは個人により運営されています。 お問い合わせは
							<Link href="/contact" className="text-blue-600 underline">
								お問い合わせページ
							</Link>
							よりお願いいたします。
						</p>
					</section>

					<section className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">目的</h2>
						<p className="text-gray-600 leading-relaxed">
							副業収入が増えたときに、 「確定申告は必要？」 「住民税はどれくらい上がる？」
							といった不安を少しでも減らすことを目的としています。
						</p>
					</section>

					<section className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">参考情報</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							本サイトの計算ロジックは、国税庁が公開している情報を参考に作成しています。
						</p>
						<ul className="list-disc pl-5 text-gray-600 space-y-2">
							<li>国税庁「所得税の税率」</li>
							<li>国税庁「給与所得控除」</li>
							<li>各自治体の住民税（所得割10%）</li>
						</ul>
					</section>

					<section className="mb-10">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">免責事項</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							本サイトのシミュレーション結果は一般的な計算ロジックに基づく概算です。
						</p>
						<p className="text-gray-600 leading-relaxed">
							実際の税額は所得控除・扶養状況・各種条件により異なる場合があります。
							正確な金額については税理士または税務署へご確認ください。
						</p>
					</section>

					<div className="text-center mt-12">
						<Link
							href="/"
							className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
						>
							トップページへ戻る
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
