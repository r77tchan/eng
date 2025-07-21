import { books } from "@/lib/data/index";
import { notFound } from "next/navigation";
import TableOfContentsView from "@/components/TableOfContentsView";

// ビルド時に静的生成する本のIDを定義
export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

// --- NEW DATA STRUCTURES ---
interface Page {
  page: number;
}

interface BookData {
  id: number;
  title: string;
  pages: Page[];
}
// --- END NEW DATA STRUCTURES ---

export default async function BookTableOfContents({ params }: { params: { id: string } }) {
  try {
    const { bookData }: { bookData: BookData } = await import(`@/lib/data/${params.id}.ts`);

    return <TableOfContentsView bookData={bookData} />;
  } catch (error) {
    notFound();
  }
}