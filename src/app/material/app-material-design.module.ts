import { NgModule } from '@angular/core';
// Angular Material related module imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule, MatIconModule,
    MatTooltipModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule, MatDialogModule, MatListModule],
  exports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule, MatIconModule,
    MatTooltipModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule, MatDialogModule, MatListModule],
})
export class AppMaterialDesignModule { }
