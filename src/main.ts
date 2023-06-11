import { NestFactory } from '@nestjs/core';
import { AppModule } from './domain/view/app/app.module';
import { UseGlobalHttpFilter } from './infra/exception';
import { UseGlobalValidationPipe } from './infra/usepipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new UseGlobalHttpFilter());
  app.useGlobalPipes(new UseGlobalValidationPipe());
  await app.listen(3000);
}
bootstrap();
