import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <h1 className="px-4 pt-4 text-2xl font-bold">
        English learning website for me
      </h1>
      <p className="px-4 pt-4">
        It's still in the testing phase, but I aim to make it publicly available
        in the future.
      </p>
      <div className="container mx-auto flex flex-wrap *:h-64 *:min-w-96 *:flex-1/2">
        <div className="bg-red-300">
          <Link href="/book" className="flex h-full flex-col bg-yellow-200">
            <span className="border">Learning through reading</span>
            <span className="border">Book List</span>
          </Link>
        </div>
        <div className="bg-blue-300">
          <span>in preparation</span>
        </div>
      </div>
    </main>
  );
}
