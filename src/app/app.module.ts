import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './features/list/list.component';
import { FormComponent } from './features/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListItemComponent } from './ui/components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    ListItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
