import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Task, TaskState, TaskStatus } from '../interfaces/tasks';
import { Board, TasksByBoard } from '../interfaces/boards';
import { TasksService } from '../services/tasks.service';
import { BoardsService } from '../services/boards.service';
import { CardComponent } from '../atoms/card/card.component';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { mockTasksByBoard } from '../mocks/task';

interface DashboardState {
  isLoading: boolean;
  error: string | null;
  currentBoard: Board;
  tasks: TasksByBoard;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() currentUpdatedBoard: TaskState = mockTasksByBoard;

  state: DashboardState = {
    isLoading: false,
    error: null,
    currentBoard: { id: '', title: '', tasks: [] },
    tasks: {
      todo: [],
      inprogress: [],
      done: [],
    },
  };

  private destroy$ = new Subject<void>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly tasksService: TasksService,
    private readonly boardsService: BoardsService
  ) {}

  ngOnInit(): void {
    this.loadBoardData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentUpdatedBoard']) {
      this.loadBoardData();
    }
    this.organizeTasks(this.boardsService.getUpdatedTasks());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadBoardData(): void {
    this.state.isLoading = true;

    this.tasksService
      .getTasksByBoard(this.boardsService.getCurrentBoard().id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.state.tasks = this.organizeTasks(tasks);
          this.state.isLoading = false;
        },
        error: (error) => {
          this.state.error = 'Error loading tasks';
          this.state.isLoading = false;
          console.error('Error:', error);
        },
      });
  }

  private organizeTasks(tasks: Task[]): TasksByBoard {
    this.boardsService.setUpdatedTasks(tasks);
    return {
      todo: tasks.filter((task) => task.status === TaskStatus.TODO),
      inprogress: tasks.filter(
        (task) => task.status === TaskStatus.IN_PROGRESS
      ),
      done: tasks.filter((task) => task.status === TaskStatus.DONE),
    };
  }

  openAddTaskDialog(): void {
    const title = prompt('Enter task title:');
    if (title) {
      this.state.isLoading = true;
      this.tasksService
        .addTask(this.boardsService.getCurrentBoard().id, title)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.loadBoardData();
            this.state.isLoading = false;
          },
          error: (error) => {
            this.state.error = 'Error creating task';
            this.state.isLoading = false;
            console.error('Error:', error);
          },
        });
    }
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

      const task = event.container.data[event.currentIndex];
      const newStatus = this.getStatusFromContainerId(event.container.id);
      console.log(newStatus, task);

      this.tasksService
        .edit(newStatus, task)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => this.loadBoardData(),
          error: (error) => {
            this.state.error = 'Error updating task';
            console.error('Error:', error);
          },
        });
    }
  }

  deleteTask(task: Task): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasksService
        .delete(task)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => this.loadBoardData(),
          error: (error) => {
            this.state.error = 'Error deleting task';
            console.error('Error:', error);
          },
        });
    }
  }

  private getStatusFromContainerId(containerId: string): string {
    if (containerId.includes('0')) return 'todo';
    if (containerId.includes('1')) return 'inprogress';
    return 'done';
  }

  get isLoading(): boolean {
    return this.state.isLoading;
  }

  get error(): string | null {
    return this.state.error;
  }

  get tasks(): TasksByBoard {
    return this.state.tasks;
  }
}
