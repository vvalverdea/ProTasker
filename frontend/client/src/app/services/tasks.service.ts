import { Injectable } from '@angular/core';

import Task from '../interfaces/tasks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://localhost:8081/api/tasks';

  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    console.log('añadir tarea:', task);
    return this.http.post<Task>(this.apiUrl, task);
  }

  /*async getTasks(): Promise<Task[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'tasks'));
    const tasks: Task[] = [];

    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...(doc.data() as Task),
      });
    });

    return tasks;
  }

  edit(place: string, task: Task) {
    let status = 0;
    const id: string = task.id ?? 'undefined';
    const taskRef = doc(this.firestore, 'tasks', id);

    if (place === 'cdk-drop-list-0') {
      status = 1;
    } else if (place === 'cdk-drop-list-1') {
      status = 2;
    } else {
      status = 3;
    }

    return updateDoc(taskRef, {
      status: status,
    });
  }

  delete(task: Task) {
    const id: string = task.id ?? 'undefined';
    const taskRef = doc(this.firestore, 'tasks', id);

    return deleteDoc(taskRef);
  }*/
}
