export default function PrivacyPage() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-16">
			<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
				<h1 className="text-3xl font-bold mb-8 border-b pb-4">プライバシーポリシー</h1>

				{/* 基本方針 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">個人情報の利用目的</h2>
					<p className="text-gray-700 leading-relaxed">
						当サイトでは、お問い合わせ等の際に名前やメールアドレス等の個人情報をご入力いただく場合があります。
						取得した個人情報は、必要なご連絡のみに利用し、それ以外の目的では利用いたしません。
					</p>
				</section>

				{/* 広告 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">広告について</h2>
					<p className="text-gray-700 leading-relaxed mb-4">
						当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する予定です。
						広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
					</p>
					<p className="text-gray-700 leading-relaxed">
						Cookieを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、
						個人を特定できるものではありません。 Cookieを無効にする方法やGoogle
						AdSenseに関する詳細は、 Googleの広告ポリシーをご確認ください。
					</p>
				</section>

				{/* アクセス解析 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">アクセス解析ツールについて</h2>
					<p className="text-gray-700 leading-relaxed">
						当サイトでは、サービス向上のためにアクセス解析ツールを利用する場合があります。
						これらのツールはトラフィックデータ収集のためにCookieを使用することがあります。
						トラフィックデータは匿名で収集されており、個人を特定するものではありません。
					</p>
				</section>

				{/* 第三者提供 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">個人情報の第三者への開示</h2>
					<p className="text-gray-700 leading-relaxed">
						取得した個人情報は、法令に基づく場合を除き、
						本人の同意なく第三者へ開示することはありません。
					</p>
				</section>

				{/* 免責 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">免責事項</h2>
					<p className="text-gray-700 leading-relaxed">
						当サイトの税額計算は一般的な計算ロジックに基づく概算値です。
						正確性・完全性を保証するものではありません。
						最終的な判断については、税理士または税務署へご確認ください。
					</p>
				</section>

				{/* お問い合わせ */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">お問い合わせ窓口</h2>
					<p className="text-gray-700 leading-relaxed">
						プライバシーポリシーに関するお問い合わせは、 お問い合わせページよりお願いいたします。
					</p>
				</section>

				{/* 改定 */}
				<section className="mb-10">
					<h2 className="text-xl font-semibold mb-3">ポリシーの変更</h2>
					<p className="text-gray-700 leading-relaxed">
						本ポリシーは、法令の変更等により予告なく改定されることがあります。
					</p>
				</section>

				<div className="mt-12 text-sm text-gray-500 text-center">
					© {new Date().getFullYear()} 副業税金シミュレーター
				</div>
			</div>
		</main>
	);
}
