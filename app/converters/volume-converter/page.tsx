import type { Metadata } from "next";
import VolumeConverter from "@/components/VolumeConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Volume Converter | ToolioIQ",
  description:
    "Convert liters, milliliters, gallons, cups, pints, quarts, and more with ToolioIQ's free volume converter.",
};

export default function VolumeConverterPage() {
  return (
    <CalculatorPageLayout
      title="Volume Converter"
      description="Use this free volume converter to convert between metric and US customary volume units including liters, milliliters, gallons, cups, pints, and quarts."
      howToUse={
        <p>
          Enter a volume, choose the unit you are converting from, choose the
          unit you want to convert to, then click Convert Volume.
        </p>
      }
      explanation={
        <p>
          A volume converter helps you quickly convert liquid and space
          measurements for cooking, science, DIY projects, travel, and everyday
          use.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this volume converter free?
          </h3>
          <p>Yes. This volume converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            Can I convert liters to gallons?
          </h3>
          <p>
            Yes. Select Liters as the starting unit and Gallons as the target
            unit.
          </p>

          <h3 className="font-semibold mt-4">
            Does this support cooking measurements?
          </h3>
          <p>
            Yes. It supports teaspoons, tablespoons, fluid ounces, cups, pints,
            quarts, and gallons.
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
          title: "Area Converter",
          href: "/converters/area-converter",
          description:
            "Convert square meters, square feet, acres, square miles, and more.",
        },
        {
          title: "Weight Converter",
          href: "/converters/weight-converter",
          description:
            "Convert kilograms, pounds, grams, ounces, stone, and tons.",
        },
      ]}
    >
      <VolumeConverter />
    </CalculatorPageLayout>
  );
}