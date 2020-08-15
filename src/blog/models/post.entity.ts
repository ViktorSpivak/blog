import { CommentEntity } from './comment.entity';
import { BaseEntity } from './base.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity()
export class PostEntity extends BaseEntity {
  @OneToMany(
    type => CommentEntity,
    comment => comment.id,
  )
  comments!: CommentEntity[];
}
