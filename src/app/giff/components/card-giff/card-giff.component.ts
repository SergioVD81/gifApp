import { Component, Input } from '@angular/core';
import { Giff } from '../../interface/gifs.interface';

@Component({
  selector: 'app-card-giff',
  templateUrl: './card-giff.component.html',
  styleUrls: ['./card-giff.component.css']
})
export class CardGiffComponent {
@Input() listGif!:Giff[]
}
