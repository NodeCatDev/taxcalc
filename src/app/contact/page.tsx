export default function ContactPage() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-16">
			<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10">
				<h1 className="text-3xl font-bold mb-8 border-b pb-4">お問い合わせ</h1>

				<p className="text-gray-700 mb-6 leading-relaxed">
					「副業税金シミュレーター」に関するご質問・ご意見・ご要望がございましたら、
					下記メールアドレスまでご連絡ください。
				</p>

				<div className="bg-gray-100 rounded-lg p-6 text-center">
					<p className="text-sm text-gray-500 mb-2">お問い合わせ先</p>
					<p className="text-lg font-semibold text-gray-800 break-all">nodecat.dev@gmail.com</p>
				</div>

				<section className="mt-8 text-sm text-gray-600 leading-relaxed">
					<p className="mb-3">通常、3営業日以内にご返信いたします。</p>
					<p>
						お問い合わせの際にご提供いただいた個人情報は、 ご回答の目的以外では使用いたしません。
						詳細はプライバシーポリシーをご確認ください。
					</p>
				</section>

				<div className="mt-12 text-sm text-gray-500 text-center">
					© {new Date().getFullYear()} 副業税金シミュレーター
				</div>
			</div>
		</main>
	);
}
