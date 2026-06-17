import Link from "next/link";

export default function GeneratorsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">
        Generators
      </h1>

      <div className="grid gap-6">
        <Link
          href="/generators/password-generator"
          className="border rounded-xl p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">
            Password Generator
          </h2>

          <p>
            Generate strong secure passwords instantly.
          </p>
        </Link>
        <Link
          href="/generators/random-number-generator"
          className="border rounded-xl p-6 hover:bg-gray-50"
>
          <h2 className="text-xl font-semibold">
            Random Number Generator
          </h2>

          <p>
            Generate random numbers between any range.
          </p>
        </Link>
      </div>
    </main>
  );
}