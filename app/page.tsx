import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to ToolioIQ
        </h1>

        <p className="text-xl mb-10">
          Smart calculators, converters, generators,
          and productivity tools.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <Link
            href="/calculators"
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h2 className="font-bold text-lg mb-2">
              Calculators
            </h2>
            <p>
              Financial, health, and education tools.
            </p>
          </Link>

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">
              Converters
            </h2>
            <p>
              Unit, temperature, and measurement conversions.
            </p>
          </div>

          <Link
            href="/generators"
            className="border rounded-xl p-6 hover:bg-gray-50"
          >
            <h2 className="font-bold text-lg mb-2">
              Generators
            </h2>
            <p>
              Passwords, names, and random generators.
            </p>
          </Link>

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">
              Word Tools
            </h2>
            <p>
              Scramblers, counters, and text utilities.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}