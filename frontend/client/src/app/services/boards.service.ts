import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Board } from '../interfaces/boards';
import { Task } from '../interfaces/tasks';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private baseUrl = `${environment.apiUrl}api/boards`;
  private currentBoard: Board = { id: '', title: '0', tasks: [] };
  private currentTasks: Task[] = [];

  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.baseUrl);
  }

  setCurrentBoard(currentBoard: Board) {
    this.currentBoard = currentBoard;
  }

  getCurrentBoard(): Board {
    return this.currentBoard;
  }

  createBoard(title: string): Observable<Board> {
    return this.http.post<Board>(this.baseUrl, { title });
  }

  deleteBoard(id: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

  setUpdatedTasks(tasks: Task[]) {
    this.currentBoard.tasks = [];
    this.currentBoard.tasks = tasks;
    this.currentTasks = tasks;
  }

  getUpdatedTasks() {
    return this.currentTasks;
  }
}
