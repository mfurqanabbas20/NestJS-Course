import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // For applying validation globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // un values ko remove krdeta jo dto mei define ni hoti
    forbidNonWhitelisted: true // error de ga agr koi b unknown field isko mile gi
  }))

  await app.listen(process.env.PORT ?? 3000);
  app.enableShutdownHooks();
}
bootstrap();
