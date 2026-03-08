import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
    @Get("hello/:id")
    getHello(@Param('id', ParseIntPipe) id: number){
        // ParseIntPipe make sures that id should be in integer
        return {message: `Your id is ${id}`}

    }
}
