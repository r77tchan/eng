import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-bar text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/" className="block p-4 hover:bg-gray-500">
            r77tchan.github.io/eng
          </Link>
        </div>
        <nav>
          <ul className="flex">
            {/* <li>
              <Link href="/" className="block p-4">
                Settings
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
