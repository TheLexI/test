import { RabbitSubscribe, Nack } from '@nestjs-plus/rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitService {
    @RabbitSubscribe({
        exchange: 'rabbits',
        routingKey: 'rabbits_route',
        queue: 'test_queue2',
        queueOptions: { durable: false }
    })
    async getNotifications(msg: {}) {
        console.log(msg);
        return new Nack();
    }
}
