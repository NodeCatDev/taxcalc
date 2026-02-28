import Link from 'next/link';

export const metadata = {
	title: '運営者情報 | 副業税金計算シミュレーター',
	description:
		'副業税金計算シミュレーターの運営者情報ページです。サイトの目的や提供内容について説明しています。',
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-16">
			<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">運営者情報</h1>

				<section className="mb-10">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">サイトについて</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						副業税金計算シミュレーターは、 副業をしている方・これから始める方が
						「税金がどれくらい増えるのか」を 手軽に把握できるように作られた無料ツールです。
					</p>
					<p className="text-gray-600 leading-relaxed">
						登録不要・完全無料でご利用いただけます。 入力された情報は保存されません。
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
					<h2 className="text-xl font-semibold text-gray-800 mb-4">免責事項</h2>
					<p className="text-gray-600 leading-relaxed mb-4">
						本サイトのシミュレーション結果は、 一般的な計算ロジックに基づく概算です。
					</p>
					<p className="text-gray-600 leading-relaxed">
						実際の税額は所得控除・扶養状況・各種条件により 異なる場合があります。
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
	);
}
