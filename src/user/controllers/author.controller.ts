import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { AuthorService } from '../services/author.service';

@Controller('blog/post')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getPosts(): string {
    return this.authorService.getPosts();
  }
  @Put(':id')
  updatePost(): string {
    return this.authorService.updatePost();
  }

  @Post(':id')
  createPost(): string {
    return this.authorService.createPost();
  }

  @Delete(':id')
  deletePost(): string {
    return this.authorService.deletePost();
  }
}
