import { Injectable } from '@angular/core';

import Task from '../interfaces/tasks';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = `${environment.apiUrl}api/tasks`;

  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  async getTasks(): Promise<Task[]> {
    console.log(this.apiUrl);
    const tasks: Task[] = [];

    await this.http
      .get<Task[]>(this.apiUrl)
      .toPromise()
      .then((response) => {
        response?.forEach((res) => {
          tasks.push({
            id: res.id,
            title: res.title,
            status: res.status,
          });
        });
      })
      .catch((error) => {
        console.error('Error getting tasks', error);
      });

    return tasks;
  }

  edit(place: string, task: Task) {
    console.log(place, task);
    let status = 0;
    const id: string = task.id ?? 'undefined';

    if (place === 'cdk-drop-list-0') {
      status = 1;
    } else if (place === 'cdk-drop-list-1') {
      status = 2;
    } else {
      status = 3;
    }

    return this.http
      .put<Task>(`${this.apiUrl}/${id}`, { status: status })
      .subscribe();
  }

  delete(task: Task) {
    const id: string = task.id ?? 'undefined';

    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
