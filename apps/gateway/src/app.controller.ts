import { Body, Controller,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UploadImageDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/uploadImage')
  async uploadImage(@Body() uploadImageDto: UploadImageDto) {
    return this.appService.processImage(uploadImageDto);
  }

  
}
