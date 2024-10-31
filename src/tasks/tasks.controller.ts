import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task, TaskDetails} from "../interfaces/tasks.interface";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get('')
    getTasks(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }

    @Post('')
    createTask(@Body() payload: Task) {
        return this.tasksService.createTask(payload);
    }
}
