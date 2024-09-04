import { CardGiffComponent } from './components/card-giff/card-giff.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardGiffComponent, HomeComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [CardGiffComponent, HomeComponent],
})
export class GiffModule {}
