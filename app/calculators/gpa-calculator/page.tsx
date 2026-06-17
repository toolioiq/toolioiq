import type { Metadata } from "next";
import GpaCalculator from "@/components/GpaCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "GPA Calculator | ToolioIQ",
  description:
    "Calculate your grade point average with ToolioIQ's free GPA calculator.",
};

export default function GpaCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="GPA Calculator"
      description="Use this free GPA calculator to estimate your grade point average based on your course grades and credit hours."
      howToUse={
        <p>
          Enter each course grade and the number of credit hours. Add or remove
          courses as needed, then click Calculate GPA.
        </p>
      }
      explanation={
        <p>
          GPA is calculated by multiplying each course grade point by its credit
          hours, adding those values together, and dividing by the total number
          of credit hours.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this GPA calculator free?</h3>
          <p>Yes. This GPA calculator is free to use.</p>

          <h3 className="font-semibold mt-4">Does this use a 4.0 scale?</h3>
          <p>Yes. This calculator uses a standard 4.0 GPA scale.</p>
        </>
      }
      relatedTools={[
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
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
      ]}
    >
      <GpaCalculator />
    </CalculatorPageLayout>
  );
}