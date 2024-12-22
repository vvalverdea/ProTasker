import Task from './tasks';

export default interface Board {
  id: string;
  title: string;
  tasks: Task[];
}
