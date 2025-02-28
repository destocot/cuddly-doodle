"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { API_URL } from "../lib/constants";

export async function createBookAction(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const res = await fetch(`${API_URL}/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) return;

  if (res.ok) revalidateTag("books");
}
