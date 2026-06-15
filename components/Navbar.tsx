import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          ToolioIQ
        </Link>

        <div className="flex gap-6">
          <Link href="/calculators">Calculators</Link>
          <Link href="/converters">Converters</Link>
          <Link href="/generators">Generators</Link>
          <Link href="/word-tools">Word Tools</Link>
        </div>
      </div>
    </nav>
  );
}