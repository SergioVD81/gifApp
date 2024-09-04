import { compileNgModule } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { GifService } from 'src/app/giff/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  private gifsService = inject(GifService);

  constructor() {}

  get tags() {
    return this.gifsService.tagHistory;
  }
  showGif(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
