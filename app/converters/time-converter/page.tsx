import type { Metadata } from "next";
import TimeConverter from "@/components/TimeConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Time Converter | ToolioIQ",
  description:
    "Convert milliseconds, seconds, minutes, hours, days, weeks, months, and years with ToolioIQ's free time converter.",
};

export default function TimeConverterPage() {
  return (
    <CalculatorPageLayout
      title="Time Converter"
      description="Use this free time converter to convert between milliseconds, seconds, minutes, hours, days, weeks, months, and years."
      howToUse={
        <p>
          Enter a time value, choose the unit you are converting from, choose the
          unit you want to convert to, then click Convert Time.
        </p>
      }
      explanation={
        <p>
          A time converter helps you quickly convert time units for scheduling,
          planning, science, fitness, work, and everyday calculations.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">Is this time converter free?</h3>
          <p>Yes. This time converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I convert hours to minutes?
          </h3>
          <p>
            Yes. Select Hours as the starting unit and Minutes as the target
            unit.
          </p>

          <h3 className="font-semibold mt-4">
            How are months and years calculated?
          </h3>
          <p>
            Months and years are approximate because calendar months and leap
            years can vary.
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
          title: "Speed Converter",
          href: "/converters/speed-converter",
          description:
            "Convert miles per hour, kilometers per hour, meters per second, feet per second, and knots.",
        },
        {
          title: "Volume Converter",
          href: "/converters/volume-converter",
          description:
            "Convert liters, milliliters, gallons, cups, pints, quarts, and more.",
        },
      ]}
    >
      <TimeConverter />
    </CalculatorPageLayout>
  );
}