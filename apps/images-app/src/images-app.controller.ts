import { Controller, Get } from '@nestjs/common';
import { ImagesAppService } from './images-app.service';
import { EventPattern } from '@nestjs/microservices';
import { UploadImageDto } from 'apps/gateway/src/app.dto';
import { Logger } from '@nestjs/common';

@Controller()
export class ImagesAppController {
  
  private readonly logger = new Logger(ImagesAppController.name);

  constructor(private readonly imagesAppService: ImagesAppService) {}

  @EventPattern('image_submitted')
  async handleImageSubmitted(uploadImageDto: UploadImageDto) {
    try {
      // 1. Validate and Log the Incoming Image Filename
      this.logger.log(`Image submission received: ${uploadImageDto.filename}`);

      // 2. Prepare the Image for Processing
      // const preparedImage = await this.imagesAppService.prepareImageForProcessing(uploadImageDto.filename);

      // 3. Store Metadata in Database
      // const imageRecord = await this.imagesAppService.saveImageMetadata({
      //   filename: uploadImageDto.filename,
      //   submissionTimestamp: new Date(),
      //   status: 'PROCESSING_STARTED'
      // });

      // 4. Detect AI-Generated Content
      const aiDetectionResult = await this.imagesAppService.detectai(uploadImageDto.filename);

      // 5. Update Image Record with Detection Results
      // await this.imagesAppService.updateImageProcessingStatus(imageRecord.id, {
      //   status: 'PROCESSING_COMPLETED',
      //   aiDetectionOutcome: aiDetectionResult
      // });

      // 6. Log the Final Result
      this.logger.log(`Image processing completed for: ${uploadImageDto.filename}. Result: ${JSON.stringify(aiDetectionResult)}`);

      // 7. Return the AI Detection Result
      return aiDetectionResult;

    } catch (error) {
      // Error Handling
      this.logger.error(`Error processing image: ${uploadImageDto.filename}`, error.stack);

      // Optionally update the database with error status
      // await this.imagesAppService.updateImageProcessingStatus(null, {
      //   status: 'PROCESSING_FAILED',
      //   errorMessage: error.message
      // });

      // Rethrow or handle the error as needed
      throw error;
    }
  }
}