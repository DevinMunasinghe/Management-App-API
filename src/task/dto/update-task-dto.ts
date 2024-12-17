import { IsEnum } from "class-validator";
import { TaskStatus } from "../schemas/task.schemas";

export class UpdateTaskDto {
    @IsEnum(TaskStatus)
    status: TaskStatus
}