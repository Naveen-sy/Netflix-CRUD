

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';


const envPath = path.resolve(__dirname, '..', '.env');


dotenv.config({ path: envPath });
console.log('Env file path:', envPath);


async function bootstrap() {
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
