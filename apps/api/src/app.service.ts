import { Injectable } from '@nestjs/common';
import { type Book, prisma } from '@repo/database';

@Injectable()
export class AppService {
  async findAll(): Promise<Array<Book>> {
    const books = await prisma.book.findMany();
    return books;
  }

  async create(book: Book): Promise<Book> {
    const newBook = await prisma.book.create({
      data: {
        title: book.title,
        author: book.author,
      },
    });
    return newBook;
  }
}
