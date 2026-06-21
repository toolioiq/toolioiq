import type { Metadata } from "next";
import PercentageCalculator from "@/components/PercentageCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Percentage Calculator | ToolioIQ",
  description:
    "Calculate percentages quickly with ToolioIQ's free percentage calculator.",
};

export default function PercentageCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Percentage Calculator"
      description="Use this free percentage calculator to quickly calculate percentages and percentage values."
      howToUse={
        <p>
          Enter a percentage and a number, then click Calculate. For example,
          enter 20 and 150 to find 20% of 150.
        </p>
      }
      breadcrumbItems={[
      { name: "Home", url: "https://toolioiq.com" },
      { name: "Calculators", url: "https://toolioiq.com/calculators" },
      {
        name: "Percentage Calculator",
        url: "https://toolioiq.com/calculators/percentage-calculator",
      },
    ]}
    faqItems={[
      {
        question: "Is this percentage calculator free?",
        answer: "Yes. This percentage calculator is free to use.",
      },
      {
        question: "What does this calculator solve?",
        answer:
          "It calculates what a given percentage of a number equals.",
      },
      {
        question: "Can I use it for discounts and taxes?",
        answer:
          "Yes. You can use it for discounts, taxes, tips, schoolwork, and everyday percentage calculations.",
      },
    ]}

      explanation={
        <p>
          A percentage is a value expressed as a fraction of 100. Percentages
          are commonly used in finance, education, discounts, taxes, and many
          everyday calculations.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this percentage calculator free?
          </h3>
          <p>Yes. This calculator is completely free to use.</p>

          <h3 className="font-semibold mt-4">
            What does this calculator solve?
          </h3>
          <p>
            It calculates what a given percentage of a number equals.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Age Calculator",
          href: "/calculators/age-calculator",
          description: "Calculate your exact age in years, months, and days.",
        },
        {
          title: "BMI Calculator",
          href: "/calculators/bmi-calculator",
          description: "Calculate your body mass index.",
        },
        {
          title: "GPA Calculator",
          href: "/calculators/gpa-calculator",
          description: "Calculate your grade point average.",
        },
      ]}
    >
      <PercentageCalculator />
    </CalculatorPageLayout>
  );
}