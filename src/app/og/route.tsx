import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  const year = new Date().getFullYear()

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>
          副業税金シミュレーター
        </div>

        <div style={{ fontSize: 45, opacity: 0.9, textAlign: 'center' }}>
          副業で増える税金を自動計算
        </div>

        <div style={{ marginTop: 30, fontSize: 35, opacity: 0.7 }}>
          {year}年版｜会社員対応
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  )
}