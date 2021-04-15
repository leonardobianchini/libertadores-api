import { Test, TestingModule } from '@nestjs/testing';
import { TimesController } from './times.controller';

describe('TimesController', () => {
  let controller: TimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimesController],
    }).compile();

    controller = module.get<TimesController>(TimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
