import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  protected name: string;

  @Column()
  protected email: string;

  @Column()
  protected password: string;

  @Column()
  protected isActive: boolean;

  @Column()
  protected role: string;

  @OneToMany(() => Post, (post) => post.user)
  readonly posts: Post[];
}
