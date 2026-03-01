export type CompanyInput = {
	salary: number;
	sideIncome: number;
	expenses: number;
	dependents: number;
	healthRate: number;
	pensionRate: number;
	employmentRate: number;
};

/* ===============================
   定数（2026年想定）
================================= */

const BASIC_DEDUCTION_INCOME_TAX = 480_000;
const BASIC_DEDUCTION_RESIDENT_TAX = 430_000;
const DEPENDENT_DEDUCTION = 380_000;

const RESIDENT_TAX_RATE = 0.1;
const RECONSTRUCTION_RATE = 0.021;

// 均等割（標準値）※自治体差あり
const RESIDENT_EQUALITY_TAX = 5_000;

/* ===============================
   給与所得控除（2020年以降）
================================= */

function getSalaryDeduction(salary: number): number {
	if (salary <= 1_625_000) return 550_000;
	if (salary <= 1_800_000) return salary * 0.4 - 100_000;
	if (salary <= 3_600_000) return salary * 0.3 + 80_000;
	if (salary <= 6_600_000) return salary * 0.2 + 440_000;
	if (salary <= 8_500_000) return salary * 0.1 + 1_100_000;
	return 1_950_000;
}

/* ===============================
   所得税（速算控除方式）
================================= */

const INCOME_TAX_TABLE = [
	{ limit: 1_950_000, rate: 0.05, deduction: 0 },
	{ limit: 3_300_000, rate: 0.1, deduction: 97_500 },
	{ limit: 6_950_000, rate: 0.2, deduction: 427_500 },
	{ limit: 9_000_000, rate: 0.23, deduction: 636_000 },
	{ limit: 18_000_000, rate: 0.33, deduction: 1_536_000 },
	{ limit: 40_000_000, rate: 0.4, deduction: 2_796_000 },
	{ limit: Infinity, rate: 0.45, deduction: 4_796_000 },
];

function calculateIncomeTax(taxableIncome: number): number {
	if (taxableIncome <= 0) return 0;

	for (const bracket of INCOME_TAX_TABLE) {
		if (taxableIncome <= bracket.limit) {
			return Math.floor(taxableIncome * bracket.rate - bracket.deduction);
		}
	}

	return 0;
}

/* ===============================
   総税額計算
================================= */

function calculateTotalTax(
	salary: number,
	sideIncome: number,
	expenses: number,
	dependents: number,
	healthRate: number,
	pensionRate: number,
	employmentRate: number,
) {
	const safeSalary = Math.max(0, salary);
	const safeSideIncome = Math.max(0, sideIncome);
	const safeExpenses = Math.max(0, expenses);
	const safeDependents = Math.max(0, dependents);

	// 給与所得
	const salaryDeduction = getSalaryDeduction(safeSalary);
	const salaryIncome = Math.max(0, safeSalary - salaryDeduction);

	// 副業所得
	const sideProfit = Math.max(0, safeSideIncome - safeExpenses);

	// 社会保険料（概算）
	const socialInsurance = safeSalary * (healthRate + pensionRate + employmentRate);

	/* ---------- 所得税 ---------- */

	const taxableIncomeIncomeTax =
		salaryIncome +
		sideProfit -
		socialInsurance -
		BASIC_DEDUCTION_INCOME_TAX -
		safeDependents * DEPENDENT_DEDUCTION;

	const incomeTaxBase = Math.max(0, taxableIncomeIncomeTax);

	const incomeTax = calculateIncomeTax(incomeTaxBase);

	const reconstructionTax = Math.floor(incomeTax * RECONSTRUCTION_RATE);

	/* ---------- 住民税 ---------- */

	const taxableIncomeResident =
		salaryIncome +
		sideProfit -
		socialInsurance -
		BASIC_DEDUCTION_RESIDENT_TAX -
		safeDependents * DEPENDENT_DEDUCTION;

	const residentBase = Math.max(0, taxableIncomeResident);

	const residentTax = Math.floor(residentBase * RESIDENT_TAX_RATE) + RESIDENT_EQUALITY_TAX;

	return incomeTax + reconstructionTax + residentTax;
}

/* ===============================
   公開関数
================================= */

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
