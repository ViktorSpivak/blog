import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAuthors(): string {
    return 'getAuthors!';
  }
  getAuthor(): string {
    return 'getUser!';
  }
  updateAuthor(): string {
    return 'updateUser!';
  }
  createAuthor(): string {
    return 'createUser!';
  }
  delAuthor(): string {
    return 'delUser!';
  }
}
