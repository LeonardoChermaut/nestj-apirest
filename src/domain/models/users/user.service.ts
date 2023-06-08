import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RequiredFieldError } from 'src/infra/error';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findById(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async create(user: User): Promise<User> {
    this.isValidUser(user);
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async update(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  private isValidUser(user: User): boolean {
    const { name, email, password, role } = user;
    if (!name) throw new RequiredFieldError('Name is required');
    if (!email) throw new RequiredFieldError('Email is required');
    if (!password) throw new RequiredFieldError('Password is required');
    if (!role) throw new RequiredFieldError('Role is required');
    return true;
  }
}
