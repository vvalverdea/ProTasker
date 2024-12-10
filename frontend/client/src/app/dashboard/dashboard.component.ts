import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';

import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { MatDialog } from '@angular/material/dialog';
import Task from '../interfaces/tasks';
import { TasksService } from '../services/tasks.service';

import { MatIconModule } from '@angular/material/icon';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule, DragDropModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog, private tasksService: TasksService) {}

  hoverStates: boolean[] = [];

  task = {};

  todo: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];

  isHovered = false;

  async ngOnInit() {
    this.hoverStates = new Array(this.todo.length).fill(false);
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

  onHover(state: boolean): void {
    this.isHovered = state;
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
    this.tasksService.edit(place, task);
  }

  async openAddTaskDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: '', task: '' } as DialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const response = this.tasksService.addTask({
          title: result,
          status: 1,
        });
        console.log(response);

        this.cleanAndRefresh();
      }
    });
  }

  deleteTask(task: Task) {
    this.tasksService.delete(task).subscribe(() => {
      console.log('Task deleted successfully');
      this.cleanAndRefresh();
    });
  }

  cleanAndRefresh() {
    this.todo = [];
    this.inprogress = [];
    this.done = [];
    this.getTasks();
  }
}
