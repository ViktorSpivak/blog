import { PostEntity } from './post.entity';
import { BaseEntity } from './base.entity';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class CommentEntity extends BaseEntity {
  @ManyToOne(
    type => PostEntity,
    postEntity => postEntity.comments,
  )
  post!: PostEntity;
}
