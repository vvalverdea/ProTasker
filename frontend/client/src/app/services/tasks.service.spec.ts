import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
