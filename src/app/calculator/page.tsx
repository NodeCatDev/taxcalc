import type { Metadata } from 'next';
import Script from 'next/script';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
	title: '副業税金の計算ツール｜所得税・住民税をシミュレーション',
	description:
		'副業収入を入力するだけで税金を概算計算。会社員向け副業税金シミュレーター【2026年版】。',
	alternates: {
		canonical: '/calculator',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function CalculatorPage() {
	return (
		<>
			{/* FAQ構造化データ */}
			<Script id="faq-calculator" type="application/ld+json" strategy="afterInteractive">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: '副業が20万円以下なら確定申告は不要ですか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '所得税については20万円以下であれば申告不要な場合がありますが、住民税の申告は必要になるケースがあります。',
							},
						},
						{
							'@type': 'Question',
							name: '副業の住民税は会社に知られますか？',
							acceptedAnswer: {
								'@type': 'Answer',
								text: '住民税を普通徴収にすることで会社に通知されない方法もあります。',
							},
						},
					],
				})}
			</Script>

			<CalculatorClient />
		</>
	);
}
