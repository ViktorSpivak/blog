import { CommentEntity } from './comment.entity';
import { BaseEntity } from './base.entity';
import { Entity, OneToMany } from 'typeorm';

// @Entity()
// export class BaseEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id!: string;
//   @Column()
//   author!: UserEntity;
//   @Column()
//   text!: string;
// }

@Entity()
export class PostEntity extends BaseEntity {
  @OneToMany(
    type => CommentEntity,
    commentEntity => commentEntity.post,
  )
  comments!: CommentEntity[];
}
