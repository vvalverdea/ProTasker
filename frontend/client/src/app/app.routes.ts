// src/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasklistComponent } from './tasklist/tasklist.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tasks', component: TasklistComponent },
];
