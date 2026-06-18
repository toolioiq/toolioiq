import type { Metadata } from "next";
import DiscountCalculator from "@/components/DiscountCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Discount Calculator | ToolioIQ",
  description:
    "Calculate sale prices and savings with ToolioIQ's free discount calculator.",
};

export default function DiscountCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Discount Calculator"
      description="Use this free discount calculator to find the final sale price and amount saved after a percentage discount."
      howToUse={
        <p>
          Enter the original price and discount percentage, then click Calculate
          Discount. The calculator will show the final price and how much you
          save.
        </p>
      }
      explanation={
        <p>
          A discount calculator helps you quickly determine the sale price of an
          item after a percentage discount is applied.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this discount calculator free?</h3>
          <p>Yes. This discount calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I use this for sale prices?
          </h3>
          <p>
            Yes. You can use it for retail sales, coupons, markdowns, and
            shopping discounts.
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
          title: "Savings Calculator",
          href: "/calculators/savings-calculator",
          description: "Estimate savings growth with monthly contributions.",
        },
        {
          title: "Loan Calculator",
          href: "/calculators/loan-calculator",
          description: "Estimate monthly loan payments and total interest.",
        },
      ]}
    >
      <DiscountCalculator />
    </CalculatorPageLayout>
  );
}