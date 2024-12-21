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
  boards: any[] = [{ title: 'main_board' }];
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
    this.loadBoards();
  }

  loadBoards() {
    this.boardsService.getBoards().subscribe((boards) => {
      this.boards = boards;
      if (this.boards.length > 0) {
        this.loadTasks(this.boards[0].id);
      }
    });
  }

  onBoardChange(index: number) {
    this.selectedBoardIndex = index;
    const boardId = this.boards[index].id;
    this.loadTasks(boardId);
  }

  loadTasks(boardId: string) {
    this.tasksService.getTasksByBoard(boardId).subscribe((tasks) => {
      this.tasks = {
        todo: tasks.filter((task) => task.status === 0),
        inprogress: tasks.filter((task) => task.status === 1),
        done: tasks.filter((task) => task.status === 2),
      };
    });
  }

  addBoard() {
    const title = prompt('Enter board title:');
    const description = prompt('Enter board description:');
    if (title && description) {
      this.boardsService.createBoard(title, description).subscribe((board) => {
        this.boards.push(board.title);
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
}
