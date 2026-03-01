import { IsInt, IsString } from "class-validator";

export class CreateCustomerDto {
    // these decorators are not removed at runtime
    @IsString()
    name: string;
    @IsInt()
    age: number;
}