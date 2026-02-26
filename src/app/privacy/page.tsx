export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">
          プライバシーポリシー
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            広告について
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する予定です。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            アクセス解析について
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトでは、サービス向上のためアクセス解析ツールを利用する場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            免責事項
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当サイトの税額計算は参考情報として提供するものであり、
            正確性を保証するものではありません。
            最終的な判断は必ず専門家へご相談ください。
          </p>
        </section>

        <div className="mt-12 text-sm text-gray-500 text-center">
          © 2026 NodeCatDev
        </div>

      </div>
    </main>
  );
}