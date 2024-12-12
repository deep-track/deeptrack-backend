import { Module } from '@nestjs/common';
import { ImagesAppController } from './images-app.controller';
import { ImagesAppService } from './images-app.service';
import { LibDrizzleModule } from '@app/lib-drizzle';

@Module({
  imports: [LibDrizzleModule],
  controllers: [ImagesAppController],
  providers: [ImagesAppService],
})
export class ImagesAppModule {}
