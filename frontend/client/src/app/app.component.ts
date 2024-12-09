import { Component, ElementRef } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}

  title = 'client';

  isDark = false;

  toggleBackground() {
    console.log('press');
    this.isDark = !this.isDark;

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.isDark ? 'rgb(70, 70, 70)' : 'white';
  }
}
