import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ToolioIQ"
            width={150}
            height={40}
            priority
            style={{
              width: "auto",
              height: "40px",
            }}
          />
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          <Link href="/tools" className="hover:text-gray-600">
            All Tools
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
          <Link href="/converters">Converters</Link>
        </div>
      </div>
    </nav>
  );
}