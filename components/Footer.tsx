import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-3">
              ToolioIQ
            </h2>

            <p className="text-gray-600">
              Free calculators, generators, and word tools
              designed to help you get quick answers fast.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-3">
              Categories
            </h2>

            <div className="flex flex-col gap-2">
              <Link
                href="/calculators"
                className="hover:text-gray-600"
              >
                Calculators
              </Link>

              <Link
                href="/generators"
                className="hover:text-gray-600"
              >
                Generators
              </Link>

              <Link
                href="/word-tools"
                className="hover:text-gray-600"
              >
                Word Tools
              </Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-3">
              Popular Tools
            </h2>

            <div className="flex flex-col gap-2">
              <Link
                href="/calculators/mortgage-calculator"
                className="hover:text-gray-600"
              >
                Mortgage Calculator
              </Link>

              <Link
                href="/generators/password-generator"
                className="hover:text-gray-600"
              >
                Password Generator
              </Link>

              <Link
                href="/word-tools/word-counter"
                className="hover:text-gray-600"
              >
                Word Counter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} ToolioIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}