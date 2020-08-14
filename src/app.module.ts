import { config } from './../orm.config';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthorModule } from './author.module';
import { Module } from '@nestjs/common';
import { AdminModule } from './user/modules/admin.module';
import { AuthorModule } from './user/modules/author.module';
// import { ChatModule } from './chat.module';
// import { AppController } from '../app.controller';
// import { AppService } from '../services/app.service';

@Module({
  imports: [AdminModule, AuthorModule, TypeOrmModule.forRoot(config)],
  // controllers: [AuthorModule],
  // providers: [AppService],
})
export class AppModule {}
