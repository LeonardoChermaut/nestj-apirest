import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity(.ts,.js)'],
      synchronize: true,
    }),
  ],
  providers: [UsersService],
  controllers: [AppController, UsersController],
})
export class UsersModule {}
