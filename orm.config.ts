import { PostEntity } from './src/blog/models/post.entity';
import { CommentEntity } from './src/blog/models/comment.entity';
import { UserEntity } from './src/user/models/user.entity';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv/config');

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [UserEntity, CommentEntity, PostEntity],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
