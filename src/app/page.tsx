import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          副業税金シミュレーター【2026年版】
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          副業を始めると「税金はいくら増えるの？」と不安になりますよね。
          このシミュレーターでは、本業年収・副業収入・経費などを入力するだけで、
          副業によって増える所得税・住民税を概算で計算できます。
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            このツールで分かること
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>副業で増える税額</li>
            <li>本業＋副業の合計税額</li>
            <li>社会保険料を考慮した概算</li>
          </ul>
        </div>

        <Link
          href="/calculator"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          シミュレーションを始める
        </Link>

        <div className="mt-12 text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            副業の税金はどう計算される？
          </h2>
          <p>
            副業の利益（収入−経費）は「所得」として本業の給与所得と合算されます。
            合算された課税所得に対して累進課税が適用されるため、
            所得が増えるほど税率も上がる仕組みです。
          </p>
          <p>
            また、住民税は原則として約10%が課税されます。
            本シミュレーターでは、基礎控除・扶養控除・社会保険料を考慮した
            現実に近い計算を行っています。
          </p>
          <p className="text-sm text-gray-500">
            ※ 本サイトは概算計算ツールです。正確な税額は税務署や税理士へご確認ください。
          </p>
        </div>

        <div className="mt-16 border-t pt-12 text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            当サイトについて
          </h2>

          <p>
            本サイトは、副業をしている会社員・個人事業主の方向けに、
            税金の増加額を簡単に把握できる無料のシミュレーションツールを提供しています。
            難しい税制をできるだけ分かりやすく、直感的に確認できることを目的としています。
          </p>

          <h3 className="text-xl font-semibold text-gray-800">
            こんな方におすすめ
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>副業を始めたばかりの会社員の方</li>
            <li>確定申告前に税額の目安を知りたい方</li>
            <li>住民税の増加額を事前に把握したい方</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">
            免責事項
          </h3>
          <p>
            本シミュレーターは一般的な税率・制度に基づく概算計算を行っています。
            実際の税額とは異なる場合があります。
            正確な税額については税務署または税理士などの専門家へご相談ください。
          </p>
        </div>
      </div>
    </main>
  )
}