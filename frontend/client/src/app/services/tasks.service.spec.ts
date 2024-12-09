import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  Firestore,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { collection, addDoc } from '@angular/fire/firestore';
import Task from '../interfaces/tasks';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('TasksService', () => {
  let service: TasksService;
  let firestoreMock: Firestore;

  beforeEach(() => {
    // Mock Firestore con spies
    firestoreMock = jasmine.createSpyObj('Firestore', ['collection']);
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
