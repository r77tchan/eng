import Link from "next/link";

import { books } from "@/lib/data/index";

export default function BookPage() {
  return (
    <main className="container mx-auto min-h-screen">
      <h1 className="px-4 py-4 text-2xl font-bold">Book List</h1>
      <div className="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="hover:bg-hover block border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {book.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
