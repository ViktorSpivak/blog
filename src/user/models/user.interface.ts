import { Post, Comment } from './../../blog/models/blog-entry.interface';

export enum RoleEnum {
  author = 'Author',
  admin = 'Admin',
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
  posts: Post[];
  comments: Comment[];
}
