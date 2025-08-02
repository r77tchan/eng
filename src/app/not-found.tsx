import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="px-4 py-4 text-2xl font-bold">404 - Page Not Found</h1>
      <p className="px-4 pb-4">The page you are looking for does not exist.</p>
      <div className="px-4 pb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
