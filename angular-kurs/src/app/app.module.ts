import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Clicker1Component } from './clicker1/clicker1.component';
import { Clicker2Component } from './clicker2/clicker2.component';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    Clicker1Component,
    Clicker2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  //providers: [ClickService] //imporuje servis we wszystkich modulach
  bootstrap: [AppComponent]
})
export class AppModule { }