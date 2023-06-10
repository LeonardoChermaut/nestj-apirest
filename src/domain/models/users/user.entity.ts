import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../posts/post.entity';
import { IsNotEmpty, IsEmail, MinLength, MaxLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 80 })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @Column({ length: 100, unique: true })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @Column({ length: 20 })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @MaxLength(20, { message: 'A senha deve ter no máximo 20 caracteres' })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ enum: ['ADMIN', 'USER'], default: 'USER' })
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
