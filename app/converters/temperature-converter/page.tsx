import type { Metadata } from "next";
import TemperatureConverter from "@/components/TemperatureConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Temperature Converter | ToolioIQ",
  description:
    "Convert Celsius, Fahrenheit, and Kelvin temperatures with ToolioIQ's free temperature converter.",
};

export default function TemperatureConverterPage() {
  return (
    <CalculatorPageLayout
      title="Temperature Converter"
      description="Use this free temperature converter to convert between Celsius, Fahrenheit, and Kelvin."
      howToUse={
        <p>
          Enter a temperature, choose the unit you are converting from, choose
          the unit you want to convert to, then click Convert Temperature.
        </p>
      }
      explanation={
        <p>
          A temperature converter helps you quickly convert temperature values
          between Celsius, Fahrenheit, and Kelvin for weather, science, cooking,
          and everyday use.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this temperature converter free?
          </h3>
          <p>Yes. This temperature converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I convert Celsius to Fahrenheit?
          </h3>
          <p>
            Yes. You can convert Celsius to Fahrenheit, Fahrenheit to Celsius,
            Celsius to Kelvin, Kelvin to Celsius, and more.
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
          title: "Random Number Generator",
          href: "/generators/random-number-generator",
          description: "Generate random numbers between any range.",
        },
        {
          title: "Word Counter",
          href: "/word-tools/word-counter",
          description: "Count words, characters, and sentences instantly.",
        },
      ]}
    >
      <TemperatureConverter />
    </CalculatorPageLayout>
  );
}