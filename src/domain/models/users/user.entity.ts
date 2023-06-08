import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 80, nullable: false })
  name: string;

  @Column({ length: 100, unique: true, nullable: false })
  email: string;

  @Column({ length: 20, nullable: false })
  password: string;

  @Column({ default: true, nullable: false })
  isActive: boolean;

  @Column({ enum: ['ADMIN', 'USER'], default: 'USER' })
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
