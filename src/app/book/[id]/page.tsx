import { books } from "@/lib/data/index";
import { notFound } from "next/navigation";
import TableOfContentsView from "@/components/TableOfContentsView";

// ビルド時に静的生成する本のIDを定義
export function generateStaticParams() {
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

// データ取得ヘルパー関数
async function getBookData(id: string) {
  const { bookData }: { bookData: BookData } = await import(`@/lib/data/${id}.ts`);
  return bookData;
}

type Props = {
  params: { id: string };
};

export default async function BookTableOfContents({ params }: Props) {
  try {
    const bookData = await getBookData(params.id);
    return <TableOfContentsView bookData={bookData} />;
  } catch (error) {
    notFound();
  }
}