import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('My API') // Tên API
    .setDescription('API description') // Mô tả
    .setVersion('1.0') // Phiên bản
    .addBearerAuth() // Nếu dùng JWT Auth
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // http://localhost:3000/api/docs

  await app.listen(3000);
}
bootstrap();
