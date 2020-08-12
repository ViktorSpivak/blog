import { Controller, Post, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('blog/chat')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':id')
  updateUser(): string {
    return this.userService.updateUser();
  }

  @Post(':id')
  createUser(): string {
    return this.userService.createUser();
  }

  @Delete(':id')
  delUser(): string {
    return this.userService.delUser();
  }
}
