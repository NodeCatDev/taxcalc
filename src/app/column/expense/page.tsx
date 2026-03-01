import Link from 'next/link';

export const metadata = {
	title: '副業経費と節税の基本 | 副業税金シミュレーター',
	description:
		'副業の経費計上や節税のポイントをわかりやすく解説。正しく控除して税負担を減らす方法を紹介します。',
};

export default function Column2Page() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-16">
			<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
				<h1 className="text-3xl font-bold mb-8 border-b pb-4">副業経費と節税の基本</h1>

				<section className="mb-6 text-gray-700 leading-relaxed">
					<p>
						副業を行うと、収入だけでなく経費の管理も重要になります。
						経費として認められる支出は所得から差し引くことができるため、正しく計上することで所得税・住民税の負担を軽減できます。
					</p>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold mb-3">経費にできる支出の例</h2>
					<ul className="list-disc pl-5 space-y-2 text-gray-700">
						<li>通信費：副業で使用するインターネットや携帯電話の費用</li>
						<li>PC・周辺機器：業務で必要なパソコンやプリンタなど</li>
						<li>書籍・教材：業務に必要な書籍やオンライン講座費用</li>
						<li>消耗品：文房具や事務用品</li>
						<li>交通費：副業で必要な移動費</li>
					</ul>
				</section>

				<section className="mb-6">
					<h2 className="text-xl font-semibold mb-3">経費計上のポイント</h2>
					<ul className="list-disc pl-5 space-y-2 text-gray-700">
						<li>副業に関連する支出であることを明確にする</li>
						<li>領収書や明細を必ず保管する</li>
						<li>プライベートとの按分が必要な場合は合理的な方法で分ける</li>
						<li>税務署に問い合わせや相談も検討する</li>
					</ul>
				</section>

				<section className="mb-6 text-gray-700 leading-relaxed">
					<p>
						経費を正しく計上することで、赤字になった場合は翌年以降の損益通算や繰越控除にも活用できます。
						副業収入の税負担を少しでも軽減したい場合は、日々の支出管理を意識することが大切です。
					</p>
				</section>

				<section className="mt-12 text-center">
					<Link
						href="/calculator"
						className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
					>
						▶ 副業の税額をシミュレーションする
					</Link>
				</section>
			</div>
		</main>
	);
}
