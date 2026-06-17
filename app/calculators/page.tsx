import Link from "next/link";

export default function CalculatorsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">
        Calculators
      </h1>

      <div className="grid gap-6">
        <Link
          href="/calculators/age-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">
            Age Calculator
          </h2>

          <p>
            Calculate your exact age in years.
          </p>
        </Link>
        <Link
          href="/calculators/bmi-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">BMI Calculator</h2>
          <p>Calculate your body mass index using height and weight.</p>
        </Link>
        <Link
          href="/calculators/percentage-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">Percentage Calculator</h2>
          <p>Calculate percentages quickly and easily.</p>
        </Link>
        <Link
          href="/calculators/gpa-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">GPA Calculator</h2>
          <p>Calculate your grade point average from grades and credits.</p>
        </Link>
        <Link
          href="/calculators/compound-interest-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">Compound Interest Calculator</h2>
          <p>Estimate future value and interest earned over time.</p>
        </Link>
        <Link
          href="/calculators/mortgage-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">Mortgage Calculator</h2>
          <p>Estimate monthly mortgage payments and total interest.</p>
        </Link>
        <Link
          href="/calculators/loan-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Loan Calculator</h2>
          <p>Estimate monthly loan payments and total interest.</p>
        </Link>
        <Link
          href="/calculators/savings-calculator"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Savings Calculator</h2>
          <p>Estimate savings growth with monthly contributions and interest.</p>
        </Link>     
      </div>
    </main>
  );
}