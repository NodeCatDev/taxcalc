import Link from 'next/link';

export default function AiSideJobTaxPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-10">
			<h1 className="text-3xl md:text-4xl font-bold mb-6">
				ChatGPTプラスの月額料金は経費になる？AI副業の税金ガイド
			</h1>

			<p className="text-gray-700 leading-relaxed mb-4">
				ChatGPTや画像生成AIの普及により、AIを使った副業が急速に増えています。
				ブログ執筆、AIイラスト販売、プロンプト販売、AI動画制作など、
				個人でも収益化できる手段が増えてきました。
			</p>

			<p className="text-gray-700 leading-relaxed mb-4">
				しかし多くの人が悩むのが
				<strong>「AIツールの料金は経費になるのか？」</strong>
				という問題です。
			</p>

			<p className="text-gray-700 leading-relaxed mb-6">
				結論から言うと、副業収入に関連する支出であれば、
				<strong>
					ChatGPT Plus・Midjourney・GPUレンタルなどは経費として計上できる可能性があります。
				</strong>
				この記事では、AI副業で経費にできるものと注意点をわかりやすく解説します。
			</p>

			<div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
				<h2 className="text-xl font-semibold mb-2">副業の税額を先に知りたい方</h2>
				<p className="text-gray-700 mb-4">
					副業収入と経費を入力すると、所得税と住民税の概算を自動計算できます。
				</p>

				<Link
					href="/calculator"
					className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
				>
					▶ 副業税金シミュレーターを使う
				</Link>
			</div>

			<h2 className="text-2xl font-semibold mb-4">AIツールは経費になる？</h2>

			<p className="text-gray-700 leading-relaxed mb-4">
				税務上、経費として認められる条件は
				<strong>「収入を得るために必要な支出」</strong>
				であることです。
			</p>

			<p className="text-gray-700 leading-relaxed mb-4">
				AI副業の場合、以下のような支出は経費として認められる可能性があります。
			</p>

			<ul className="list-disc pl-5 text-gray-700 mb-8 space-y-2">
				<li>ChatGPT PlusなどのAIサブスク</li>
				<li>Midjourneyの画像生成ライセンス</li>
				<li>Stable DiffusionのクラウドGPU費用</li>
				<li>プロンプト素材購入</li>
				<li>画像素材・フォント購入</li>
			</ul>

			<h2 className="text-2xl font-semibold mb-4">プライベート利用がある場合</h2>

			<p className="text-gray-700 leading-relaxed mb-4">
				AIツールを私用でも使う場合は、
				<strong>「按分（あんぶん）」</strong>が必要です。
			</p>

			<p className="text-gray-700 leading-relaxed mb-4">
				例えばChatGPT Plus（月20ドル）を 副業用途50%で使っている場合は
			</p>

			<div className="bg-gray-100 rounded-lg p-4 mb-6">
				<p className="font-semibold">20ドル × 50% = 10ドルが経費</p>
			</div>

			<p className="text-gray-700 leading-relaxed mb-8">
				このように副業利用割合に応じて計上する必要があります。
			</p>

			<h2 className="text-2xl font-semibold mb-4">AI副業でよくある収入例</h2>

			<ul className="list-disc pl-5 text-gray-700 mb-8 space-y-2">
				<li>AIブログ記事作成</li>
				<li>AIイラスト販売</li>
				<li>プロンプト販売</li>
				<li>AI動画制作</li>
				<li>AIコンサル</li>
			</ul>

			<p className="text-gray-700 leading-relaxed mb-8">
				これらの副業ではAIツールの利用が収益と直接関係するため、
				経費として認められる可能性が高いと言えます。
			</p>

			<h2 className="text-2xl font-semibold mb-4">経費計上で重要なポイント</h2>

			<ul className="list-disc pl-5 text-gray-700 mb-10 space-y-2">
				<li>領収書や請求書を保存</li>
				<li>支出目的を記録</li>
				<li>副業利用割合を説明できるようにする</li>
			</ul>

			<div className="bg-green-50 border border-green-200 rounded-xl p-6">
				<h2 className="text-xl font-semibold mb-3">副業の税金を事前にチェック</h2>

				<p className="text-gray-700 mb-4">
					副業収入・経費を入力すると、 所得税と住民税の目安を計算できます。
				</p>

				<Link
					href="/calculator"
					className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
				>
					▶ 税額をシミュレーションする
				</Link>
			</div>
		</div>
	);
}
