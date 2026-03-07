import Link from 'next/link';

export default function ExpenseColumnPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-10">
			<h1 className="text-3xl md:text-4xl font-bold mb-6">
				副業で計上できる経費の具体例【どこまでOK？】
			</h1>

			<p className="text-gray-700 leading-relaxed mb-4">
				副業の税金は「収入 − 経費」で計算されます。
				つまり、経費を正しく計上することで税金を減らすことができます。
			</p>

			<p className="text-gray-700 leading-relaxed mb-8">
				しかし副業初心者の多くが
				<strong>「どこまで経費になるのか？」</strong>
				という点で悩んでいます。 ここでは副業でよく使われる経費を具体例付きで解説します。
			</p>

			<h2 className="text-2xl font-semibold mb-4">副業で認められる主な経費</h2>

			<div className="bg-gray-50 border rounded-xl p-6 mb-8">
				<ul className="list-disc pl-5 text-gray-700 space-y-2">
					<li>パソコン・周辺機器</li>
					<li>通信費（スマホ・ネット回線）</li>
					<li>書籍・教材費</li>
					<li>ソフトウェア利用料</li>
					<li>交通費</li>
					<li>消耗品</li>
				</ul>
			</div>

			<h2 className="text-2xl font-semibold mb-4">按分が必要な経費</h2>

			<p className="text-gray-700 leading-relaxed mb-4">
				私用と兼用する費用は、
				<strong>使用割合で分けて計上する必要があります。</strong>
			</p>

			<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
				<p className="font-semibold mb-2">例：通信費</p>
				<p>月8000円のスマホ料金 副業利用30%</p>
				<p className="font-semibold">→ 2400円が経費</p>
			</div>

			<h2 className="text-2xl font-semibold mb-4">よくあるNG例</h2>

			<ul className="list-disc pl-5 text-gray-700 mb-8 space-y-2">
				<li>生活費を経費にする</li>
				<li>趣味の書籍を経費にする</li>
				<li>私用スマホを全額経費</li>
			</ul>

			<div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
				<h2 className="text-xl font-semibold mb-3">副業の税額をシミュレーション</h2>

				<p className="text-gray-700 mb-4">
					収入と経費を入力すると、 所得税と住民税を自動計算できます。
				</p>

				<Link
					href="/calculator"
					className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
				>
					▶ 副業税金シミュレーター
				</Link>
			</div>
		</div>
	);
}
