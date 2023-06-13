import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ExceptionHandler } from 'src/infra/exception';
import { UpdateUserDTO, CreateUserDTO, UserDTO } from 'src/domain/dto/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDTO[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async findById(id: number): Promise<UserDTO> {
    try {
      return this.checkUserId(id);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async create(user: CreateUserDTO): Promise<void> {
    try {
      const newUser = this.usersRepository.create(user);
      await this.usersRepository.save(newUser);
    } catch (error) {
      throw new ExceptionHandler(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, user: UpdateUserDTO): Promise<void> {
    try {
      await this.usersRepository.update(id, user);
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

  private async checkUserId(id: any): Promise<UserDTO> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (user === null || isNaN(id)) {
      throw new ExceptionHandler('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
