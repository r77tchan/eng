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
  const allParams = await Promise.all(
    books.map(async (book) => {
      const { bookData }: { bookData: BookData } = await import(`@/lib/data/${book.id}.ts`);
      return bookData.pages.map((page) => ({
        id: book.id.toString(),
        page: page.page.toString(),
      }));
    })
  );
  return allParams.flat();
}

// データ取得ヘルパー関数
async function getData(id: string, page: string) {
  const { bookData }: { bookData: BookData } = await import(`@/lib/data/${id}.ts`);
  const pageData = bookData.pages.find(
    (p: Page) => p.page.toString() === page
  );
  if (!pageData) {
    notFound();
  }
  return { bookData, pageData };
}

type Props = {
  params: { id: string; page: string };
};

// ページコンポーネント
export default async function BookPage({ params }: Props) {
  try {
    const { bookData, pageData } = await getData(params.id, params.page);
    return <BookPageView bookData={bookData} pageData={pageData} params={params} />;
  } catch (error) {
    // getData内でnotFoundが呼ばれるが、import自体が失敗する可能性もある
    notFound();
  }
}