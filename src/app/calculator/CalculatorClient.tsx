'use client';

import { useState } from 'react';
import { calculateCompanyTax } from '@/lib/tax';
import Link from 'next/link';

export default function CalculatorClient() {
	const [salary, setSalary] = useState('5000000');
	const [sideIncome, setSideIncome] = useState('1000000');
	const [expenses, setExpenses] = useState('200000');
	const [dependents, setDependents] = useState('0');
	const [result, setResult] = useState<null | {
		additionalTax: number;
		totalTax: number;
	}>(null);

	const handleCalculate = () => {
		const parsedSalary = Number(salary) || 0;
		const parsedSide = Number(sideIncome) || 0;
		const parsedExpenses = Number(expenses) || 0;
		const parsedDependents = Number(dependents) || 0;

		const calc = calculateCompanyTax({
			salary: parsedSalary,
			sideIncome: parsedSide,
			expenses: parsedExpenses,
			dependents: parsedDependents,
			healthRate: 0.05,
			pensionRate: 0.0915,
			employmentRate: 0.006,
		});

		setResult(calc);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4">
			<Link href="/" className="text-sm text-gray-500 hover:underline">
				← 税金の基礎解説を見る
			</Link>

			<div className="max-w-3xl mx-auto">
				<p className="text-sm text-gray-500 mt-4">最終更新日：2026年3月</p>

				<h1 className="text-3xl font-bold mb-6 text-gray-800">
					副業税金シミュレーター【2026年版】
				</h1>

				<div className="bg-white shadow-xl rounded-2xl p-8">
					<div className="space-y-4">
						<Input label="本業年収（円）" value={salary} setValue={setSalary} />
						<Input label="副業収入（円）" value={sideIncome} setValue={setSideIncome} />
						<Input label="経費（円）" value={expenses} setValue={setExpenses} />
						<Input label="扶養人数（人）" value={dependents} setValue={setDependents} />
					</div>

					<button
						onClick={handleCalculate}
						className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
					>
						税額を計算する
					</button>

					{result && (
						<div className="mt-8 bg-blue-50 rounded-xl p-6">
							<h2 className="text-lg font-semibold mb-4 text-gray-700">計算結果</h2>

							<ResultRow label="副業で増える税額" value={result.additionalTax} highlight />
							<ResultRow label="合計税額（概算）" value={result.totalTax} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function Input({
	label,
	value,
	setValue,
}: {
	label: string;
	value: string;
	setValue: (v: string) => void;
}) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
			<input
				type="number"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
			/>
		</div>
	);
}

function ResultRow({
	label,
	value,
	highlight,
}: {
	label: string;
	value: number;
	highlight?: boolean;
}) {
	return (
		<div className="flex justify-between text-base mb-2">
			<span className="text-gray-600">{label}</span>
			<span className={`font-semibold ${highlight ? 'text-red-600 text-lg' : 'text-gray-800'}`}>
				{Math.round(value).toLocaleString()} 円
			</span>
		</div>
	);
}
