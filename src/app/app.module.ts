import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListModule } from './components/contact-list/contact-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMaterialModule } from './mat-material-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContactListModule,
    MatMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
