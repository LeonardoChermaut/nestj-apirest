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

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    return await this.userService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() user: User): Promise<any> {
    user.id = Number(id);
    return await this.userService.update(id, user);
  }
}
