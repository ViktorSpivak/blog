import { User } from 'src/user/models/user.interface';

export interface Post {
  id: string;
  author: User;
  text: string;
  comments: Comment[];
}
export interface Comment {
  id: string;
  post: Post;
  author: User;
  text: string;
}
