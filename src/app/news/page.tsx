import Link from "next/link";

import { news } from "@/lib/data/index";

export default function NewsPage() {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 py-4 text-2xl font-bold">News List</h1>
      <div className="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="hover:bg-hover block border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-lg font-bold">{item.title.english}</p>
            <p className="text-sm text-gray-600">{item.title.japanese}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
