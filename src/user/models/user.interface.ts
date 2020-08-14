import { Post, Comment } from '../../blog/models/entry.interface';

export enum UserRole {
  author = 'Author',
  admin = 'Admin',
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  posts: Post[];
  comments: Comment[];
}
