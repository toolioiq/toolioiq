import type { Metadata } from "next";
import BmiCalculator from "@/components/BmiCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "BMI Calculator | ToolioIQ",
  description:
    "Calculate your body mass index with ToolioIQ's free BMI calculator.",
};

export default function BmiCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="BMI Calculator"
      description="Use this free BMI calculator to estimate your body mass index based on your height and weight."
      howToUse={
        <p>
          Enter your height in inches and your weight in pounds, then click
          Calculate BMI. The tool will show your BMI and general category.
        </p>
      }
      explanation={
        <p>
          BMI stands for body mass index. It is a simple estimate based on height
          and weight. It is not a medical diagnosis, but it can be a useful
          general screening tool.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this BMI calculator free?</h3>
          <p>Yes. This BMI calculator is free to use.</p>

          <h3 className="font-semibold mt-4">Is BMI a medical diagnosis?</h3>
          <p>
            No. BMI is only a general estimate. Speak with a qualified medical
            professional for health advice.
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
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
        {
          title: "GPA Calculator",
          href: "/calculators/gpa-calculator",
          description: "Calculate your grade point average.",
        },
      ]}
    >
      <BmiCalculator />
    </CalculatorPageLayout>
  );
}