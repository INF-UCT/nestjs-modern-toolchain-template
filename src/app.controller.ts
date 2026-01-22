import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getRoot() {
        return this.appService.getRoot();
    }

    @Get('items/:id')
    getItem(
        @Param('id') id: string,
        @Query('q') q?: string,
    ) {
        return this.appService.getItem(parseInt(id), q);
    }
}
