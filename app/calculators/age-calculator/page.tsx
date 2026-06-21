import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Age Calculator | ToolioIQ",
  description:
    "Calculate your exact age in years, months, and days with ToolioIQ's free age calculator.",
};

export default function AgeCalculatorPage() {
  return (
    <CalculatorPageLayout
      title="Age Calculator"
      description="Use this free age calculator to find your exact age in years, months, and days based on your date of birth."
      howToUse={
        <p>
          Select your birth date, then click the Calculate Age button. The tool
          will instantly show your current age in years, months, and days.
        </p>
      }
      breadcrumbItems={[
      { name: "Home", url: "https://toolioiq.com" },
      { name: "Calculators", url: "https://toolioiq.com/calculators" },
      {
        name: "Age Calculator",
        url: "https://toolioiq.com/calculators/age-calculator",
      },
    ]}
    faqItems={[
      {
        question: "Is this age calculator free?",
        answer: "Yes. This age calculator is free to use.",
      },
      {
        question: "Can I calculate my exact age?",
        answer:
          "Yes. This calculator can estimate your age in years, months, and days based on your date of birth.",
      },
      {
        question: "Can I use a future date?",
        answer:
          "No. The calculator is designed to calculate age from a past birth date.",
      },
    ]}
      explanation={
        <p>
          An age calculator determines how much time has passed between a birth
          date and today’s date.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this age calculator free?</h3>
          <p>Yes. This age calculator is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does it calculate months and days?
          </h3>
          <p>Yes. It calculates your age in years, months, and days.</p>
        </>
      }
      relatedTools={[
        {
          title: "BMI Calculator",
          href: "/calculators/bmi-calculator",
          description: "Calculate your body mass index using height and weight.",
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
      <AgeCalculator />
    </CalculatorPageLayout>
  );
}