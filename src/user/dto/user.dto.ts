export class UserDto {
  id: string;
  name: string;
  email: string;
  role: string;
  posts: Array<string>;
  comments: Array<string>;
}
