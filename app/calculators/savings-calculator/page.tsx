import type { Metadata } from "next";
import SavingsCalculator from "@/components/SavingsCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Savings Calculator | ToolioIQ",
  description:
    "Estimate how your savings can grow over time with ToolioIQ's free savings calculator.",
};

export default function SavingsCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Savings Calculator"
      description="Use this free savings calculator to estimate how your savings can grow with a starting amount, monthly contributions, interest rate, and time."
      howToUse={
        <p>
          Enter your starting amount, monthly contribution, annual interest rate,
          and number of years. Then click Calculate Savings to estimate your
          future balance.
        </p>
      }
      explanation={
        <p>
          A savings calculator estimates how much money you may have in the
          future based on your current savings, regular contributions, interest
          rate, and time horizon.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this savings calculator free?</h3>
          <p>Yes. This savings calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this calculator include monthly deposits?
          </h3>
          <p>
            Yes. This calculator includes both a starting amount and monthly
            contributions.
          </p>

          <h3 className="font-semibold mt-4">
            Is the result guaranteed?
          </h3>
          <p>
            No. The result is only an estimate based on the values you enter.
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
          title: "Loan Calculator",
          href: "/calculators/loan-calculator",
          description: "Estimate monthly loan payments and total interest.",
        },
        {
          title: "Mortgage Calculator",
          href: "/calculators/mortgage-calculator",
          description: "Estimate monthly mortgage payments and total interest.",
        },
      ]}
    >
      <SavingsCalculator />
    </CalculatorPageLayout>
  );
}