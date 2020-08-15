import { CommentEntity } from 'src/blog/models/comment.entity';
import { PostEntity } from 'src/blog/models/post.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UserRole } from './user.interface';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.author })
  role!: UserRole;

  @Column({ default: null })
  token!: string;

  @ManyToOne(
    type => PostEntity,
    post => post.id,
  )
  posts!: PostEntity[];

  @OneToMany(
    type => CommentEntity,
    comment => comment.id,
  )
  comments!: PostEntity[];

  @BeforeInsert()
  emailToLowerCase(): void {
    this.email = this.email.toLowerCase();
  }
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
