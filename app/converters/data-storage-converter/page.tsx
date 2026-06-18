import type { Metadata } from "next";
import DataStorageConverter from "@/components/DataStorageConverter";
import CalculatorPageLayout from "@/components/CalculatorPageLayout";

export const metadata: Metadata = {
  title: "Data Storage Converter | ToolioIQ",
  description:
    "Convert bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and binary storage units with ToolioIQ's free data storage converter.",
};

export default function DataStorageConverterPage() {
  return (
    <CalculatorPageLayout
      title="Data Storage Converter"
      description="Use this free data storage converter to convert between bits, bytes, KB, MB, GB, TB, KiB, MiB, GiB, and TiB."
      howToUse={
        <p>
          Enter a storage value, choose the unit you are converting from, choose
          the unit you want to convert to, then click Convert Storage.
        </p>
      }
      explanation={
        <p>
          A data storage converter helps you compare file sizes, storage
          capacity, download sizes, cloud storage limits, and computer memory
          units.
        </p>
      }
      faqs={
        <>
          <h3 className="font-semibold mt-4">
            Is this data storage converter free?
          </h3>
          <p>Yes. This data storage converter is free to use.</p>

          <h3 className="font-semibold mt-4">
            What is the difference between KB and KiB?
          </h3>
          <p>
            KB uses a decimal base of 1,000 bytes, while KiB uses a binary base
            of 1,024 bytes.
          </p>

          <h3 className="font-semibold mt-4">
            Can I convert gigabytes to megabytes?
          </h3>
          <p>
            Yes. Select Gigabytes as the starting unit and Megabytes as the
            target unit.
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
          title: "Time Converter",
          href: "/converters/time-converter",
          description:
            "Convert milliseconds, seconds, minutes, hours, days, weeks, months, and years.",
        },
        {
          title: "Speed Converter",
          href: "/converters/speed-converter",
          description:
            "Convert miles per hour, kilometers per hour, meters per second, feet per second, and knots.",
        },
      ]}
    >
      <DataStorageConverter />
    </CalculatorPageLayout>
  );
}