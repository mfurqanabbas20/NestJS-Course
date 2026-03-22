import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { Teacher } from './schemas/teacher.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teacher.name, schema: Teacher },
      { name: Profile.name, schema: ProfileSchema },
    ])
  ],
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
