import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-form-busca',
  standalone: true,
  providers: [provideNativeDateAdapter()
  ],
  imports: [CardComponent,
            MatButtonToggleModule,
            MatChipsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatDatepickerModule,
            MatButtonModule
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class FormBuscaComponent {
  availableColors: ChipColor[] = [
    {name: '1 Adulto', color: undefined},
    {name: 'Econômica', color: 'primary'},
  ];

}
