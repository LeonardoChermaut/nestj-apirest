import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RequiredFieldError } from 'src/infra/error';
import { ExceptionHandler } from 'src/infra/exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOne({ where: { id } });
      return user;
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async create(user: User): Promise<User> {
    try {
      this.isValidUser(user);
      const newUser = this.usersRepository.create(user);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, user: User): Promise<User> {
    try {
      await this.usersRepository.update(id, user);
      return await this.usersRepository.findOne({ where: { id } });
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  private isValidUser(user: User): boolean {
    for (const field in user) {
      if (!user[field]) throw new RequiredFieldError(field);
    }
    return true;
  }
}
