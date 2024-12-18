import { IsEnum } from "class-validator";
import { TaskStatus } from "enum/task";


export class UpdateTaskDto {
    @IsEnum(TaskStatus)
    status: TaskStatus
}