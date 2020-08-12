// import { AuthorModule } from './author.module';
import { Module } from '@nestjs/common';
import { AdminModule } from './admin.module';
import { AuthorModule } from './author.module';
// import { ChatModule } from './chat.module';
// import { AppController } from '../app.controller';
// import { AppService } from '../services/app.service';

@Module({
  imports: [AdminModule, AuthorModule],
  // controllers: [AuthorModule],
  // providers: [AppService],
})
export class AppModule {}
