import { Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherSerivce: TeacherService) {}

    @Post()
    createUser(){
        return this.teacherSerivce.createTeacher();
    }
        
    @Get()
    getUsers(){
        return this.teacherSerivce.findAll();
    }
}
