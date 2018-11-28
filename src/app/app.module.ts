import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Comp1} from './comp1/comp1.component';
import {Comp2} from './comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1,
    Comp2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
