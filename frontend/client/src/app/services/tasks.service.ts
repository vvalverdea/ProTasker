import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  addDoc,
  getDocs,
} from '@angular/fire/firestore';
import Task from '../interfaces/tasks';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private firestore: Firestore) {}

  addTask(task: Task) {
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }

  getTasks(): Observable<Task[]> {
    const taskRef = collection(this.firestore, 'tasks');
    return from(getDocs(taskRef)).pipe(
      map(
        (querySnapshot) =>
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
          })) as Task[]
      )
    );
  }
}
