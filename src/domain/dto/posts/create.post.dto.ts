import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Post } from 'src/domain/models/posts';

export class CreatePostDTO extends Post {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 6, maxLength: 20 })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 50, maxLength: 255 })
  readonly content: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly authorId: number;
}
