import type { Metadata } from "next";
import WeightConverter from "@/components/WeightConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Weight Converter | ToolioIQ",
  description:
    "Convert kilograms, pounds, grams, ounces, stone, and more with ToolioIQ's free weight converter.",
};

export default function WeightConverterPage() {
  return (
    <CalculatorPageLayout
      title="Weight Converter"
      description="Use this free weight converter to convert between metric and imperial weight units."
      howToUse={
        <p>
          Enter a weight, choose the unit you are converting from,
          choose the unit you want to convert to, then click
          Convert Weight.
        </p>
      }
      explanation={
        <p>
          A weight converter helps you quickly convert between
          kilograms, pounds, grams, ounces, stone, metric tons,
          and US tons.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this weight converter free?
          </h3>
          <p>Yes. This weight converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Does it support kilograms and pounds?
          </h3>
          <p>
            Yes. It supports kilograms, pounds, grams,
            ounces, stone, metric tons, and US tons.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Length Converter",
          href: "/converters/length-converter",
          description:
            "Convert metric and imperial length units.",
        },
        {
          title: "Temperature Converter",
          href: "/converters/temperature-converter",
          description:
            "Convert Celsius, Fahrenheit, and Kelvin.",
        },
        {
          title: "BMI Calculator",
          href: "/calculators/bmi-calculator",
          description:
            "Calculate body mass index using height and weight.",
        },
      ]}
    >
      <WeightConverter />
    </CalculatorPageLayout>
  );
}