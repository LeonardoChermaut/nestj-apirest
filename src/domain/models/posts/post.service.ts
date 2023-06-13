import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostDTO, UpdatePostDTO } from 'src/domain/dto/posts';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly repository: Repository<Post>,
  ) {}

  async findAll(): Promise<PostDTO[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<PostDTO> {
    return await this.repository.findOne({ where: { id } });
  }

  async save(post: Post): Promise<void> {
    await this.repository.save(post);
  }

  async update(id: number, post: UpdatePostDTO): Promise<void> {
    await this.repository.update(id, post);
    await this.repository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
