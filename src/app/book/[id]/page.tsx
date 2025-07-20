type PageProps = {
  params: {
    id: string;
  };
};

export default function BookDetailPage({ params }: PageProps) {
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
