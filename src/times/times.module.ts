import { Module } from '@nestjs/common';
import { TimeService } from './shared/time.service';
import { TimesController } from './times.controller';

@Module({
    controllers: [TimesController],
    providers: [TimeService]
})
export class TimesModule {}
