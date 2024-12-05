import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  task: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExampleComponent {
  readonly task = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { name: this.name(), task: this.task() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.task.set(result);
      }
    });
  }
}

@Component({
  selector: 'app-pop-up-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialogComponent {
  readonly dialogRef = inject(
    MatDialogRef<DialogOverviewExampleDialogComponent>
  );
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly task = model(this.data.task);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
