export interface Task {
    id?: number;
    name: string;
    description: string;
    startdate: string;
    enddate: string;
}

export interface TaskDetails {
    id?: number;
    taskid: number;
    assignedperson: string;
}
