import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../services/boards.service';
import { TasksService } from '../services/tasks.service';
import { CardComponent } from '../atoms/card/card.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
  imports: [
    CardComponent,
    CommonModule,
    DragDropModule,
    MatIconModule,
    MatTabsModule,
    DashboardComponent,
  ],
})
export class BoardsComponent implements OnInit {
  boards: any[] = [];
  currentUpdatedBoard = [];
  selectedBoardIndex: number = 0;
  tasks: { todo: any[]; inprogress: any[]; done: any[] } = {
    todo: [],
    inprogress: [],
    done: [],
  };

  constructor(
    private boardsService: BoardsService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.boardsService.getBoards().subscribe((boards) => {
      this.boardsService.setCurrentBoard(boards[0]);
    });

    this.loadBoards();
  }

  async loadBoards() {
    this.boardsService.getBoards().subscribe((boards) => {
      this.boards = boards;
      if (this.boards.length > 0) {
        this.loadTasks(this.boards[0].id);
      }
    });
  }

  onBoardChange(index: number) {
    this.selectedBoardIndex = index;
    this.boardsService.setCurrentBoard(this.boards[index]);

    this.loadTasks(this.boardsService.getCurrentBoard().id);
  }

  async loadTasks(boardId: string) {
    this.clearTasks();
    await this.tasksService.getTasksByBoard(boardId).subscribe((tasks) => {
      console.log(1, boardId, tasks);
      this.tasks = {
        todo: tasks.filter((task) => task.status === 0),
        inprogress: tasks.filter((task) => task.status === 1),
        done: tasks.filter((task) => task.status === 2),
      };
      this.boardsService.setUpdatedTasks(this.tasks);
      this.currentUpdatedBoard = this.boardsService.getUpdatedTasks();
      console.log(2, this.currentUpdatedBoard);
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

  deleteTask(taskId: string) {
    /*this.tasksService.deleteTask(taskId).subscribe(() => {
      const boardId = this.boards[this.selectedBoardIndex].id;
      this.loadTasks(boardId);
    });*/
  }

  drop(event: any, boardId: string) {
    // Lógica para actualizar el estado de la tarea al arrastrarla
  }

  clearTasks() {
    this.tasks = {
      todo: [],
      inprogress: [],
      done: [],
    };
  }
}
