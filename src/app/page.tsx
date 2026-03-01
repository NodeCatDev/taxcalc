import Link from 'next/link';
import Script from 'next/script';
import Accordion from './components/Accordion';

export default function HomePage() {
	return (
		<>
			{/* FAQ構造化データ */}
			<Script id="faq-structured-data" type="application/ld+json" strategy="afterInteractive">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: '副業はいくらから確定申告が必要ですか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '給与所得者の場合、副業所得（収入−経費）が年間20万円を超えると確定申告が必要になります。',
							},
						},
						{
							'@type': 'Question',
							name: '住民税で副業は会社にバレますか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '確定申告時に住民税の徴収方法を「普通徴収」に選択することで、会社経由の通知を避けられる可能性があります。',
							},
						},
						{
							'@type': 'Question',
							name: '副業の税金は何％くらいかかりますか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '所得税は5〜45％の累進課税、住民税は原則10％です。実際の負担率は本業年収によって変わります。',
							},
						},
					],
				})}
			</Script>

			<div className="max-w-4xl mx-auto px-4 py-10">
				{/* ヒーロー */}
				<section className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-4">
						副業税金シミュレーター【2026年版】
					</h1>

					<p className="text-gray-600 mb-6">
						副業で増える<strong>所得税・住民税</strong>はいくら？
						<br />
						会社員向けに、本業年収と副業利益をもとに自動計算できます。
					</p>

					<Link
						href="/calculator"
						className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
					>
						▶ 無料でシミュレーションする
					</Link>
				</section>

				{/* コラムへのリンク */}
				<section className="grid md:grid-cols-2 gap-6 mb-12 text-center">
					<Link
						href="/column/expense"
						className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
					>
						▶ 経費計上の詳しい解説
					</Link>

					<Link
						href="/column/faq20"
						className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
					>
						▶ 副業20万円ルール FAQ
					</Link>
				</section>

				{/* FAQ Accordion */}
				<section>
					<h2 className="text-xl font-bold mb-6">よくある質問（FAQ）</h2>
					<Accordion
						title="副業はいくらから確定申告が必要ですか？"
						content="給与所得者の場合、副業所得（収入−経費）が年間20万円を超えると確定申告が必要です。"
					/>
					<Accordion
						title="住民税で副業は会社にバレますか？"
						content="住民税の徴収方法を普通徴収に選択すれば、会社経由での通知を避けられる可能性があります。"
					/>
					<Accordion
						title="副業の税金はどのくらい増えますか？"
						content="所得税は累進課税、住民税は約10％です。本業年収が高いほど副業分の税率も高くなります。"
					/>
				</section>

				{/* 免責事項 */}
				<section className="mt-12 text-sm text-gray-600 leading-relaxed bg-gray-100 p-6 rounded-xl">
					<h3 className="font-semibold mb-3">免責事項</h3>
					<p>
						本サイトのシミュレーションは概算計算を目的としています。
						実際の税額は控除状況や自治体により異なります。
						正確な税額については税務署または税理士へご確認ください。
					</p>
				</section>
			</div>
		</>
	);
}
