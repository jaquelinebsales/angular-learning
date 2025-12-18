import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatChipsModule, MatIconModule, MatDividerModule ],
  providers: [ MatDialog ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent {
  readonly bestBoys: string[] = ['Executiva', 'Econômica'];
}

