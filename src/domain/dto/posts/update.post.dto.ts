import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Post } from 'src/domain/models/posts';

export class UpdatePostDTO extends PartialType(Post) {
  @IsString()
  @ApiProperty({ minLength: 6, maxLength: 20 })
  readonly title?: string;

  @IsString()
  @ApiProperty({ minLength: 50, maxLength: 255 })
  readonly content?: string;
}
