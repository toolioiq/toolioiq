import type { Metadata } from "next";
import AreaConverter from "@/components/AreaConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Area Converter | ToolioIQ",
  description:
    "Convert square meters, square feet, acres, square miles, and more with ToolioIQ's free area converter.",
};

export default function AreaConverterPage() {
  return (
    <CalculatorPageLayout
      title="Area Converter"
      description="Use this free area converter to convert between metric and imperial area units including square meters, square feet, acres, and square miles."
      howToUse={
        <p>
          Enter an area, choose the unit you are converting from, choose the unit
          you want to convert to, then click Convert Area.
        </p>
      }
      breadcrumbItems={[
        { name: "Home", url: "https://toolioiq.com" },
        { name: "Converters", url: "https://toolioiq.com/converters" },
        {
          name: "Area Converter",
          url: "https://toolioiq.com/converters/area-converter",
        },
      ]}
      faqItems={[
        {
          question: "Is this area converter free?",
          answer: "Yes. This area converter is free to use.",
        },
        {
          question: "Does this support acres and square feet?",
          answer:
            "Yes. It supports square millimeters, square centimeters, square meters, square kilometers, square inches, square feet, square yards, acres, and square miles.",
        },
        {
          question: "Can I convert square meters to square feet?",
          answer:
            "Yes. Select Square Meters as the starting unit and Square Feet as the target unit.",
        },
      ]}
      explanation={
        <p>
          An area converter helps you quickly convert surface measurements for
          real estate, construction, landscaping, design, land measurement, and
          schoolwork.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this area converter free?</h3>
          <p>Yes. This area converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does this support acres and square feet?
          </h3>
          <p>
            Yes. It supports square millimeters, square centimeters, square
            meters, square kilometers, square inches, square feet, square yards,
            acres, and square miles.
          </p>

          <h3 className="font-semibold mt-4">
            Can I convert square meters to square feet?
          </h3>
          <p>
            Yes. Select Square Meters as the starting unit and Square Feet as
            the target unit.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Unit Converter",
          href: "/converters/unit-converter",
          description: "Convert length, weight, and temperature units in one place.",
        },
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
      ]}
    >
      <AreaConverter />
    </CalculatorPageLayout>
  );
}