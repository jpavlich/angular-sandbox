import { SequentialHttpClientService } from './sequential-http-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SequentialHttpClientService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
