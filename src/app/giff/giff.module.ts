import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGiffComponent } from './components/card-giff/card-giff.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [CardGiffComponent,HomeComponent,],
  imports: [CommonModule,SharedModule,HttpClientModule],
  exports:[CardGiffComponent,HomeComponent,]
})
export class GiffModule { }
