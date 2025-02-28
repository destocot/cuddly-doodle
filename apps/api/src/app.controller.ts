import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { Book } from '@repo/database';

@Controller('/api/books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Array<Book>> {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.appService.create(book);
  }
}
