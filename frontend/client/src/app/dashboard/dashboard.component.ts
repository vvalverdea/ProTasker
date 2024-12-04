import { Component, Input } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';

import { TasklistComponent } from '../tasklist/tasklist.component';
import { CommonModule } from '@angular/common';
import { Task } from '../interfaces/tasks';

import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, TasklistComponent, CommonModule, DragDropModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @Input() tasklist: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 1 },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 2 },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 3 },
  ];
  task = {};

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inprogress = [''];
  done = [''];

  drop(event: CdkDragDrop<string[] | never>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
