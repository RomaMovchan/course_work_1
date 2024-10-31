import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Pool } from "pg";

import { PG_CONNECTION } from "../constants";
import { Task } from "../interfaces/tasks.interface";
import { CreateTaskDto, UpdateTaskDto } from "../dto/tasks.dto";

@Injectable()
export class TasksService {
    constructor(@Inject(PG_CONNECTION) private con: Pool) {}

    async getTasks(): Promise<Task[]> {
        const res = await this.con.query('SELECT * FROM tasks');
        return res.rows;
    }

    async getTaskById(id: string): Promise<Task> {
        const res = await this.con.query(`SELECT * FROM task WHERE id = $1`, [ id ]);
        return res.rows[0];
    }

    async createTask(createTaskDto: CreateTaskDto) {
        const {  name, description, startdate, enddate } = createTaskDto;
        try {
            const result = await this.con.query(
                `INSERT INTO tasks (name, description, startdate, enddate) VALUES ($1, $2, $3, $4) RETURNING *`,
                [ name, description, startdate, enddate ]
            );
            return result.rows[0];

        } catch (error) {
            throw new InternalServerErrorException('Database error')
        }
    }

    async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
        const {  name, description, startdate, enddate } = updateTaskDto;
        const result = await this.con.query(
            `UPDATE tasks SET name = $1, description = $2, startdate = $3, enddate = $4 WHERE id = $5 RETURNING *` ,
            [name, description, startdate, enddate, +id]);
        return result.rows[0];
    }

    async removeTask(id: number) {
        const result = await this.con.query(
            'DELETE FROM tasks WHERE id = $1 RETURNING *',
            [id],
        );
        return result.rows[0];
    }
}
