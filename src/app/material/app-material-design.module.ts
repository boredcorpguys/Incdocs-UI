import { NgModule } from '@angular/core';
//Angular Material related module imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule,MatIconModule],
  exports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule,MatIconModule],
})
export class AppMaterialDesignModule { }