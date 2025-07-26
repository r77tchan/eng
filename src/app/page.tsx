import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <h1 className="p-4 text-2xl font-bold">My English Learning Website</h1>
      <p className="px-4 pb-4">
        It&apos;s still in the testing phase, but I hope to release it publicly
        in the future.
      </p>
      <div className="grid grid-cols-1 gap-8 pb-4 lg:grid-cols-2">
        <div className="bg-red1 rounded text-center outline">
          <h2 className="px-4 py-8 text-2xl font-bold">Learn by Reading</h2>
          <Link
            href="/book"
            className="bg-red2 hover:bg-hover mb-12 inline-block rounded border px-8 py-4 font-bold transition-all duration-75 hover:shadow-lg"
          >
            Go to Book List
          </Link>
        </div>
        <div className="bg-blue1 rounded text-center outline">
          <h2 className="px-4 py-8 text-2xl font-bold">Learn by Typing</h2>
          <span className="bg-blue2 mb-12 inline-block cursor-not-allowed rounded border px-8 py-4 font-bold">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}
