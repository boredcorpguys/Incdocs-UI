import { NgModule } from '@angular/core';
//Angular Material related module imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule,MatIconModule,MatTooltipModule],
  exports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule,MatIconModule,MatTooltipModule],
})
export class AppMaterialDesignModule { }