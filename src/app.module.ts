import { config } from './../orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [AuthModule, BlogModule, UserModule, TypeOrmModule.forRoot(config)],
  // controllers: [AuthorModule],
  // providers: [AppService],
})
export class AppModule {}
