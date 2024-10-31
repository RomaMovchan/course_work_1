import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateTaskDetailsDto {
    @IsNotEmpty() @IsNumber() taskid: number;
    @IsNotEmpty() @IsString() assignedperson: string;
}

export class UpdateTaskDetailsDto {
    @IsOptional() @IsNumber() taskid?: number;
    @IsOptional() @IsString() assignedperson: string;
}
