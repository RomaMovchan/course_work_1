import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { TasksDetailsService } from "./tasks-details.service";
import { TaskDetails } from "../interfaces/tasks.interface";
import { CreateTaskDetailsDto, UpdateTaskDetailsDto} from "../dto/task-details.dto";
import { AuthGuard } from "../guards/auth.guard";

@UseGuards(AuthGuard)
@Controller('tasks-details')
export class TasksDetailsController {

    constructor(private readonly tasksDetailsService: TasksDetailsService) {}

    @Get('')
    getTasks(): Promise<TaskDetails[]> {
        return this.tasksDetailsService.getTasksDetails();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<TaskDetails> {
        return this.tasksDetailsService.getTaskDetailsById(id);
    }

    @Post('')
    createTask(@Body() payload: CreateTaskDetailsDto) {
        return this.tasksDetailsService.createTaskDetails(payload);
    }

    @Put('/:id')
    updateTask(@Param() id: string, @Body() payload: UpdateTaskDetailsDto) {
        return this.tasksDetailsService.updateTaskDetails(+id, payload);
    }

    @Delete('/:id')
    removeTask(@Param('id') id: string) {
        return this.tasksDetailsService.removeTaskDetails(+id);
    }
}
