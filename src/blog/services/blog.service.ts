import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  getComments(): string {
    return 'getComments!';
  }
  createComments(): string {
    return 'createComments!';
  }
  updateComments(): string {
    return 'updateComments!';
  }
  deleteComments(): string {
    return 'delComments!';
  }
  getPosts(): string {
    return 'getPosts!';
  }
  createPost(): string {
    return 'createPost!';
  }
  updatePost(): string {
    return 'updatePost!';
  }
  deletePost(): string {
    return 'delPost!';
  }
}
