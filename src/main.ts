import { NestFactory } from '@nestjs/core';
import { AppModule } from './domain/view/app/app.module';
import { HttpExceptionFilter } from './infra/exception/index';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
