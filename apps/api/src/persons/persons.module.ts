import { Module } from '@nestjs/common';
import { PersonsEntity, TypeormModuleConfig } from '@kinopoisk-snitch/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { PersonsCommand } from './api-gateway/person.command';
import { rmqPersonConfig } from '@kinopoisk-snitch/rmq-configs'

@Module({
  imports: [
    TypeormModuleConfig,
    TypeOrmModule.forFeature([PersonsEntity]),
    RabbitMQModule.forRoot(RabbitMQModule, rmqPersonConfig()),
  ],
  controllers: [
    PersonsCommand,
  ],
})
export class PersonsModule {}
