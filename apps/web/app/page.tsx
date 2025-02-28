import type { Book } from "@repo/database";
import { CreateBookForm } from "../components/create-book-form";
import { API_URL } from "../lib/constants";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(`${API_URL}/api/books`, {
    next: { tags: ["books"] },
  });
  if (!res.ok) return <ErrorState />;

  const books: Array<Book> = await res.json();

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Books</h1>

        <hr />

        <CreateBookForm />

        <hr />

        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id}>
              <div className="flex flex-col">
                <p>
                  {book.title} by{" "}
                  <span className="font-medium">{book.author}</span>
                </p>
                <span className="text-xs text-gray-500">
                  added on {new Date(book.createdAt).toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ErrorState = () => {
  return (
    <p className="text-red-500">
      An error occurred while fetching the data. Please try again later.
    </p>
  );
};
