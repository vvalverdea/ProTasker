import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';

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
  DialogOverviewExampleDialogComponent,
} from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Task from '../interfaces/tasks';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CommonModule, DragDropModule, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog, private tasksService: TasksService) {}

  task = {};

  todo: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  async ngOnInit() {
    this.getTasks();
  }

  async getTasks() {
    const tasks = this.tasksService.getTasks();
    (await tasks).map((task) => {
      if (task.status === 1) {
        this.todo.push(task);
      } else if (task.status === 2) {
        this.inprogress.push(task);
      } else {
        this.done.push(task);
      }
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

      const movedTask = event.container.data[event.currentIndex];
      const columnPlace = event.container._dropListRef.element as HTMLElement;
      this.changeTaskStatus(columnPlace.id, movedTask);
    }
  }

  changeTaskStatus(place: string, task: Task) {
    console.log('place:', place, 'task:', task);
    this.tasksService.edit(place, task);
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
      this.todo = [];
      this.inprogress = [];
      this.done = [];
      this.getTasks();
    });
  }
}
