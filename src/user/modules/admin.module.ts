import { UserModule } from './user.module';
import { ChatModule } from './chat.module';
import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/admin.controller';
import { AdminService } from '../services/admin.service';
import { AuthorModule } from './author.module';

@Module({
  imports: [ChatModule, AuthorModule, UserModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
