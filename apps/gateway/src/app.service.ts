import { Inject, Injectable } from '@nestjs/common';
import { UploadImageDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ImageSubmittedEvent } from './image-submited';
import { DrizzleService } from '@app/drizzle/drizzle.service';

@Injectable()
export class AppService {
  constructor(
    @Inject('IMAGES_SERVICE') private readonly imagesProxyClient: ClientKafka,
    private readonly drizzleService: DrizzleService 
  ) {}

  async processImage(file: Express.Multer.File, payload: UploadImageDto) {
    try {      
        // Get the database instance if needed
        const db = this.drizzleService.getDatabase();
      // Emit the event to Kafka topic
      this.imagesProxyClient.emit('image_submitted', new ImageSubmittedEvent(file, payload.filename ));
      // const workspace = await db.query.workspace.findFirst()
      return {
        status: 'Image submitted successfully',
        filename: file.originalname
      };
    } catch (error) {
      throw new Error(`Failed to process image: ${error.message}`);
    }
  }
}