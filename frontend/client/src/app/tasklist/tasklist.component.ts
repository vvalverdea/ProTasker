import { Component, Input } from '@angular/core';
import { taskMock } from '../mocks/task';

@Component({
  selector: 'app-tasklist',
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent {
  @Input() task = taskMock;
}
