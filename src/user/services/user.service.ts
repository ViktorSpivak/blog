import { UserEntity } from './../models/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }
  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ id });

    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }
  async deleteUser(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  // async updateUser(id: string, user: UserEntity): Promise<UserEntity> {
  //   const updateUser = await this.usersRepository.update(id, user);
  //   return updateUser;
  // }
}

// @Injectable()
// export class UserService {
//   getUser(): string {
//     return 'getUser!';
//   }
//   getUsers(): string {
//     return 'getUsers!';
//   }
//   updateUser(): string {
//     return 'updateUser!';
//   }
//   createUser(): string {
//     return 'createUser!';
//   }
//   delUser(): string {
//     return 'delUser!';
//   }
// }
