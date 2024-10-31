import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { TasksService} from "./tasks.service";
import { Task } from "../interfaces/tasks.interface";
import { CreateTaskDto, UpdateTaskDto } from "../dto/tasks.dto";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get('')
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTaskById(@Param() id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post('')
    createTask(@Body() payload: CreateTaskDto) {
        return this.tasksService.createTask(payload);
    }

    @Put('/:id')
    updateTask(@Param() id: string, @Body() payload: UpdateTaskDto) {
        return this.tasksService.updateTask(+id, payload);
    }

    @Delete('/:id')
    removeTask(@Param('id') id: string) {
        return this.tasksService.removeTask(+id);
    }
}
