import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() type: 'primary' | 'secondary' | 'danger' | 'terciary' | 'disabled' =
    'disabled';
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  get buttonClass(): string {
    return `btn-${this.type} btn-${this.size}`;
  }
}
