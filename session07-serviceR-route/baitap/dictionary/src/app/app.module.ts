import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayPageComponent } from './dictionay-page/dictionay-page.component';
import { DictionarydetailComponent } from './dictionarydetail/dictionarydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponent,
    DictionarydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
