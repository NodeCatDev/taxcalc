import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'お問い合わせ | 副業税金計算シミュレーター',
	description:
		'副業税金計算シミュレーターに関するご質問・ご意見・ご要望はこちらからお問い合わせください。',
	robots: {
		index: true,
		follow: true,
	},
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-16">
			<article className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 leading-relaxed">
				<h1 className="text-3xl md:text-4xl font-bold mb-8 border-b pb-4">お問い合わせ</h1>

				<p className="text-gray-700 mb-6">
					「副業税金シミュレーター」に関するご質問・ご意見・ご要望がございましたら、
					下記メールアドレスまでご連絡ください。
				</p>

				<div className="bg-gray-100 rounded-lg p-6 text-center">
					<p className="text-sm text-gray-500 mb-2">お問い合わせ先</p>
					<a
						href="mailto:nodecat.dev@gmail.com"
						className="text-lg font-semibold text-blue-600 hover:underline break-all"
					>
						nodecat.dev@gmail.com
					</a>
				</div>

				<section className="mt-8 text-sm text-gray-600">
					<p className="mb-3">通常、3営業日以内にご返信いたします。</p>
					<p>
						お問い合わせの際にご提供いただいた個人情報は、ご回答の目的以外では使用いたしません。
						詳細は
						<Link href="/privacy" className="text-blue-600 underline">
							プライバシーポリシー
						</Link>
						をご確認ください。
					</p>
				</section>

				<div className="mt-12 text-sm text-gray-500 text-center">
					最終更新日：2026年3月1日
					<br />© {new Date().getFullYear()} 副業税金シミュレーター
				</div>
			</article>
		</main>
	);
}
