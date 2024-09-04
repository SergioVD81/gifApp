import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GifService } from 'src/app/giff/services/gif.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('inputSearch')
  public inputSearchGifs!: ElementRef<HTMLInputElement>;
  private gifsSrevice = inject(GifService);
  searchGifs() {
    this.gifsSrevice.searchTag(this.inputSearchGifs.nativeElement.value);
    this.inputSearchGifs.nativeElement.value = '';
  }
}
