import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesModule } from './times/times.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://libert:vtPxcNEa9e3N2SS@cluster0.gpumy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TimesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
