import type { Metadata } from "next";
import CompoundInterestCalculator from "@/components/CompoundInterestCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | ToolioIQ",
  description:
    "Calculate compound interest and future value with ToolioIQ's free compound interest calculator.",
};

export default function CompoundInterestCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Compound Interest Calculator"
      description="Use this free compound interest calculator to estimate how your money can grow over time with interest that compounds."
      howToUse={
        <p>
          Enter your starting amount, annual interest rate, number of years,
          and compounding frequency. The calculator will estimate your final
          balance and total interest earned.
        </p>
      }
      explanation={
        <p>
          Compound interest is interest earned on both your original money and
          the interest that has already been added. Over time, this can help
          savings and investments grow faster.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this compound interest calculator free?
          </h3>
          <p>Yes. This calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this calculator include monthly contributions?
          </h3>
          <p>
            Not yet. This version calculates compound growth from a starting
            amount only. We can add monthly contributions later.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Savings Calculator",
          href: "/calculators/savings-calculator",
          description:
            "Estimate savings growth with monthly contributions.",
        },
        {
          title: "Loan Calculator",
          href: "/calculators/loan-calculator",
          description:
            "Estimate monthly loan payments and total interest.",
        },
        {
          title: "Mortgage Calculator",
          href: "/calculators/mortgage-calculator",
          description:
            "Estimate monthly mortgage payments and total interest.",
        },
      ]}
    >
      <CompoundInterestCalculator />
    </CalculatorPageLayout>
  );
}