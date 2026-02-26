export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">
          お問い合わせ
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          当サイトに関するご質問・ご意見・ご要望がございましたら、
          下記メールアドレスまでご連絡ください。
        </p>

        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            nodecat.dev@gmail.com
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8 leading-relaxed">
          ※内容によっては返信にお時間をいただく場合がございます。
        </p>

        <div className="mt-12 text-sm text-gray-500 text-center">
          © 2026 NodeCatDev
        </div>

      </div>
    </main>
  );
}