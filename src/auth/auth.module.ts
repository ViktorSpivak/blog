import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './authstrategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
require('dotenv/config');
import { JwtStrategy } from './authstrategy/jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy, AuthService],
})
export class AuthModule {}
