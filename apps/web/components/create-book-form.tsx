"use client";

import { createBookAction } from "../actions/create-book.action";

export const CreateBookForm = () => {
  return (
    <form action={createBookAction} className="gap-x-2 flex">
      <div className="flex-1">
        <label className="sr-only">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>

      <div className="flex-1">
        <label className="sr-only">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-blue-50 shadow hover:bg-blue-500/90 h-9 px-4 py-2"
      >
        &#43;
      </button>
    </form>
  );
};
