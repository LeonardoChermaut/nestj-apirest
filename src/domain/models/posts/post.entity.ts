import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Post {
  @Column({ type: 'int', unique: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, nullable: false })
  title: string;

  @Column({ length: 255, nullable: false })
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: false })
  authorId: number;
}
