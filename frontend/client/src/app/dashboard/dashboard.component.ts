import { Component } from '@angular/core';
import { CardComponent } from '../atoms/card/card.component';
import { ButtonComponent } from '../atoms/button/button.component';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
