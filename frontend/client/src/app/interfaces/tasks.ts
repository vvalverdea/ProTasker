import Board from './boards';

export default interface Task {
  id?: string;
  title: string;
  status: number;
  board: string;
}
