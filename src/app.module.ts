import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesModule } from './times/times.module';

@Module({
  imports: [TimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
