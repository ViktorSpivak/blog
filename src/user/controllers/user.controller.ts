import { CreateUser } from 'src/user/models/user.interface';
import { UserEntity } from './../models/user.entity';
import {
  Controller,
  Post,
  Delete,
  Get,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: CreateUser): Promise<UserEntity> {
    return this.userService.createUser(user);
  }

  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() user: UserEntity) {
  //   return this.userService.updateUser(Number(id), user);
  // }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.userService.deleteUser(id);
  }
}
// @Controller()
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get(':id')
//   getUser(): string {
//     return this.userService.getUser();
//   }
//   @Get()
//   getUsers(): string {
//     return this.userService.getUsers();
//   }
//   @Post(':id')
//   updateUser(): string {
//     return this.userService.updateUser();
//   }

//   @Post(':id')
//   createUser(): string {
//     return this.userService.createUser();
//   }

//   @Delete(':id')
//   delUser(): string {
//     return this.userService.delUser();
//   }
// }
