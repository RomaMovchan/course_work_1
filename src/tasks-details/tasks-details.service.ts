import { Inject, Injectable } from '@nestjs/common';
import { Pool } from "pg";

import { PG_CONNECTION } from "../constants";
import { TaskDetails } from "../interfaces/tasks.interface";


@Injectable()
export class TasksDetailsService {
    constructor(@Inject(PG_CONNECTION) private con: Pool) {}

    async getTasksDetails(): Promise<TaskDetails[]> {
        const res = await this.con.query('SELECT * FROM taskdetails');
        return res.rows;
    }

    async getTaskDetailsById(id: string): Promise<TaskDetails> {
        const res = await this.con.query(`SELECT * FROM taskdetails WHERE id = $1`, [ id ]);
        return res.rows[0];
    }
}
