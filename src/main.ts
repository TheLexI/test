import { AppLoggerService } from './logger/app-logger.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const app = await NestFactory.create(AppModule);
  
  app.useLogger(await app.resolve(AppLoggerService));


  await app.listen(3000, ()=>{
    console.log('listen');
  });
}
bootstrap();
