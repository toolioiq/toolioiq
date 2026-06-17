import type { Metadata } from "next";
import MortgageCalculator from "@/components/MortgageCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Mortgage Calculator | ToolioIQ",
  description:
    "Estimate your monthly mortgage payment with ToolioIQ's free mortgage calculator.",
};

export default function MortgageCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Mortgage Calculator"
      description="Use this free mortgage calculator to estimate your monthly mortgage payment, total payment, and total interest."
      howToUse={
        <p>
          Enter your loan amount, annual interest rate, and loan term. Then click
          Calculate Mortgage to estimate your monthly payment.
        </p>
      }
      explanation={
        <p>
          A mortgage calculator estimates the monthly payment required to repay a
          home loan over time. The calculation is based on the loan amount,
          interest rate, and repayment term.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this mortgage calculator free?
          </h3>
          <p>Yes. This mortgage calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this include taxes and insurance?
          </h3>
          <p>
            Not yet. This version estimates principal and interest only. We can
            add property taxes, insurance, and down payment fields later.
          </p>
        </>
      }
      relatedTools={[
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
        {
          title: "BMI Calculator",
          href: "/calculators/bmi-calculator",
          description: "Calculate your body mass index.",
        },
      ]}
    >
      <MortgageCalculator />
    </CalculatorPageLayout>
  );
}