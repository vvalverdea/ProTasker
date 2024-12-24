import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Task } from '../interfaces/tasks';
import { environment } from '../../environments/environment';

enum TaskStatus {
  TODO = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = `${environment.apiUrl}api/tasks`;

  constructor(private http: HttpClient) {}

  createTask(
    boardId: string,
    title: string,
    status: TaskStatus
  ): Observable<Task> {
    return this.http
      .post<Task>(this.apiUrl, {
        board: boardId,
        title,
        status,
      })
      .pipe(catchError(this.handleError));
  }

  addTask(boardId: string, title: string): Observable<Task> {
    const newTask: Task = {
      board: boardId,
      title: title,
      status: TaskStatus.TODO,
    };
    console.log(newTask);
    return this.http
      .post<Task>(this.apiUrl, newTask)
      .pipe(catchError(this.handleError));
  }

  getTasksByBoard(boardId: string): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.apiUrl}/${boardId}/boards`)
      .pipe(catchError(this.handleError));
  }

  updateTaskStatus(task: Task, newStatus: TaskStatus): Observable<Task> {
    return this.http
      .put<Task>(`${this.apiUrl}/${task.id}`, {
        ...task,
        status: newStatus,
      })
      .pipe(catchError(this.handleError));
  }

  edit(status: string, task: Task): Observable<Task> {
    const statusMap: Record<string, TaskStatus> = {
      todo: TaskStatus.TODO,
      inprogress: TaskStatus.IN_PROGRESS,
      done: TaskStatus.DONE,
    };

    return this.http
      .put<Task>(`${this.apiUrl}/${task.id}`, {
        ...task,
        status: statusMap[status] ?? TaskStatus.TODO,
      })
      .pipe(catchError(this.handleError));
  }

  delete(task: Task): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${task.id}`)
      .pipe(catchError(this.handleError));
  }

  private getStatusFromContainer(containerId: string): TaskStatus {
    switch (containerId) {
      case 'todo-list':
        return TaskStatus.TODO;
      case 'inprogress-list':
        return TaskStatus.IN_PROGRESS;
      case 'done-list':
        return TaskStatus.DONE;
      default:
        return TaskStatus.TODO;
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
