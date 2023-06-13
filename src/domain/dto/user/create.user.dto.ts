import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/domain/models/users';

export class CreateUserDTO extends User {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 6, maxLength: 80 })
  readonly name: string;

  @IsEmail({ allow_display_name: true })
  @ApiProperty({ uniqueItems: true })
  readonly email: string;

  @IsString()
  @ApiProperty({ minLength: 6, maxLength: 20 })
  readonly password: string;

  @ApiProperty({ default: true })
  readonly isActive: boolean;

  @ApiProperty({ enum: ['admin', 'user'], default: 'user' })
  readonly role: string;
}
