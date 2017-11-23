import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './router/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewRmComponent } from './new-rm/new-rm.component';

@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    HeaderComponent,
    HomeComponent,
    NewCompanyComponent,
    NewRmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
