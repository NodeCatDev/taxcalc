'use client'

import { useState } from 'react'
import { calculateCompanyTax } from '@/lib/tax'

export default function CalculatorPage() {
  const [salary, setSalary] = useState(5000000)
  const [sideIncome, setSideIncome] = useState(1000000)
  const [expenses, setExpenses] = useState(200000)
  const [dependents, setDependents] = useState(0)

  const result = calculateCompanyTax({
    salary,
    sideIncome,
    expenses,
    dependents,
    healthRate: 0.05,
    pensionRate: 0.0915,
    employmentRate: 0.006,
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* H1（SEO強化） */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          副業税金シミュレーター【2026年版】
        </h1>

        {/* 説明セクション */}
        <section className="mb-10 text-gray-700 leading-relaxed">
          <p className="mb-4">
            本シミュレーターでは、副業によって増える
            「所得税・復興特別所得税・住民税（所得割）」の
            概算額を自動計算できます。
          </p>
          <p>
            給与所得控除・基礎控除・扶養控除・社会保険料を考慮した
            実務に近いロジックで計算しています。
          </p>
        </section>

        {/* 計算カード */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <div className="space-y-4">
            <Input label="本業年収（円）" value={salary} setValue={setSalary} />
            <Input label="副業収入（円）" value={sideIncome} setValue={setSideIncome} />
            <Input label="経費（円）" value={expenses} setValue={setExpenses} />
            <Input label="扶養人数（人）" value={dependents} setValue={setDependents} />
          </div>

          <div className="border-t my-8" />

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              計算結果
            </h2>

            <ResultRow
              label="副業で増える税額"
              value={result.additionalTax}
              highlight
            />
            <ResultRow label="合計税額（概算）" value={result.totalTax} />
          </div>
        </div>

        {/* 注意事項 */}
        <section className="mt-12 text-sm text-gray-600 leading-relaxed bg-gray-100 p-6 rounded-xl">
          <h3 className="font-semibold mb-3">※計算前提について</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>住民税は所得割（10%）のみを含みます（均等割は含みません）。</li>
            <li>副業が赤字の場合は税額増加なしとして計算します。</li>
            <li>復興特別所得税（所得税×2.1%）を含みます。</li>
            <li>社会保険料は概算率で計算しています。</li>
            <li>実際の税額は控除状況や自治体により異なります。</li>
          </ul>
        </section>

        {/* FAQ（表示用） */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            よくある質問
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">
                Q. 副業が20万円以下なら確定申告は不要ですか？
              </h3>
              <p>
                所得税については20万円以下であれば申告不要な場合がありますが、
                住民税の申告は必要になるケースがあります。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Q. 副業の住民税は会社に知られますか？
              </h3>
              <p>
                住民税を普通徴収にすることで会社に通知されない方法もあります。
                詳細はお住まいの自治体へご確認ください。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Q. 副業が赤字の場合はどうなりますか？
              </h3>
              <p>
                本シミュレーターでは副業が赤字の場合は税額増加なしとして計算しています。
                実際の取り扱いは所得区分により異なります。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "副業が20万円以下なら確定申告は不要ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "所得税については20万円以下であれば申告不要な場合がありますが、住民税の申告は必要になるケースがあります。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "副業の住民税は会社に知られますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "住民税を普通徴収にすることで会社に通知されない方法もあります。詳細はお住まいの自治体へご確認ください。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "副業が赤字の場合はどうなりますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "本シミュレーターでは副業が赤字の場合は税額増加なしとして計算しています。実際の取り扱いは所得区分により異なります。"
                  }
                }
              ]
            })
          }}
        />

      </div>
    </div>
  )
}

function Input({
  label,
  value,
  setValue,
}: {
  label: string
  value: number
  setValue: (v: number) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}

function ResultRow({
  label,
  value,
  highlight,
}: {
  label: string
  value: number
  highlight?: boolean
}) {
  return (
    <div className="flex justify-between text-base mb-2">
      <span className="text-gray-600">{label}</span>
      <span
        className={`font-semibold ${
          highlight ? 'text-red-600 text-lg' : 'text-gray-800'
        }`}
      >
        {Math.round(value).toLocaleString()} 円
      </span>
    </div>
  )
}