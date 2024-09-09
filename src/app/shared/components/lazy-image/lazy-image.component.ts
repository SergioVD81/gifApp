import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent {
  @Input() public urlImage!: string;
  @Input() public alt!: string;
  public hasLoaded: boolean = false;
  ngOnInit() {
    if (!this.urlImage) throw new Error('Url property is required');
  }
  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
