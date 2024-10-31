import {Inject, Injectable} from '@nestjs/common';
import {Pool} from "pg";

import {PG_CONNECTION} from "../constants";
import {Task} from "../interfaces/tasks.interface";


@Injectable()
export class TasksService {
    constructor(@Inject(PG_CONNECTION) private con: Pool) {}

    async getTasks(): Promise<Task[]> {
        const res = await this.con.query('SELECT * FROM tasks');
        return res.rows;
    }

    async createTask(payload: Task) {
        const {  name, description, startdate, enddate } = payload;
        console.log(payload);
    }
}
