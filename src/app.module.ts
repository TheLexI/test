import { RabbitService } from './rabbit.service';
import { RabbitMQModule } from '@nestjs-plus/rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      exchanges: [{
        name: 'rabbits',
        type: 'topic'
      }],
      uri: 'amqp://127.0.0.1:5672',
    }),
    LoggerModule,
    DataModule
  ],
  controllers: [AppController],
  providers: [
    RabbitService, AppService],
})
export class AppModule {
}
