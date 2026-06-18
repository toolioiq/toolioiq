import type { Metadata } from "next";
import LengthConverter from "@/components/LengthConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Length Converter | ToolioIQ",
  description:
    "Convert millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles with ToolioIQ's free length converter.",
};

export default function LengthConverterPage() {
  return (
    <CalculatorPageLayout
      title="Length Converter"
      description="Use this free length converter to convert between metric and imperial length units including millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles."
      howToUse={
        <p>
          Enter a length, choose the unit you are converting from, choose the
          unit you want to convert to, then click Convert Length.
        </p>
      }
      explanation={
        <p>
          A length converter helps you quickly convert measurements between
          metric units and imperial units for travel, construction, school,
          fitness, design, and everyday use.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this length converter free?</h3>
          <p>Yes. This length converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does it support metric and imperial units?
          </h3>
          <p>
            Yes. It supports millimeters, centimeters, meters, kilometers,
            inches, feet, yards, and miles.
          </p>

          <h3 className="font-semibold mt-4">
            Can I convert centimeters to inches?
          </h3>
          <p>
            Yes. Select Centimeters as the starting unit and Inches as the target
            unit.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Temperature Converter",
          href: "/converters/temperature-converter",
          description: "Convert Celsius, Fahrenheit, and Kelvin temperatures.",
        },
        {
          title: "Percentage Calculator",
          href: "/calculators/percentage-calculator",
          description: "Calculate percentages quickly and easily.",
        },
        {
          title: "Random Number Generator",
          href: "/generators/random-number-generator",
          description: "Generate random numbers between any range.",
        },
      ]}
    >
      <LengthConverter />
    </CalculatorPageLayout>
  );
}