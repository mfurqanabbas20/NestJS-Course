import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseSerivce: DatabaseService){}

    @Get('status')
    getStatus(){
        return {
            status: this.databaseSerivce.getStatus()
        }
    }
}
