import type { Metadata } from "next";
import SpeedConverter from "@/components/SpeedConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Speed Converter | ToolioIQ",
  description:
    "Convert miles per hour, kilometers per hour, meters per second, feet per second, and knots with ToolioIQ's free speed converter.",
};

export default function SpeedConverterPage() {
  return (
    <CalculatorPageLayout
      title="Speed Converter"
      description="Use this free speed converter to convert between miles per hour, kilometers per hour, meters per second, feet per second, and knots."
      howToUse={
        <p>
          Enter a speed, choose the unit you are converting from, choose the unit
          you want to convert to, then click Convert Speed.
        </p>
      }
      explanation={
        <p>
          A speed converter helps you quickly convert speed measurements for
          driving, travel, aviation, boating, science, fitness, and everyday use.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this speed converter free?</h3>
          <p>Yes. This speed converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I convert miles per hour to kilometers per hour?
          </h3>
          <p>
            Yes. Select Miles per Hour as the starting unit and Kilometers per
            Hour as the target unit.
          </p>

          <h3 className="font-semibold mt-4">Does this support knots?</h3>
          <p>
            Yes. It supports knots, which are commonly used in aviation and
            boating.
          </p>
        </>
      }
      relatedTools={[
        {
          title: "Unit Converter",
          href: "/converters/unit-converter",
          description:
            "Convert length, weight, and temperature units in one place.",
        },
        {
          title: "Length Converter",
          href: "/converters/length-converter",
          description: "Convert metric and imperial length units.",
        },
        {
          title: "Time Converter",
          href: "/converters/time-converter",
          description: "Convert seconds, minutes, hours, days, and weeks.",
        },
      ]}
    >
      <SpeedConverter />
    </CalculatorPageLayout>
  );
}