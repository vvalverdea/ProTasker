import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { Firestore } from '@angular/fire/firestore';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    const firestoreMock = jasmine.createSpyObj('Firestore', ['collection']);
    TestBed.configureTestingModule({
      providers: [
        TasksService,
        { provide: Firestore, useValue: firestoreMock },
      ],
    });
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
