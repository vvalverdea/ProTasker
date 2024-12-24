import { Task } from './tasks';

export interface Board {
  id: string;
  title: string;
  tasks: Task[];
}

export interface TasksByBoard {
  todo: Task[];
  inprogress: Task[];
  done: Task[];
}
