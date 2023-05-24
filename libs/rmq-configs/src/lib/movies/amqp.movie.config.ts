import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq';

export function rmqMovieConfig(): RabbitMQConfig {
  return {
    exchanges: [
      {
        name: 'PostMoviesExchange',
        type: 'topic',
      },
      {
        name: 'GetMoviesExchange',
        type: 'topic',
      },
    ],
    uri: 'amqp://nestjs:nestjs@localhost:5672',
    connectionInitOptions: { wait: false },
    enableControllerDiscovery: true,
  };
}
