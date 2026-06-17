import Link from "next/link";

const popularTools = [
  {
    title: "Age Calculator",
    href: "/calculators/age-calculator",
    description: "Calculate your exact age in years, months, and days.",
  },
  {
    title: "Mortgage Calculator",
    href: "/calculators/mortgage-calculator",
    description: "Estimate monthly mortgage payments and interest.",
  },
  {
    title: "Password Generator",
    href: "/generators/password-generator",
    description: "Generate strong secure passwords instantly.",
  },
  {
    title: "Word Counter",
    href: "/word-tools/word-counter",
    description: "Count words, characters, and sentences.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Smart Tools for Everyday Tasks
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Free calculators, generators, and word tools built to help you get
            quick answers fast.
          </p>

          <Link
            href="/calculators"
            className="bg-black text-white px-8 py-4 rounded-xl font-medium inline-block"
          >
            Explore Tools
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Tool Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/calculators"
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">Calculators</h3>
            <p className="text-gray-600">
              Finance, health, education, and everyday calculators.
            </p>
          </Link>

          <Link
            href="/generators"
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">Generators</h3>
            <p className="text-gray-600">
              Passwords, random numbers, names, and more.
            </p>
          </Link>

          <Link
            href="/word-tools"
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">Word Tools</h3>
            <p className="text-gray-600">
              Word counters, character counters, and writing utilities.
            </p>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Popular Tools</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {popularTools.map((tool) => (
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
    </main>
  );
}