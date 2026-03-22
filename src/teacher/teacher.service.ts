import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './schemas/teacher.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class TeacherService {
    constructor(
        @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
    ){}

    async createTeacher(): Promise<Teacher>{
        const profile = await new this.profileModel({
            age: 21,
            qualification: 'masters'
        }).save();

        const teacher = await new this.teacherModel({
            name: "Furqan",
            profile: profile._id,
        }).save();

        return teacher;
    }

    async findAll(): Promise<Teacher[]>{
        return this.teacherModel.find().populate('profile').exec();
    }

}
