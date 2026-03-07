import Link from 'next/link';
import Accordion from './components/Accordion';

export default function HomePage() {
	return (
		<div className="space-y-16">
			{/* HERO */}
			<section className="text-center bg-white p-10 rounded-2xl shadow-sm">
				<h1 className="text-4xl font-bold mb-4">副業税金シミュレーター</h1>

				<p className="text-gray-600 mb-8">
					副業で増える<strong>所得税・住民税</strong>を自動計算。
					<br />
					本業年収と副業利益を入力するだけ。
				</p>

				<Link
					href="/calculator"
					className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
				>
					無料でシミュレーション
				</Link>
			</section>

			{/* COLUMN */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<h2 className="text-2xl font-bold mb-8">副業の税金ガイド</h2>

				<div className="grid md:grid-cols-2 gap-6">
					<Link
						href="/column/ai-side-job"
						className="border rounded-xl p-6 hover:shadow-lg transition"
					>
						<h3 className="font-semibold mb-2">AI副業の経費ガイド</h3>
						<p className="text-gray-600 text-sm">ChatGPT・MidjourneyなどAIツールの経費計上を解説</p>
					</Link>

					<Link href="/column/expense" className="border rounded-xl p-6 hover:shadow-lg transition">
						<h3 className="font-semibold mb-2">副業で計上できる経費</h3>
						<p className="text-gray-600 text-sm">副業の経費例と注意点を解説</p>
					</Link>

					<Link href="/column/faq20" className="border rounded-xl p-6 hover:shadow-lg transition">
						<h3 className="font-semibold mb-2">会社に副業がバレる原因</h3>
						<p className="text-gray-600 text-sm">住民税の仕組みと普通徴収</p>
					</Link>

					<Link
						href="/column/resident-tax-trap"
						className="border rounded-xl p-6 hover:shadow-lg transition"
					>
						<h3 className="font-semibold mb-2">20万円以下の罠</h3>
						<p className="text-gray-600 text-sm">住民税で副業がバレる理由</p>
					</Link>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-white p-10 rounded-2xl shadow-sm">
				<h2 className="text-2xl font-bold mb-6">よくある質問</h2>

				<Accordion
					title="副業はいくらから確定申告が必要？"
					content="給与所得者の場合、副業所得が20万円を超えると確定申告が必要です。"
				/>

				<Accordion
					title="住民税で副業はバレる？"
					content="住民税を普通徴収にすることで会社通知を避けられる場合があります。"
				/>

				<Accordion title="副業の税率は？" content="所得税は5〜45%、住民税は10%です。" />
			</section>

			{/* DISCLAIMER */}
			<section className="text-sm text-gray-600 bg-gray-100 p-8 rounded-xl">
				<h3 className="font-semibold mb-3">免責事項</h3>
				<p>
					本サイトのシミュレーションは概算です。 正確な税額は税務署または税理士へご確認ください。
				</p>
			</section>
		</div>
	);
}
