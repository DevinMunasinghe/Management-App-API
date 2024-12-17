import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schemas';
import * as mongoose from 'mongoose';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

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

    async updateStatus(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskModel.findOneAndUpdate(
            { _id: taskId },
            { $set: updateTaskDto },
            { new: true, projection: { title: 1, status: 1 } }

        ).lean().exec();
        if (!task) {
            throw new NotFoundException(`Task with Id ${taskId} not found`)
        }
        return task
    }

    async delete(taskId: string): Promise<void> {
        const result = await this.taskModel.deleteOne({ _id: taskId }).exec()
        if (!result) {
            throw new NotFoundException(`Task with Id ${taskId} not found`)
        }
    }
}
