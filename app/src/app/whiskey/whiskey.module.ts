import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';
import { WhiskeyRoutingModule } from './whiskey-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewWhiskeyComponent } from './new-whiskey/new-whiskey.component';
import { FormsModule } from '@angular/forms';
import { WhiskeyDetailsComponent } from './whiskey-details/whiskey-details.component';



@NgModule({
  declarations: [
    MainComponent,
    WhiskeyListComponent,
    NewWhiskeyComponent,
    WhiskeyDetailsComponent
  ],
  imports: [
    CommonModule,
    WhiskeyRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class WhiskeyModule { }
