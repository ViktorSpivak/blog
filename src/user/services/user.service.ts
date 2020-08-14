import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'getUser!';
  }
  getUsers(): string {
    return 'getUsers!';
  }
  updateUser(): string {
    return 'updateUser!';
  }
  createUser(): string {
    return 'createUser!';
  }
  delUser(): string {
    return 'delUser!';
  }
}
