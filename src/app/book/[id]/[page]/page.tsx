import { books } from "@/lib/data/index";
import { notFound } from "next/navigation";
import BookPageView from "@/components/BookPageView";

// --- DATA STRUCTURES ---
interface Segment {
  text: string;
  translation?: string;
}

interface Line {
  english: string;
  japanese: string;
  segments: Segment[];
}

interface Page {
  page: number;
  content: Line[];
}

interface BookData {
  id: number;
  title: string;
  pages: Page[];
}
// --- END DATA STRUCTURES ---

// ビルド時に静的生成するページの全組み合わせを定義
export async function generateStaticParams() {
  const params: { id: string; page: string }[] = [];
  for (const book of books) {
    const { bookData }: { bookData: BookData } = await import(`@/lib/data/${book.id}.ts`);
    for (let i = 1; i <= bookData.pages.length; i++) {
      params.push({ id: book.id.toString(), page: i.toString() });
    }
  }
  return params;
}

// ページコンポーネント
export default async function BookPage({ params }: { params: { id: string; page: string } }) {
  try {
    const { bookData }: { bookData: BookData } = await import(`@/lib/data/${params.id}.ts`);

    const pageData = bookData.pages.find(
      (p: Page) => p.page.toString() === params.page
    );

    if (!pageData) {
      notFound();
    }

    return <BookPageView bookData={bookData} pageData={pageData} params={params} />;
  } catch (error) {
    console.error(error);
    notFound();
  }
}