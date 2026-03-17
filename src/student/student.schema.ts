import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
    // konsi props hamein optional rkhni aur konsi required ye hamein prop decorator btata props means property
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;
    
    @Prop()
    email?: string;
    
}

// is class ko mongo db k schema mei convert kr rhe hain
export const StudentSchema = SchemaFactory.createForClass(Student)
