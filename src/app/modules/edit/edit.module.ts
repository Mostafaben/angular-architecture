import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditWrapperComponent } from './edit-wrapper.component';


@NgModule({
  declarations: [
    EditWrapperComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
