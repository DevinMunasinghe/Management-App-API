import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../schemas/task.schemas";

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