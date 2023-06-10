import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { ExceptionHandler } from 'src/infra/exception';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(@Res() response): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      return response.status(HttpStatus.OK).json(users);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number, @Res() response: any): Promise<User> {
    try {
      const user = await this.userService.findById(id);
      return response.status(HttpStatus.OK).json(user);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() user: User, @Res() response: any): Promise<User> {
    try {
      const newUser = await this.userService.create(user);
      return response.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    try {
      return await this.userService.delete(id);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    try {
      return await this.userService.update(id, user);
    } catch (error) {
      throw new ExceptionHandler(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
