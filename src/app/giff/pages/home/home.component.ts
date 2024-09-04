import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Giff } from '../../interface/gifs.interface';

@Component({
  selector: 'giff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private gifsService = inject(GifService);

  get gifs(): Giff[] {
    return this.gifsService.gifList;
  }
}
