import { PostEntity } from './src/blog/models/post.entity';
import { CommentEntity } from './src/blog/models/comment.entity';
import { UserEntity } from './src/user/models/user.entity';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-52-31-94-195.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'weswarefozsnyi',
  password: 'b4de1a917f49b601cbb037a140f44be6cf7909608625966177dd5774bdb485c3',
  database: 'd1n4rv1h5aa9pl',
  entities: [UserEntity, CommentEntity, PostEntity],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
