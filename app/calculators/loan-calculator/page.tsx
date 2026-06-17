import type { Metadata } from "next";
import LoanCalculator from "@/components/LoanCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Loan Calculator | ToolioIQ",
  description:
    "Estimate monthly loan payments, total repayment, and interest with ToolioIQ's free loan calculator.",
};

export default function LoanCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Loan Calculator"
      description="Use this free loan calculator to estimate monthly payments, total repayment, and total interest for personal loans, auto loans, student loans, and other installment loans."
      howToUse={
        <p>
          Enter the loan amount, annual interest rate, and loan term in years.
          Then click Calculate Loan to estimate the monthly payment and total
          cost of the loan.
        </p>
      }
      explanation={
        <p>
          A loan calculator estimates the fixed monthly payment needed to repay
          a loan over time. It uses the loan amount, interest rate, and repayment
          period to calculate monthly payments, total repayment, and interest.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this loan calculator free?</h3>
          <p>Yes. This loan calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I use this for car loans or personal loans?
          </h3>
          <p>
            Yes. You can use it for personal loans, car loans, student loans,
            business loans, and other fixed-payment loans.
          </p>

          <h3 className="font-semibold mt-4">
            Does this include fees or taxes?
          </h3>
          <p>
            No. This version estimates loan payments based on principal,
            interest rate, and term only.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Mortgage Calculator",
          href: "/calculators/mortgage-calculator",
          description: "Estimate monthly mortgage payments and total interest.",
        },
        {
          title: "Compound Interest Calculator",
          href: "/calculators/compound-interest-calculator",
          description: "Estimate future value and interest earned over time.",
        },
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
      ]}
    >
      <LoanCalculator />
    </CalculatorPageLayout>
  );
}