import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotTableModule } from 'ng2-handsontable';

import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
