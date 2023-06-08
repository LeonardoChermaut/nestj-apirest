import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly repository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Post> {
    return await this.repository.findOne({ where: { id } });
  }

  async save(post: Post): Promise<Post> {
    return await this.repository.save(post);
  }

  async update(id: number, post: Post): Promise<Post> {
    await this.repository.update(id, post);
    return await this.repository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
