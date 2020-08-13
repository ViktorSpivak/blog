import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
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
