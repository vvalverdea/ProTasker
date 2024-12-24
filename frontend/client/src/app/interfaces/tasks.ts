import { Board } from './boards';

export interface Task {
  id?: string;
  title: string;
  status: TaskStatus;
  board: string;
}

export interface TaskState {
  todo: Task[];
  inprogress: Task[];
  done: Task[];
}

export enum TaskStatus {
  TODO = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}
