import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum TaskStatus {
    PENDING = 'pending',
    COMPLETED = ' completed'
}

@Schema({
    timestamps: true
})

export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop({ type: String, enum: TaskStatus, default: TaskStatus.PENDING, index: true })
    Status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task)