// src/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'boards', component: BoardsComponent },
];
