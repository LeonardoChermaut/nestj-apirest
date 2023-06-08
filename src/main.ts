import { NestFactory } from '@nestjs/core';
import { AppModule } from './domain/view/app/app.module';
import { HttpExceptionFilter } from './infra/exception/http.execption.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
