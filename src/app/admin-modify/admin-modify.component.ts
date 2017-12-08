import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Mapping } from './models/Mapping';
import { AdminFetchCurrentMappingsService } from './services/admin-fetch-current-mappings.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminUpdateMappingPopupComponent } from './admin-update-mapping-popup/admin-update-mapping-popup.component';

@Component({
  selector: 'app-admin-modify',
  templateUrl: './admin-modify.component.html',
  styleUrls: ['./admin-modify.component.css']
})
export class AdminModifyComponent implements OnInit, AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<Mapping>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private mappingsService: AdminFetchCurrentMappingsService,
    public dialog: MatDialog
  ) {
    this.displayedColumns = this.mappingsService.fetchMappingsHeaders();
    this.dataSource = new MatTableDataSource(this.mappingsService.fetchCurrentMappings());
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  handleRowClick(row: Mapping) {
    console.log(row);
    this.openPopup(row);
  }

  private handleMappingUpdate(updatedMapping: Mapping) {
    // this should make an update service call to update the mapping.
    // server should make an entitlements check before committing this change
  }

  private openPopup(row: Mapping) {
    const dialogRef = this.dialog.open(AdminUpdateMappingPopupComponent, {
      width: '500px',
      height: '550px',
      data: row,
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result: Mapping) => {
      this.handleMappingUpdate(result);
    });
  }

}
