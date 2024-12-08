import { Test, TestingModule } from '@nestjs/testing';
import { ImagesAppController } from './images-app.controller';
import { ImagesAppService } from './images-app.service';

describe('ImagesAppController', () => {
  let imagesAppController: ImagesAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImagesAppController],
      providers: [ImagesAppService],
    }).compile();

    imagesAppController = app.get<ImagesAppController>(ImagesAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(imagesAppController.getHello()).toBe('Hello World!');
    });
  });
});
