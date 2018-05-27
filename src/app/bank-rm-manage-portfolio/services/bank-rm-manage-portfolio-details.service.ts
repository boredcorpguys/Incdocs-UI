import { Injectable } from '@angular/core';
import { Column, GridOption, Formatters, OnEventArgs } from 'angular-slickgrid';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteMappingConfirmationPopupComponent } from '../sub-components/delete-mapping-confirmation-popup/delete-mapping-confirmation-popup.component';

@Injectable()
export class BankRmManagePortfolioDetailsService {
  data: any;
  constructor(private dialog: MatDialog) { }

  fetchColumnDefinitions(): Column[] {
    var service = this;
    let cols = [
      { id: 'company', name: 'Company', field: 'company', sortable: true, filterable: true },
      { id: 'arm', name: 'ARM', field: 'arm', sortable: true, filterable: true },
      {
        id: 'delete', field: 'id', name: "Delete Mapping",
        formatter: Formatters.deleteIcon,
        width: 50,
        onCellClick: (data: any) => {
          console.log('cell clicked');
          let confirmation: boolean = service.takeConfirmation(data);
        }
      }
    ];
    return cols;


  }

  fetchDataset(): any[] {
    let gridDataset = [];
    // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset
    // for demo purpose, let's mock a 1000 lines of data
    const arms = ['Rahul Mane', 'Prasad VSV', 'Kaustubh k', 'Alex', 'Bradley', 'Roopchand', 'Raul Dsouza', 'Madhumita', 'Rahul Kanu', 'Ankita Mishra'];
    const companies = ['Reliance Industries', 'Tata group of companies', 'PNB bank', 'HDFC', 'Amazon', 'VMWare', 'Oracle'];
    let count = 0;
    for (let i = 0; i < companies.length; ++i) {
      const rmCount = Math.floor(Math.random() * arms.length);
      for (let j = 0; j < rmCount; ++j) {
        gridDataset[count++] = {
          id: count,
          company: companies[Math.floor(Math.random() * companies.length)],
          arm: arms[Math.floor(Math.random() * arms.length)]
        }
      }
    }
    this.data = gridDataset;
    return gridDataset;

  }


  takeConfirmation(data: any): boolean {
    let dataRow: DataRow = data.dataContext;
    let dialogRef = this.dialog.open(DeleteMappingConfirmationPopupComponent, {
      width: '250px',
      data: dataRow
    });
    let confirmed: boolean;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMapping(data);
      }
    });
    return confirmed;
  }

  deleteMapping(args: OnEventArgs) {
    // console.log(args);
    // let confirmed: boolean = this.takeConfirmation(args.dataContext);
    //now make a backend call to actually delete the mapping
    this.sendBackedCallToDeleteMapping(args.dataContext);
    //make a call to backend to actually delete the mapping and on success, delete it from dataview
    args.dataView.deleteItem(args.dataContext.id);
    args.grid.render();
  }

  sendBackedCallToDeleteMapping(data: DataRow): boolean {
    // make the actual backend call
    return true;
  }

}

export class DataRow {
  id: number;
  company: string;
  arm: string;

  constructor(_id: number, _company: string, _arm: string) {
    this.id = _id;
    this.company = _company;
    this.arm = _arm;
  }
}
