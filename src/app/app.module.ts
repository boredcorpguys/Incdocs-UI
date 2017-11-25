import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//application specific imports
import { AppComponent } from './app.component';
import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './router/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewRmComponent } from './new-rm/new-rm.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';

//angular material design modules
import {AppMaterialDesignModule} from './material/app-material-design.module';


@NgModule({
  declarations: [
    AppComponent,
    NopageComponent,
    HeaderComponent,
    HomeComponent,
    NewCompanyComponent,
    NewRmComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppMaterialDesignModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 