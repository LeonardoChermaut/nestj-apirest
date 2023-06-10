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

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(@Res() response): Promise<User[]> {
    const users = await this.userService.findAll();
    return response.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async findById(@Param('id') id: number, @Res() response: any): Promise<User> {
    const user = await this.userService.findById(id);
    return response.status(HttpStatus.OK).json(user);
  }

  @Post()
  async create(@Body() user: User, @Res() response: any): Promise<User> {
    const newUser = await this.userService.create(user);
    return response.status(HttpStatus.CREATED).json(newUser);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<any> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    return await this.userService.delete(id);
  }
}
