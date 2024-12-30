import { TestBed } from '@angular/core/testing';

import { BoardsService } from './boards.service';
import { TasksService } from './tasks.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(BoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
