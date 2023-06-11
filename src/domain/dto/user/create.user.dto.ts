import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/domain/models/users';

export class CreateUserDTO extends User {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 6, maxLength: 80 })
  protected readonly name: string;

  @IsEmail({ allow_display_name: true })
  @ApiProperty({ uniqueItems: true })
  protected readonly email: string;

  @IsString()
  @ApiProperty({ minLength: 6, maxLength: 20 })
  protected readonly password: string;

  @ApiProperty({ default: true })
  protected readonly isActive: boolean;

  @IsString()
  @ApiProperty({ enum: ['admin', 'user'], default: 'user' })
  protected readonly role: string;
}
