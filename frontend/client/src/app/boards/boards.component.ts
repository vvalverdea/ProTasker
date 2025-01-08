import { Component, OnDestroy, OnInit } from '@angular/core';
import { BoardsService } from '../services/boards.service';
import { TasksService } from '../services/tasks.service';
import { CardComponent } from '../atoms/card/card.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Board } from '../interfaces/boards';
import { TaskState } from '../interfaces/tasks';
import { SharedService } from '../shared.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  imports: [
    CardComponent,
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatTabsModule,
    DashboardComponent,
  ],
})
export class BoardsComponent implements OnInit, OnDestroy {
  boards: Board[] = [];
  currentTheme = 'white';
  private destroy$ = new Subject<void>();
  currentUpdatedBoard: TaskState = {
    todo: [],
    inprogress: [],
    done: [],
  };
  selectedBoardIndex = 0;
  tasks: TaskState = {
    todo: [],
    inprogress: [],
    done: [],
  };
  isLoading = false;
  error: string | null = null;

  constructor(
    private boardsService: BoardsService,
    private tasksService: TasksService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.currentTheme = this.sharedService.getTheme();

    this.sharedService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => {
        this.currentTheme = theme;
      });
    this.loadBoards();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadBoards(): void {
    this.isLoading = true;
    this.boardsService.getBoards().subscribe({
      next: (boards) => {
        this.boards = boards;
        this.boardsService.setCurrentBoard(boards[0]);
      },
      error: (error) => {
        this.error = 'Error loading boards';
        console.error('Error:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onBoardChange(index: number) {
    this.selectedBoardIndex = index;
    const selectedBoard = this.boards[index];
    this.boardsService.setCurrentBoard(selectedBoard);

    this.loadTasks(selectedBoard.id);
  }

  async loadTasks(boardId: string): Promise<void> {
    this.tasksService.getTasksByBoard(boardId).subscribe({
      next: (tasks) => {
        this.tasks = {
          todo: tasks.filter((task) => task.status === 0),
          inprogress: tasks.filter((task) => task.status === 1),
          done: tasks.filter((task) => task.status === 2),
        };
        this.currentUpdatedBoard = this.tasks;
      },
      error: (error) => {
        this.error = 'Error loading tasks';
        console.error('Error:', error);
      },
    });
  }

  addBoard() {
    const title = prompt('Enter board title:');
    if (title) {
      this.boardsService.createBoard(title).subscribe((board) => {
        this.boards.push(board);
      });
    }
  }

  openAddTaskDialog(boardId: string) {
    const title = prompt('Enter task title:');
    if (title) {
      this.tasksService.createTask(boardId, title, 0).subscribe(() => {
        this.loadTasks(boardId);
      });
    }
  }

  deleteBoard(boardId: string, index: number): void {
    if (!confirm('Are you sure you want to delete this board?')) return;

    this.isLoading = true;
    this.boardsService.deleteBoard(boardId).subscribe({
      next: () => {
        this.handleBoardDeletion(index);
      },
      error: (error) => {
        this.error = 'Error deleting board';
        console.error('Error:', error);
      },
      complete: () => {
        this.clearTasks();
        this.loadBoards();

        this.isLoading = false;
      },
    });
  }

  private handleBoardDeletion(index: number): void {
    this.boards = this.boards.filter((_, i) => i !== index);

    if (this.boards.length === 0) {
      this.clearTasks();
      return;
    }

    if (this.selectedBoardIndex === index) {
      this.selectedBoardIndex = 0;
      this.onBoardChange(0);
    } else if (this.selectedBoardIndex > index) {
      this.selectedBoardIndex--;
    }
  }

  clearTasks() {
    this.tasks = {
      todo: [],
      inprogress: [],
      done: [],
    };
  }
}
