import { Controller, Post, Delete, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(): string {
    return this.userService.getUser();
  }
  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }
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
