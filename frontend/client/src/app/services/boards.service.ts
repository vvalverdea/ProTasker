import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Board from '../interfaces/boards';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  private baseUrl = `${environment.apiUrl}api/boards`;
  private currentBoard: Board = { id: '', title: '0', tasks: [] };
  private currentTasks: any = [];

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  setCurrentBoard(currentBoard: Board) {
    this.currentBoard = currentBoard;
  }

  getCurrentBoard(): Board {
    return this.currentBoard;
  }

  createBoard(title: string): Observable<any> {
    return this.http.post<any>(this.baseUrl, { title });
  }

  deleteBoard(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  setUpdatedTasks(tasks: any) {
    this.currentBoard.tasks = [];
    this.currentBoard.tasks = tasks;
    this.currentTasks = tasks;
  }

  getUpdatedTasks() {
    return this.currentTasks;
  }
}
