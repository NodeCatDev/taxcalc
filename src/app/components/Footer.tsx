import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-white border-t mt-16">
			<div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-600">
				{/* 上段 */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					{/* サイト情報 */}
					<div className="text-center md:text-left">
						<p className="font-semibold text-gray-800 text-base">副業税金シミュレーター</p>
						<p className="mt-2 text-gray-500">
							登録不要・完全無料でご利用いただける税金計算ツールです。
						</p>
					</div>

					{/* ナビゲーション */}
					<nav className="flex gap-6 flex-wrap justify-center" aria-label="フッターナビゲーション">
						<Link href="/" className="hover:text-black transition">
							トップ
						</Link>
						<Link href="/calculator" className="hover:text-black transition">
							税金計算シミュレーター
						</Link>
						<Link href="/about" className="hover:text-black transition">
							運営者情報
						</Link>
						<Link href="/privacy" className="hover:text-black transition">
							プライバシーポリシー
						</Link>
						<Link href="/contact" className="hover:text-black transition">
							お問い合わせ
						</Link>
					</nav>
				</div>

				{/* 下段コピーライト */}
				<div className="text-center mt-8 text-gray-400">
					<p>© {new Date().getFullYear()} 副業税金シミュレーター</p>
					<p className="mt-2 text-xs">
						本サイトの計算結果は概算です。正確な税額は税理士または税務署へご確認ください。
					</p>
				</div>
			</div>
		</footer>
	);
}
