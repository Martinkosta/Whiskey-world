import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';





@NgModule({
  declarations: [
    LoaderComponent,
 
    AppEmailDirective,
    ShortenPipe,


  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    AppEmailDirective,
    ShortenPipe,

  
  ]
})
export class SharedModule { }
