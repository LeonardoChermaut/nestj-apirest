import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/domain/models/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PostsModule } from 'src/domain/models/posts/post.module';
import TypeOrmConfiguration from 'src/infra/config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot(TypeOrmConfiguration),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
