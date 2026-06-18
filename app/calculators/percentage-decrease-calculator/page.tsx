import type { Metadata } from "next";
import PercentageDecreaseCalculator from "@/components/PercentageDecreaseCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Percentage Decrease Calculator | ToolioIQ",
  description:
    "Calculate percentage decreases quickly with ToolioIQ's free percentage decrease calculator.",
};

export default function PercentageDecreaseCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Percentage Decrease Calculator"
      description="Use this free percentage decrease calculator to find the new value after decreasing a number by a percentage."
      howToUse={
        <p>
          Enter the original value and the percentage decrease, then click
          Calculate Decrease. The calculator will show the decrease amount and
          the new value.
        </p>
      }
      explanation={
        <p>
          A percentage decrease shows how much a value drops relative to its
          original amount. It is useful for price drops, losses, markdowns,
          discounts, and shrinkage calculations.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this percentage decrease calculator free?
          </h3>
          <p>Yes. This calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            What can I use this calculator for?
          </h3>
          <p>
            You can use it for price drops, percentage losses, markdowns,
            discounts, and other decrease calculations.
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
          title: "Percentage Increase Calculator",
          href: "/calculators/percentage-increase-calculator",
          description: "Calculate the new value after a percentage increase.",
        },
        {
          title: "Discount Calculator",
          href: "/calculators/discount-calculator",
          description: "Calculate sale prices and savings after a discount.",
        },
      ]}
    >
      <PercentageDecreaseCalculator />
    </CalculatorPageLayout>
  );
}