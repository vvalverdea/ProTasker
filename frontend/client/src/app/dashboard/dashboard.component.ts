import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';

import { TasklistComponent } from '../tasklist/tasklist.component';
import { CommonModule } from '@angular/common';

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
import Task from '../interfaces/tasks';
import { TasksService } from '../services/tasks.service';

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
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog, private tasksService: TasksService) {}

  task = {};

  todo: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      console.log('tareas', tasks);
      this.todo = tasks;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
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

  async openAddTaskDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { name: '', task: '' } as DialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog result:', result);
        const response = this.tasksService.addTask({
          title: result,
          status: 1,
        });
        console.log(response);
      }
    });
  }
}
