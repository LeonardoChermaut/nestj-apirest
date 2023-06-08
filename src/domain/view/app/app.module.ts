import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/domain/models/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PostsModule } from 'src/domain/models/posts/post.module';
import { TypeOrmConfigurationModule } from 'src/infra/config/typeor.config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PostsModule,
    TypeOrmConfigurationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
