import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/">r77tchan.github.io/eng</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
