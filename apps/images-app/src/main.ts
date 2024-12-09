import { NestFactory } from '@nestjs/core';
import { ImagesAppModule } from './images-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ImagesAppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092']
        },
        consumer: {
          groupId: 'images-consumer'
        }
      }
    }
  );
  await app.listen();
}
bootstrap();
