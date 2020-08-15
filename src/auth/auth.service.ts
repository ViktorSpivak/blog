import { User } from 'src/user/models/user.interface';
import { UserService } from '../user/services/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByName(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<User>) {
    const payload = { sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
