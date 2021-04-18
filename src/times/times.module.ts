import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TimeService } from './shared/time.service';
import { TimesController } from './times.controller';
import { TimeSchema } from './schemas/time.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name:'Time', schema: TimeSchema}])
    ],
    controllers: [TimesController],
    providers: [TimeService]
})
export class TimesModule {}
