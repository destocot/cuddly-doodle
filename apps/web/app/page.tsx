import type { Book } from "@repo/database";

const API_URL = process.env.API_URL
  ? `${process.env.API_URL}`
  : "http://localhost:3000";

export default async function Page() {
  const res = await fetch(`${API_URL}/`);

  if (!res.ok) {
    return <p className="text-red-600">Internal server error</p>;
  }

  const books: Array<Book> = await res.json();

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Books</h1>

        <hr />

        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by <span className="font-medium">{book.author}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
