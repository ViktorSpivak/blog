import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UserRole } from './user.interface';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.author })
  role!: UserRole;

  @BeforeInsert()
  emailToLowerCase(): void {
    this.email = this.email.toLowerCase();
  }
  @BeforeInsert()
  addId(): void {
    this.id = uuidv4();
  }
}
