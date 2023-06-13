import { Post } from 'src/domain/models/posts';

export class PostDTO extends Post {
  readonly title: string;
  readonly content: string;
  readonly authorId: number;
}
