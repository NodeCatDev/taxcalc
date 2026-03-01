import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
	title: '副業20万円ルールとは？住民税と会社バレの基礎知識',
	description:
		'副業20万円ルールの正しい理解と、住民税で会社にバレない方法を解説。副業税金シミュレーターへの導線付き。',
};

export default function ColumnFAQ20() {
	return (
		<>
			{/* FAQ構造化データ（このコラムに関連する質問） */}
			<Script id="faq20-structured-data" type="application/ld+json" strategy="afterInteractive">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: '副業はいくらから確定申告が必要ですか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '給与所得者の場合、副業所得が年間20万円を超えると確定申告が必要になります。',
							},
						},
						{
							'@type': 'Question',
							name: '住民税で副業は会社にバレますか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '住民税の徴収方法を普通徴収にすれば、会社経由での通知を避けられる可能性があります。',
							},
						},
					],
				})}
			</Script>

			<main className="min-h-screen bg-gray-50 px-6 py-16">
				<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-10 md:p-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-6">
						副業20万円ルールとは？住民税と会社バレの基礎知識
					</h1>

					<p className="text-gray-700 mb-6 leading-relaxed">
						副業を始めるとよく聞く「20万円までは申告不要」というルール。しかし、住民税の取り扱いや会社への通知を正しく理解していないと、思わぬトラブルにつながることもあります。
					</p>

					<h2 className="text-2xl font-semibold mb-4">副業20万円ルールとは？</h2>
					<p className="text-gray-700 mb-4 leading-relaxed">
						副業で得た「所得」が年間20万円以下の場合、所得税の確定申告は原則不要です。
					</p>
					<p className="text-gray-700 mb-4 leading-relaxed">
						<strong>ポイント：</strong>
						収入ではなく「所得」です。売上から経費を引いた額が対象になります。
					</p>

					<table className="w-full border mb-6 text-sm text-gray-700">
						<thead>
							<tr className="bg-gray-100">
								<th className="border px-2 py-1">売上</th>
								<th className="border px-2 py-1">経費</th>
								<th className="border px-2 py-1">所得</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border px-2 py-1">30万円</td>
								<td className="border px-2 py-1">15万円</td>
								<td className="border px-2 py-1">15万円</td>
							</tr>
						</tbody>
					</table>

					<h2 className="text-2xl font-semibold mb-4">住民税は別ルール</h2>
					<p className="text-gray-700 mb-4 leading-relaxed">
						住民税には20万円ルールがありません。副業所得が1円でもあれば住民税の申告が必要です。
					</p>

					<h2 className="text-2xl font-semibold mb-4">会社にバレる理由</h2>
					<p className="text-gray-700 mb-4 leading-relaxed">
						会社は市区町村から従業員の住民税額の通知を受けます。副業分が加算されると、給与だけでは説明できない住民税額となり、会社に知られる可能性があります。
					</p>

					<h2 className="text-2xl font-semibold mb-4">会社にバレにくくする方法</h2>
					<p className="text-gray-700 mb-4 leading-relaxed">
						確定申告時に<strong>住民税の徴収方法を「自分で納付（普通徴収）」</strong>
						に設定することで、副業分の住民税を自分で支払うことができます。
					</p>

					<h2 className="text-2xl font-semibold mb-4">副業で確定申告が必要になるケース</h2>
					<ul className="list-disc pl-5 text-gray-700 mb-6">
						<li>副業所得が20万円超</li>
						<li>医療費控除やふるさと納税の申告予定がある場合</li>
						<li>一度でも確定申告するなら、副業分も含める</li>
					</ul>

					<h2 className="text-2xl font-semibold mb-4">税額の目安</h2>
					<p className="text-gray-700 mb-4 leading-relaxed">
						副業の税金は所得税（累進課税）・住民税（約10％）・場合によっては国民健康保険料が増加します。金額の目安は
						<Link href="/calculator" className="text-blue-600 underline">
							副業税金シミュレーター
						</Link>
						で簡単に確認できます。
					</p>

					<h2 className="text-2xl font-semibold mb-4">まとめ</h2>
					<ul className="list-disc pl-5 text-gray-700">
						<li>20万円ルールは「所得税のみ」</li>
						<li>住民税は別途申告が必要</li>
						<li>会社バレ対策は普通徴収に設定</li>
						<li>迷ったらシミュレーションで確認</li>
					</ul>

					<section className="text-center mt-8">
						<Link
							href="/calculator"
							className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
						>
							▶ 今すぐ副業税金を計算する
						</Link>
					</section>
				</div>
			</main>
		</>
	);
}
