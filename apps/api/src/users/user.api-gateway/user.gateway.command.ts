import { Body, Controller, Post } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('/users')
export class UserGatewayCommand {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post('/createUser')
  async createUser(@Body() userDto: CreateUserDto) {
    try {
      const response = await this.amqpConnection.request({
        exchange: 'PostUsersExchange',
        routingKey: 'create-user',
        payload: userDto,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
