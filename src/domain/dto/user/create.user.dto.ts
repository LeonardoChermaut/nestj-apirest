import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PostDTO } from '../posts';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'varchar', minLength: 6, maxLength: 80 })
  name: string;

  @IsEmail({ allow_display_name: true })
  @ApiProperty({
    type: 'varchar',
    minLength: 6,
    maxLength: 80,
    uniqueItems: true,
  })
  email: string;

  @IsString()
  @ApiProperty({ type: 'varchar', minLength: 6, maxLength: 80 })
  password: string;

  @ApiProperty({ type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: string;

  @ApiProperty({ type: 'array', items: { type: 'string' } })
  readonly posts: PostDTO[];
}
