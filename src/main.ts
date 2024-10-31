import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {HttpStatus, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }))
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
