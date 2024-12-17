import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './schemas/task.schemas';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

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

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateTaskStatus(
        @Param('id')
        taskId: string,
        @Body()
        updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskService.updateStatus(taskId, updateTaskDto)
    }

    @Delete()
    async deleteTask(@Param('id') taskId: string): Promise<void> {
        return this.taskService.delete(taskId)
    }


}
