import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-rodape',
  standalone: true,
  imports: [],
  templateUrl: './banner-rodape.component.html',
  styleUrl: './banner-rodape.component.scss'
})
export class BannerRodapeComponent {
  @Input() src:string = '';
  @Input() alt:string = '';
}
