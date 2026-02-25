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
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          副業税金シミュレーター
        </h1>

        <div className="space-y-4">
          <Input label="本業年収" value={salary} setValue={setSalary} />
          <Input label="副業収入" value={sideIncome} setValue={setSideIncome} />
          <Input label="経費" value={expenses} setValue={setExpenses} />
          <Input label="扶養人数" value={dependents} setValue={setDependents} />
        </div>

        <div className="border-t my-8" />

        <div className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">計算結果</h2>

          <ResultRow
            label="副業で増える税額"
            value={result.additionalTax}
            highlight
          />
          <ResultRow label="合計税額" value={result.totalTax} />
        </div>

        <p className="text-sm text-gray-500 mt-6">
          ※ 本シミュレーションは概算です。実際の税額は異なる場合があります。
        </p>
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