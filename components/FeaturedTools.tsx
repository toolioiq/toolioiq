import Link from "next/link";
import { tools } from "@/data/tools";

const featuredToolHrefs = [
  "/calculators/age-calculator",
  "/calculators/mortgage-calculator",
  "/generators/password-generator",
  "/word-tools/word-counter",
];

export default function FeaturedTools() {
  const featuredTools = tools.filter((tool) =>
    featuredToolHrefs.includes(tool.href)
  );

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-8">Popular Tools</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}