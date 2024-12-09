import { Controller, Get } from '@nestjs/common';
import { ImagesAppService } from './images-app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ImagesAppController {
  constructor(private readonly imagesAppService: ImagesAppService) {}

@EventPattern('image_submitted')
async handleImageSubmitted(data: any){
  
console.log(data)

//1. Prepare the Image For Processing

//2. Store in DB ?

//3. Process the Image

//4.  Response, Reason

}
}
