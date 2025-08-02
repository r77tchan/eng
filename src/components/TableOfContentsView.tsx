"use client";

import Link from "next/link";
import { BookData, Page } from "@/lib/types";

interface TableOfContentsViewProps {
  bookData: BookData;
}

export default function TableOfContentsView({
  bookData,
}: TableOfContentsViewProps) {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 py-4 text-2xl font-bold">{bookData.title}</h1>
      <h2 className="px-4 pb-4 text-xl">Table of Contents</h2>
      <ul className="list-disc pr-4 pb-4 pl-10">
        {bookData.pages.map((page: Page) => (
          <li key={page.page}>
            <Link
              href={`/book/${bookData.id}/${page.page}`}
              className="text-blue-600 hover:underline"
            >
              Page {page.page}
            </Link>
          </li>
        ))}
      </ul>

      <div className="px-4 pb-4">
        <Link href="/book" className="text-blue-600 hover:underline">
          Back to Book List
        </Link>
      </div>
    </div>
  );
}
