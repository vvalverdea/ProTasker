import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ElementRef } from '@angular/core';

describe('AppComponent', () => {
  const mockElementRef: ElementRef = {
    nativeElement: {
      ownerDocument: { body: { style: { backgroundColor: 'white' } } },
    },
  };
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: ElementRef, useValue: mockElementRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it('should toggle background color black-white', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.debugElement.componentInstance;
    component.toggleBackground();
    fixture.detectChanges();

    expect(
      mockElementRef.nativeElement.ownerDocument.body.style.backgroundColor
    ).toBe('white');
    mockElementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'white';

    component.toggleBackground();

    mockElementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'grey';

    expect(
      mockElementRef.nativeElement.ownerDocument.body.style.backgroundColor
    ).toBe('grey');
  });
});
