import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { ExceptionHandler } from 'src/infra/exception';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new ExceptionHandler(error.message, 404);
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    try {
      return await this.userService.findById(id);
    } catch (error) {
      throw new ExceptionHandler(error.message, 404);
    }
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      throw new ExceptionHandler(error.message, 400);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    try {
      return await this.userService.delete(id);
    } catch (error) {
      throw new ExceptionHandler(error.message, 404);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    try {
      return await this.userService.update(id, user);
    } catch (error) {
      throw new ExceptionHandler(error.message, 400);
    }
  }
}
