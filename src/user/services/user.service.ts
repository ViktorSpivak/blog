import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'getUser!';
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
