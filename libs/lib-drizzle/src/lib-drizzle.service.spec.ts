import { Test, TestingModule } from '@nestjs/testing';
import { LibDrizzleService } from './lib-drizzle.service';

describe('LibDrizzleService', () => {
  let service: LibDrizzleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibDrizzleService],
    }).compile();

    service = module.get<LibDrizzleService>(LibDrizzleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
