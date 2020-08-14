import { BlogService } from './../services/blog.service';
import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getPosts(): string {
    return this.blogService.getPosts();
  }
  @Post(':id')
  updatePost(): string {
    return this.blogService.updatePost();
  }

  @Post(':id')
  createPost(): string {
    return this.blogService.createPost();
  }

  @Delete(':id')
  deletePost(): string {
    return this.blogService.deletePost();
  }

  @Get()
  getComments(): string {
    return this.blogService.getComments();
  }
  @Post(':id')
  updateComment(): string {
    return this.blogService.updateComments();
  }

  @Post(':id')
  createComment(): string {
    return this.blogService.createComments();
  }

  @Delete(':id')
  deleteComment(): string {
    return this.blogService.deleteComments();
  }
}
