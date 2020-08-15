import { AuthModule } from 'src/auth/auth.module';
import { UserEntity } from 'src/user/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],

  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
