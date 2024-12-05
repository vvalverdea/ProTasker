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
import { ButtonComponent } from '../atoms/button/button.component';
import {
  DialogData,
  DialogOverviewExampleComponent,
  DialogOverviewExampleDialogComponent,
} from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  imports: [
    CardComponent,
    TasklistComponent,
    CommonModule,
    DragDropModule,
    ButtonComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private dialog: MatDialog) {}
  @Input() tasklist: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 1 },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 2 },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 3 },
  ];
  task = {};

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inprogress = [''];
  done = [''];

  drop(event: CdkDragDrop<string[]>) {
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

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { name: '', task: '' } as DialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog result:', result);
        this.todo.push(result);
        // Aquí puedes manejar la nueva tarea o información retornada.
      }
    });
  }
}
