export type CompanyInput = {
	salary: number;
	sideIncome: number;
	expenses: number;
	dependents: number;
	healthRate: number;
	pensionRate: number;
	employmentRate: number;
};

/**
 * 給与所得控除（令和以降の一般的区分）
 */
function getSalaryDeduction(salary: number): number {
	if (salary <= 1800000) return Math.max(0, salary * 0.4 - 100000);
	if (salary <= 3600000) return salary * 0.3 + 80000;
	if (salary <= 6600000) return salary * 0.2 + 440000;
	if (salary <= 8500000) return salary * 0.1 + 1100000;
	return 1950000;
}

/**
 * 累進課税による所得税計算
 */
function calculateIncomeTax(taxableIncome: number): number {
	const brackets = [
		{ limit: 1950000, rate: 0.05 },
		{ limit: 3300000, rate: 0.1 },
		{ limit: 6950000, rate: 0.2 },
		{ limit: 9000000, rate: 0.23 },
		{ limit: 18000000, rate: 0.33 },
		{ limit: 40000000, rate: 0.4 },
		{ limit: Infinity, rate: 0.45 },
	];

	let tax = 0;
	let prevLimit = 0;

	for (const bracket of brackets) {
		const taxable = Math.min(taxableIncome, bracket.limit) - prevLimit;
		if (taxable > 0) {
			tax += taxable * bracket.rate;
			prevLimit = bracket.limit;
		} else {
			break;
		}
	}

	return tax;
}

/**
 * 総税額計算（副業あり／なし共通）
 */
function calculateTotalTax(
	salary: number,
	sideIncome: number,
	expenses: number,
	dependents: number,
	healthRate: number,
	pensionRate: number,
	employmentRate: number,
) {
	// 給与所得
	const salaryDeduction = getSalaryDeduction(salary);
	const salaryIncome = Math.max(0, salary - salaryDeduction);

	// 副業利益（赤字は0扱い：安全仕様）
	const sideProfit = Math.max(0, sideIncome - expenses);

	// 社会保険料（給与ベース概算）
	const socialInsurance = salary * (healthRate + pensionRate + employmentRate);

	// 各種控除
	const basicDeduction = 480000;
	const dependentDeduction = dependents * 380000;

	const taxableIncome =
		salaryIncome + sideProfit - socialInsurance - basicDeduction - dependentDeduction;

	const safeTaxable = Math.max(0, taxableIncome);

	// 所得税
	const incomeTax = calculateIncomeTax(safeTaxable);

	// 復興特別所得税（2.1%）
	const reconstructionTax = incomeTax * 0.021;

	// 住民税（所得割のみ10%）
	const residentTax = safeTaxable * 0.1;

	return incomeTax + reconstructionTax + residentTax;
}

export function calculateCompanyTax(input: CompanyInput) {
	const baseTax = calculateTotalTax(
		input.salary,
		0,
		0,
		input.dependents,
		input.healthRate,
		input.pensionRate,
		input.employmentRate,
	);

	const afterTax = calculateTotalTax(
		input.salary,
		input.sideIncome,
		input.expenses,
		input.dependents,
		input.healthRate,
		input.pensionRate,
		input.employmentRate,
	);

	return {
		additionalTax: Math.max(0, afterTax - baseTax),
		totalTax: afterTax,
	};
}
