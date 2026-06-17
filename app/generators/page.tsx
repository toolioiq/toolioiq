import Link from "next/link";
import { tools } from "@/data/tools";

export default function GeneratorsPage() {
  const generatorTools = tools.filter(
    (tool) => tool.category === "Generators"
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Generators</h1>

      <p className="text-gray-600 mb-8">
        Free generators for passwords, random numbers, names, text, and more.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {generatorTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}