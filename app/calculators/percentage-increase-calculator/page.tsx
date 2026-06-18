import type { Metadata } from "next";
import PercentageIncreaseCalculator from "@/components/PercentageIncreaseCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Percentage Increase Calculator | ToolioIQ",
  description:
    "Calculate percentage increases quickly with ToolioIQ's free percentage increase calculator.",
};

export default function PercentageIncreaseCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Percentage Increase Calculator"
      description="Use this free percentage increase calculator to find the new value after increasing a number by a percentage."
      howToUse={
        <p>
          Enter the original value and the percentage increase, then click
          Calculate Increase. The calculator will show the increase amount and
          the new value.
        </p>
      }
      explanation={
        <p>
          A percentage increase shows how much a value grows relative to its
          original amount. It is useful for salary increases, price changes,
          growth rates, and financial planning.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this percentage increase calculator free?
          </h3>
          <p>Yes. This calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            What can I use this calculator for?
          </h3>
          <p>
            You can use it for price increases, salary raises, growth
            percentages, and other increase calculations.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
        {
          title: "Discount Calculator",
          href: "/calculators/discount-calculator",
          description: "Calculate sale prices and savings after a discount.",
        },
        {
          title: "Savings Calculator",
          href: "/calculators/savings-calculator",
          description: "Estimate savings growth with monthly contributions.",
        },
      ]}
    >
      <PercentageIncreaseCalculator />
    </CalculatorPageLayout>
  );
}