import { Post } from 'src/domain/models/posts';
import { User } from 'src/domain/models/users';

export class UserDTO extends User {
  readonly name: string;
  readonly email: string;
  readonly isActive: boolean;
  readonly role: string;
  readonly posts: Post[];
}
