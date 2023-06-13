import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common/decorators';
import { PostsService } from './post.service';
import { PostDTO } from 'src/domain/dto/posts/post.dto';
import { CreatePostDTO } from 'src/domain/dto/posts/create.post.dto';
import { UpdatePostDTO } from 'src/domain/dto/posts';

@Controller('api/v1/posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get()
  async findAll(): Promise<PostDTO[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<PostDTO> {
    return await this.service.findById(id);
  }

  @Post()
  async save(@Body() post: CreatePostDTO): Promise<void> {
    await this.service.save(post);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: UpdatePostDTO,
  ): Promise<void> {
    await this.service.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.service.delete(id);
  }
}
