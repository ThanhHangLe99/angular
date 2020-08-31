import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    MenuComponent,
    // DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
