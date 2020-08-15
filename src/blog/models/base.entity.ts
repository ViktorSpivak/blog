import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(
    type => UserEntity,
    user => user.id,
  )
  author!: UserEntity;

  @Column()
  text!: string;

  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
