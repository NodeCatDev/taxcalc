import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
	return new ImageResponse(
		<div
			style={{
				display: 'flex',
				width: '1200px',
				height: '630px',
				background: 'linear-gradient(135deg, #0f172a, #1e293b)',
				padding: '80px',
				color: 'white',
				fontFamily: 'sans-serif',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				{/* タイトル */}
				<div
					style={{
						display: 'flex',
						fontSize: 80,
						fontWeight: 800,
						lineHeight: 1.1,
						letterSpacing: '-2px',
					}}
				>
					<div>副業</div>
					<div style={{ color: '#38bdf8', marginLeft: 20 }}>税金</div>
					<div style={{ marginLeft: 20 }}>シミュレーター</div>
				</div>

				{/* サブ */}
				<div
					style={{
						display: 'flex',
						marginTop: 40,
						fontSize: 40,
						color: '#cbd5e1',
					}}
				>
					会社員対応・自動計算
				</div>

				{/* CTA風バッジ */}
				<div
					style={{
						display: 'flex',
						marginTop: 60,
						fontSize: 28,
						background: '#38bdf8',
						color: '#0f172a',
						padding: '12px 28px',
						borderRadius: 999,
						fontWeight: 700,
						alignSelf: 'flex-start', // ← fit-contentの代わり
					}}
				>
					無料で今すぐチェック
				</div>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
