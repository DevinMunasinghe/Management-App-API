import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schemas/task.schemas';
import { CreateTaskDto } from './dto/create-task-dto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get()
    async getAllTasks(): Promise<Task[]> {
        return this.taskService.findAll()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createTask(
        @Body()
        createTaskDto: CreateTaskDto
    ): Promise<Task> {
        return this.taskService.create(createTaskDto)
    }

}
