import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Time } from './shared/time';
import { TimeService } from './shared/time.service';

@Controller('times')
export class TimesController {

    constructor(
        private timeService: TimeService
    ) {}

    @Get()
    async getAll() : Promise<Time[]> {
        return this.timeService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Time> {
        return this.timeService.getById(id);
    }

    @Post()
    async create(@Body() time: Time) : Promise<Time> {
        return this.timeService.create(time);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() time: Time) : Promise<Time> {
        time.id = id;
        return this.timeService.update(time);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.timeService.delete(id);
    }
}
