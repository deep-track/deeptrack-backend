import { Inject, Injectable } from '@nestjs/common';
import { UploadImageDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ImageSubmittedEvent } from './image-submited';


@Injectable()
export class AppService {
  constructor(
    @Inject('IMAGES_SERVICE') private readonly imagesProxyClient: ClientKafka
  ) {}

  async processImage(payload: UploadImageDto) {
    try {
      // Log the payload to verify
      console.log('Payload received:', payload);
  
      // Emit the event with the full payload
      this.imagesProxyClient.emit('image_submitted', {
        filename: payload.filename
      });
    } catch (error) {
      throw new Error(`Failed to process image at app service: ${error.message}`);
    }
  }
}