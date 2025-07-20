export async function generateStaticParams() {
  // ここでDBやAPIからIDのリストを取得するのが一般的
  // 今回は例として固定のIDを返す
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookDetailPage({ params }: any) {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 pt-4 text-2xl font-bold">Book Detail Page</h1>
      <p>
        This is the detail page for book with ID:{" "}
        <span className="rounded bg-gray-200 p-1 font-mono">{params.id}</span>
      </p>
    </div>
  );
}
