import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../services/tasks.service';
import Task from '../interfaces/tasks';
import Board from '../interfaces/boards';
import { BoardsService } from '../services/boards.service';

export interface DialogData {
  task: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly task: WritableSignal<Task> = signal({
    title: '',
    status: 1,
    board: '0',
  });
  readonly board: WritableSignal<Board> = signal({ title: '0' });
  readonly name = 'Add Task';
  readonly dialog = inject(MatDialog);

  constructor(
    private tasksService: TasksService,
    private boardsService: BoardsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitTask(): void {
    this.tasksService
      .addTask({
        title: this.name,
        status: 1,
        board: this.boardsService.getCurrentBoard().title,
      })
      .subscribe({
        next: (response) => console.log('Task created:', response),
        error: (err) => console.error('Task creation failed:', err),
      });
    this.dialogRef.close();
  }
}
