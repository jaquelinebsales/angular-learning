import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  standalone: true,
  imports: [],
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent {
  @Input() Comment:string = '';
  @Input() userPhoto:string = '';
  @Input() userName:string = '';
}
