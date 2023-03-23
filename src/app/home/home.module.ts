import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';
import { ColorPipe } from '../color.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HighlightDirective,
    ColorPipe,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
