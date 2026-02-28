import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-white border-t mt-16">
			<div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-600">
				{/* 上段 */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* サイト情報 */}
					<div className="text-center md:text-left">
						<p className="font-semibold text-gray-800 text-base">副業税金シミュレーター</p>
						<p className="mt-2 text-gray-500">登録不要・完全無料でご利用いただけます。</p>
					</div>

					{/* ナビリンク */}
					<div className="flex gap-6 flex-wrap justify-center">
						<Link href="/about" className="hover:text-black transition">
							運営者情報
						</Link>
						<Link href="/privacy" className="hover:text-black transition">
							プライバシーポリシー
						</Link>
						<Link href="/contact" className="hover:text-black transition">
							お問い合わせ
						</Link>
					</div>
				</div>

				{/* 下段コピーライト */}
				<div className="text-center mt-8 text-gray-400">
					© {new Date().getFullYear()} 副業税金シミュレーター
				</div>
			</div>
		</footer>
	);
}
