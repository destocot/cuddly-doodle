import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { Book } from '@repo/database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Array<Book>> {
    return this.appService.findAll();
  }
}
