import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            副業の税金、いくら増える？
            <br />
            3分でわかる税金シミュレーター
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            本業年収と副業収入を入力するだけで、
            所得税・住民税の増加額を自動計算。
            確定申告前の目安をすぐに確認できます。
          </p>

          <Link
            href="/calculator"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            無料でシミュレーションする
          </Link>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            このツールで分かること
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                副業で増える税額
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                副業によって追加で発生する所得税・住民税の増加額を概算で確認できます。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                合計税額の把握
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                本業＋副業を合算した場合の総税額を試算できます。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                現実に近い概算
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                基礎控除・扶養控除・社会保険料を考慮した実用的なシミュレーションを行います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLANATION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            副業の税金はどう計算される？
          </h2>

          <p>
            副業の利益（収入−経費）は「所得」として本業の給与所得と合算されます。
            合算された課税所得に対して累進課税が適用されるため、
            所得が増えるほど税率も上がる仕組みです。
          </p>

          <p>
            所得税は5%〜45%の累進課税制度が採用されており、
            住民税は原則として約10%が課税されます。
            本シミュレーターでは、基礎控除・扶養控除・社会保険料を考慮した
            現実に近い計算を行っています。
          </p>

          <p className="text-sm text-gray-500">
            ※ 本サイトは概算計算ツールです。正確な税額は税務署や税理士へご確認ください。
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 bg-white border-t">
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            当サイトについて
          </h2>

          <p>
            本サイトは、副業をしている会社員・個人事業主の方向けに、
            税金の増加額を簡単に把握できる無料のシミュレーションツールを提供しています。
            難しい税制をできるだけ分かりやすく、直感的に確認できることを目的としています。
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            こんな方におすすめ
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>副業を始めたばかりの会社員の方</li>
            <li>確定申告前に税額の目安を知りたい方</li>
            <li>住民税の増加額を事前に把握したい方</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900">
            免責事項
          </h3>
          <p>
            本シミュレーターは一般的な税率・制度に基づく概算計算を行っています。
            実際の税額とは異なる場合があります。
            正確な税額については税務署または税理士などの専門家へご相談ください。
          </p>
        </div>
      </section>

    </main>
  );
}