import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../presentation/view-models/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PostsModule } from 'src/presentation/view-models/posts/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
