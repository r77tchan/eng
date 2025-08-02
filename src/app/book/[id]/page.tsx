import { books } from "@/lib/data/index";
import { notFound } from "next/navigation";
import TableOfContentsView from "@/components/TableOfContentsView";
import { BookData } from "@/lib/types";

// ビルド時に静的生成する本のIDを定義
export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

// データ取得ヘルパー関数
async function getBookData(id: string) {
  const { bookData }: { bookData: BookData } = await import(
    `@/lib/data/${id}.ts`
  );
  return bookData;
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BookTableOfContents({ params }: Props) {
  try {
    const { id } = await params;
    const bookData = await getBookData(id);
    return <TableOfContentsView bookData={bookData} />;
  } catch (error) {
    notFound();
  }
}
