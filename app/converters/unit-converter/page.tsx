import type { Metadata } from "next";
import UnitConverter from "@/components/UnitConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Unit Converter | ToolioIQ",
  description:
    "Convert length, weight, and temperature units with ToolioIQ's free unit converter.",
};

export default function UnitConverterPage() {
  return (
    <CalculatorPageLayout
      title="Unit Converter"
      description="Use this free unit converter to convert length, weight, and temperature units in one place."
      howToUse={
        <p>
          Choose a category, enter a value, select the unit you are converting
          from, select the unit you want to convert to, then click Convert Unit.
        </p>
      }
      breadcrumbItems={[
        { name: "Home", url: "https://toolioiq.com" },
        { name: "Converters", url: "https://toolioiq.com/converters" },
        {
          name: "Unit Converter",
          url: "https://toolioiq.com/converters/unit-converter",
        },
      ]}
      faqItems={[
        {
          question: "Is this unit converter free?",
          answer: "Yes. This unit converter is free to use.",
        },
        {
          question: "What units does this converter support?",
          answer:
            "It currently supports length, weight, and temperature conversions. More categories can be added later.",
        },
        {
          question: "Can I convert metric and imperial units?",
          answer:
            "Yes. You can convert between metric and imperial units for supported categories such as length and weight.",
        },
      ]}
      explanation={
        <p>
          A unit converter helps you quickly convert measurements across
          different systems, including metric and imperial units.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this unit converter free?</h3>
          <p>Yes. This unit converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            What units does this converter support?
          </h3>
          <p>
            It currently supports length, weight, and temperature conversions.
            More categories can be added later.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Length Converter",
          href: "/converters/length-converter",
          description: "Convert metric and imperial length units.",
        },
        {
          title: "Weight Converter",
          href: "/converters/weight-converter",
          description: "Convert kilograms, pounds, grams, ounces, stone, and tons.",
        },
        {
          title: "Temperature Converter",
          href: "/converters/temperature-converter",
          description: "Convert Celsius, Fahrenheit, and Kelvin.",
        },
      ]}
    >
      <UnitConverter />
    </CalculatorPageLayout>
  );
}