export type CompanyInput = {
  salary: number
  sideIncome: number
  expenses: number
  dependents: number
  healthRate: number
  pensionRate: number
  employmentRate: number
}

function getSalaryDeduction(salary: number): number {
  if (salary <= 1800000) return salary * 0.4 - 100000
  if (salary <= 3600000) return salary * 0.3 + 80000
  if (salary <= 6600000) return salary * 0.2 + 440000
  if (salary <= 8500000) return salary * 0.1 + 1100000
  return 1950000
}

function calculateIncomeTax(taxableIncome: number): number {
  const brackets = [
    { limit: 1950000, rate: 0.05 },
    { limit: 3300000, rate: 0.1 },
    { limit: 6950000, rate: 0.2 },
    { limit: 9000000, rate: 0.23 },
    { limit: 18000000, rate: 0.33 },
    { limit: 40000000, rate: 0.4 },
    { limit: Infinity, rate: 0.45 },
  ]

  let tax = 0
  let prevLimit = 0

  for (const bracket of brackets) {
    const taxable = Math.min(taxableIncome, bracket.limit) - prevLimit
    if (taxable > 0) {
      tax += taxable * bracket.rate
      prevLimit = bracket.limit
    } else {
      break
    }
  }

  return tax
}

function calculateTotalTax(
  salary: number,
  sideIncome: number,
  expenses: number,
  dependents: number,
  healthRate: number,
  pensionRate: number,
  employmentRate: number
) {
  const salaryDeduction = getSalaryDeduction(salary)
  const salaryIncome = salary - salaryDeduction
  const sideProfit = sideIncome - expenses

  const socialInsurance =
    salary * (healthRate + pensionRate + employmentRate)

  const basicDeduction = 480000
  const dependentDeduction = dependents * 380000

  const taxableIncome =
    salaryIncome +
    sideProfit -
    socialInsurance -
    basicDeduction -
    dependentDeduction

  const safeTaxable = Math.max(0, taxableIncome)

  const incomeTax = calculateIncomeTax(safeTaxable)
  const residentTax = safeTaxable * 0.1

  return incomeTax + residentTax
}

export function calculateCompanyTax(input: CompanyInput) {
  const baseTax = calculateTotalTax(
    input.salary,
    0,
    0,
    input.dependents,
    input.healthRate,
    input.pensionRate,
    input.employmentRate
  )

  const afterTax = calculateTotalTax(
    input.salary,
    input.sideIncome,
    input.expenses,
    input.dependents,
    input.healthRate,
    input.pensionRate,
    input.employmentRate
  )

  return {
    additionalTax: afterTax - baseTax,
    totalTax: afterTax,
  }
}