import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Pool } from "pg";

import { PG_CONNECTION } from "../constants";
import { TaskDetails } from "../interfaces/tasks.interface";
import { CreateTaskDetailsDto, UpdateTaskDetailsDto } from "../dto/task-details.dto";

@Injectable()
export class TasksDetailsService {
    constructor(@Inject(PG_CONNECTION) private con: Pool) {}

    async getTasksDetails(): Promise<TaskDetails[]> {
        const res = await this.con.query(
            'SELECT * FROM taskdetails'
        );
        return res.rows;
    }

    async getTaskDetailsById(id: string): Promise<TaskDetails> {
        const res = await this.con.query(
            `SELECT * FROM taskdetails WHERE id = $1`,
            [ id ]
        );
        return res.rows[0];
    }

    async createTaskDetails(createTaskDetailsDto: CreateTaskDetailsDto) {
        const { taskid, assignedperson } = createTaskDetailsDto;
        try {
            const result = await this.con.query(
                `INSERT INTO taskdetails (taskid, assignedperson) VALUES ($1, $2) RETURNING *`,
                [ taskid, assignedperson ]
            );
            return result.rows[0];

        } catch (error) {
            throw new InternalServerErrorException('Database error')
        }
    }

    async updateTaskDetails(id: number, updateTaskDetailsDto: UpdateTaskDetailsDto) {
        const { taskid, assignedperson } = updateTaskDetailsDto;
        const result = await this.con.query(
            `UPDATE taskdetails SET taskid = $1, assignedperson = $2 WHERE id = $3 RETURNING *` ,
            [+taskid, assignedperson, +id]);
        return result.rows[0];
    }

    async removeTaskDetails(id: number) {
        const result = await this.con.query(
            'DELETE FROM taskdetails WHERE id = $1 RETURNING *',
            [id],
        );
        return result.rows[0];
    }
}
