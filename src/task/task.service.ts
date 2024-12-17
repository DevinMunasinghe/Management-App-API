import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schemas';
import * as mongoose from 'mongoose';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name)
        private taskModel: mongoose.Model<Task>
    ) { }

    async findAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find()
        return tasks

    }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const tasks = await this.taskModel.create(createTaskDto)
        return tasks

    }
}
