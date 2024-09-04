
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    
    SearchBoxComponent,
    SidebarComponent
  ],
  imports: [CommonModule],
  exports:[SearchBoxComponent,SidebarComponent]
})
export class SharedModule { }
