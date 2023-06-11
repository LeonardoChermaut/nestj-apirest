import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { User } from 'src/domain/models/users';

export class UpdateUserDTO extends PartialType(User) {
  @IsString()
  protected readonly name: string;
  @IsEmail()
  protected readonly email: string;
  @IsString()
  protected readonly password: string;
  @ApiProperty({ default: true })
  protected readonly isActive: boolean;
  @IsString()
  protected readonly role: string;
  @ApiProperty({ default: [] })
  readonly posts: any[];
}
