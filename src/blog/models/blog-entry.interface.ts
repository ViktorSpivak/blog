import { User } from './../../user/models/user.entyty';

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
