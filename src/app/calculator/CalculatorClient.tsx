'use client';

import { useState } from 'react';
import { calculateCompanyTax } from '@/lib/tax';

export default function CalculatorClient() {
	const [salary, setSalary] = useState('5000000');
	const [sideIncome, setSideIncome] = useState('1000000');
	const [expenses, setExpenses] = useState('200000');
	const [dependents, setDependents] = useState('0');

	const [result, setResult] = useState<any>(null);

	const handleCalculate = () => {
		const calc = calculateCompanyTax({
			salary: Number(salary),
			sideIncome: Number(sideIncome),
			expenses: Number(expenses),
			dependents: Number(dependents),
			healthRate: 0.05,
			pensionRate: 0.0915,
			employmentRate: 0.006,
		});

		setResult(calc);
	};

	return (
		<div className="space-y-10">
			<div className="text-center">
				<h1 className="text-3xl font-bold mb-2">副業税金シミュレーター</h1>
				<p className="text-gray-600">本業年収と副業利益から税金を概算計算します</p>
			</div>

			<div className="bg-white p-10 rounded-2xl shadow-sm">
				<div className="grid md:grid-cols-2 gap-6">
					<Input label="本業年収（円）" value={salary} setValue={setSalary} />
					<Input label="副業収入（円）" value={sideIncome} setValue={setSideIncome} />
					<Input label="経費（円）" value={expenses} setValue={setExpenses} />
					<Input label="扶養人数" value={dependents} setValue={setDependents} />
				</div>

				<button
					onClick={handleCalculate}
					className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
				>
					税額を計算する
				</button>
			</div>

			{result && (
				<div className="bg-blue-50 p-8 rounded-2xl">
					<h2 className="text-xl font-bold mb-4">計算結果</h2>

					<ResultRow label="副業で増える税額" value={result.additionalTax} highlight />

					<ResultRow label="合計税額" value={result.totalTax} />
				</div>
			)}
		</div>
	);
}

function Input({ label, value, setValue }: any) {
	return (
		<div>
			<label className="block text-sm font-medium mb-1 text-gray-600">{label}</label>

			<input
				type="number"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
			/>
		</div>
	);
}

function ResultRow({ label, value, highlight }: any) {
	return (
		<div className="flex justify-between text-lg mb-2">
			<span className="text-gray-600">{label}</span>

			<span className={`font-bold ${highlight ? 'text-red-600 text-xl' : ''}`}>
				{Math.round(value).toLocaleString()} 円
			</span>
		</div>
	);
}
