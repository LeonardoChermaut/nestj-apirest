import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/domain/models/users';

export class CreateUserDTO extends User {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly isActive: boolean;
  @ApiProperty()
  readonly role: string;
  @ApiProperty()
  readonly posts: any[];
}
