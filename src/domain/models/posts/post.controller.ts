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
import { Post as PostEntity } from './post.entity';

@Controller('api/v1/posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<PostEntity> {
    return await this.service.findById(id);
  }

  @Post()
  async save(@Body() post: PostEntity): Promise<PostEntity> {
    return await this.service.save(post);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() post: PostEntity): Promise<PostEntity> {
    post.id = Number(id);
    return await this.service.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.service.delete(id);
  }
}
