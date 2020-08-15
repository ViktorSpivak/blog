// import { RegisterDTO, LoginDTO } from './../user/models/user.model';
import { User, CreateUser } from './../user/models/user.interface';
import { UserEntity } from 'src/user/models/user.entity';
import { UserService } from 'src/user/services/user.service';
require('dotenv/config');
import { AuthGuard } from '@nestjs/passport';
// import { CreateUser } from 'src/user/models/user.interface';

import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
  HttpCode,
} from '@nestjs/common';
import { LocalAuthGuard, JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}
  @Post('register')
  register(@Body() credentials: CreateUser): void {
    this.userService.createUser(credentials);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req: any): any {
    const { user } = req;
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
