import { PartialType } from '@nestjs/swagger';
import { User } from 'src/domain/models/users';

export class UpdateUserDTO extends PartialType(User) {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly isActive: boolean;
  readonly role: string;
  readonly posts: any[];
}
