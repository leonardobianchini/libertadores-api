import { Test, TestingModule } from '@nestjs/testing';
import { TimeService } from './time.service';

describe('TimeService', () => {
  let provider: TimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeService],
    }).compile();

    provider = module.get<TimeService>(TimeService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
