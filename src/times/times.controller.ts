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
    async getById(@Param('id') id: string) : Promise<Time> {
        return this.timeService.getById(id);
    }

    @Post()
    async create(@Body() time: Time) : Promise<Time> {
        return this.timeService.create(time);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() time: Time) : Promise<Time> {
        return this.timeService.update(id, time);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.timeService.delete(id);
    }
}
