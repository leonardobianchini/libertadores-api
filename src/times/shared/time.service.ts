import { Injectable } from '@nestjs/common';
import { Time } from './time';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TimeService {

    constructor(@InjectModel('Time') private readonly timeModel: Model<Time>){ }

    async getAll(){
        return await this.timeModel.find().exec();
    }

    async getById(id: string){
        return await this.timeModel.findById(id).exec();
    }

    async create(time: Time){
        const createdTime = new this.timeModel(time);
        return await createdTime.save();
    }

    async update(id: string, time: Time){
        await this.timeModel.updateOne({_id: id}, time).exec();
        return this.getById(id)
    }

    async delete(id: string){
        return await this.timeModel.deleteOne({ _id: id }).exec();
    }
}
