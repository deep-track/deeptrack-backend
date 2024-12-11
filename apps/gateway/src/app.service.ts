import { Inject, Injectable } from '@nestjs/common';
import { UploadImageDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ImageSubmittedEvent } from './image-submited';


@Injectable()
export class AppService {
  constructor(
    @Inject('IMAGES_SERVICE') private readonly imagesProxyClient: ClientKafka
  ) {}

  async processImage(file: Express.Multer.File, payload: UploadImageDto) {
    try {      
      // Emit the event to Kafka topic
      this.imagesProxyClient.emit('image_submitted', new ImageSubmittedEvent(file, payload.filename ));
      return {
        status: 'Image submitted successfully',
        filename: file.originalname
      };
    } catch (error) {
      throw new Error(`Failed to process image: ${error.message}`);
    }
  }
}