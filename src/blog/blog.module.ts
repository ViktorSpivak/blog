import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';
import { Module } from '@nestjs/common';
import { PostEntity } from './models/post.entity';
import { CommentEntity } from './models/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity, PostEntity]),
    AuthModule,
    UserModule,
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
