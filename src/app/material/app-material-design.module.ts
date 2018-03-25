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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule, MatIconModule, MatExpansionModule,
    MatTooltipModule, MatSnackBarModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule, MatDialogModule,
     MatListModule, MatStepperModule, MatCheckboxModule, MatCardModule],
  exports: [MatButtonModule, BrowserAnimationsModule, MatInputModule, MatToolbarModule, MatIconModule, MatExpansionModule,
    MatTooltipModule, MatSnackBarModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule, MatDialogModule,
     MatListModule, MatStepperModule, MatCheckboxModule, MatCardModule],
})
export class AppMaterialDesignModule { }
