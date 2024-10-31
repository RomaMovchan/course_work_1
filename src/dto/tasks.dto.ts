import {IsDate, IsNotEmpty, IsString, IsOptional} from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty() @IsString() name: string;
    @IsNotEmpty() @IsString() description: string;
    @IsNotEmpty() @IsDate() startdate: string;
    @IsNotEmpty() @IsDate() enddate: string;
}

export class UpdateTaskDto {
    @IsOptional() @IsString() name?: string;
    @IsOptional() @IsString() description?: string;
    @IsOptional() @IsDate() startdate?: string;
    @IsOptional() @IsDate() enddate?: string;
}
