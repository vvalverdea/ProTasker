import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import Task from '../interfaces/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private firestore: Firestore) {}

  addTask(task: Task) {
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }

  async getTasks(): Promise<Task[]> {
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
    console.log(place);
    console.log('id?', task.id);
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
}
