import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { CreateUserDTO } from 'src/domain/dto/user/create.user.dto';
import { UpdateUserDTO } from 'src/domain/dto/user/update.user.dto';

@Controller('api/v1/users')
@UsePipes(ValidationPipe)
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
  async create(
    @Body() user: CreateUserDTO,
    @Res() response: any,
  ): Promise<User> {
    const newUser = await this.userService.create(user);
    return response.status(HttpStatus.CREATED).json(newUser);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDTO,
  ): Promise<any> {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<void> {
    return await this.userService.delete(id);
  }
}
