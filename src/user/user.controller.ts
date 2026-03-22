import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // decorator
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(){
        return this.userService.createUser();
    }
    
    @Get()
    getUsers(){
        return this.userService.findAll();
    }
}
