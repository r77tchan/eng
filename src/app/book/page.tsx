import Link from "next/link";

import { books } from "@/lib/data/index";

export default function BookPage() {
  return (
    <main className="container mx-auto min-h-screen">
      <h1 className="px-4 pt-4 text-2xl font-bold">Book List</h1>
      <div className="flex px-4 pt-4 *:block *:border">
        {books.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`}>
            {book.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
