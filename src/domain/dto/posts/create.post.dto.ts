import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'varchar',
    minLength: 6,
    maxLength: 80,
    nullable: false,
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    minLength: 50,
    maxLength: 255,
    nullable: false,
  })
  content: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: 'integer', nullable: false })
  authorId: number;
}
