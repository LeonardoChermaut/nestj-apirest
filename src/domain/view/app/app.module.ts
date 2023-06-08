import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController, AppService } from './index';
import { UsersModule } from 'src/domain/models/users/user.module';
import { PostsModule } from 'src/domain/models/posts/post.module';
import { TypeOrmConfigurationModule } from 'src/infra/config/typeorm.config.module';

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
