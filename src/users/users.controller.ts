import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User> {
    this.validate(id);
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    this.validate(id);
    return await this.userService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() user: User): Promise<any> {
    this.valideateUser(user);
    user.id = Number(id);
    return await this.userService.update(id, user);
  }

  validate(id: number): void {
    if (!id) throw new Error('ID IS REQUIRED');
  }

  valideateUser(user: User): void {
    if (!user) throw new Error('USER IS REQUIRED');
  }
}
