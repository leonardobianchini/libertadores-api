import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesModule } from './times/times.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(''), // link de conexao
    TimesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
