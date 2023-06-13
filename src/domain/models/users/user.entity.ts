import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ enum: ['admin', 'user'], default: 'user' })
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
