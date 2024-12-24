import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private elementRef: ElementRef,
    private sharedService: SharedService
  ) {}

  toggleBackground() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor ===
      'white'
        ? 'grey'
        : 'white';

    this.sharedService.setTheme(
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor
    );
  }
}
