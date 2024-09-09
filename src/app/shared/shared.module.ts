import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [SearchBoxComponent, SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SearchBoxComponent, SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
