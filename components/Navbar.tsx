import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">Toolio</span>
          <span className="bg-black text-white text-sm font-bold px-2 py-1 rounded-md">
            IQ
          </span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          <Link href="/calculators" className="hover:text-gray-600">
            Calculators
          </Link>

          <Link href="/generators" className="hover:text-gray-600">
            Generators
          </Link>

          <Link href="/word-tools" className="hover:text-gray-600">
            Word Tools
          </Link>
          <Link href="/tools" className="hover:text-gray-600">
            All Tools
          </Link>
        </div>
      </div>
    </nav>
  );
}