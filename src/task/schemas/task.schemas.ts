import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TaskStatus } from "enum/task";



@Schema({
    timestamps: true
})

export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop({ type: String, enum: TaskStatus, default: TaskStatus.PENDING, index: true })
    status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task)