import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/domain/models/users';

export class CreateUserDTO extends User {
  protected readonly name: string;
  protected readonly email: string;
  protected readonly password: string;
  protected readonly isActive: boolean;
  protected readonly role: string;
}
