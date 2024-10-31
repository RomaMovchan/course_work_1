import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { TasksDetailsService } from "./tasks-details.service";
import { TaskDetails } from "../interfaces/tasks.interface";

@Controller('tasks-details')
export class TasksDetailsController {

    constructor(private readonly tasksDetailsService: TasksDetailsService) {}

    @Get('')
    getTasks(): Promise<TaskDetails[]> {
        return this.tasksDetailsService.getTasksDetails();
    }

  /*  @Post('tasks')
    createTask(@Body() payload: Task) {
        console.log(payload);
        return this.tasksService.createTask(payload);
    }*/

    @Get(':id')
    getTaskById(@Param('id') id: string): Promise<TaskDetails> {
        return this.tasksDetailsService.getTaskDetailsById(id);
    }

}
