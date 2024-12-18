import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "enum/task";

export class CreateTaskDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus

}