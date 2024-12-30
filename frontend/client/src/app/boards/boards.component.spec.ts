import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsComponent } from './boards.component';
import { TasksService } from '../services/tasks.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BoardsComponent', () => {
  let component: BoardsComponent;
  let fixture: ComponentFixture<BoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardsComponent],
      providers: [TasksService, HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
