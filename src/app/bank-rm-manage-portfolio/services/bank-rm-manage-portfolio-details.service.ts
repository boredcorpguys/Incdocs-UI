import { Injectable } from '@angular/core';
import { Column, GridOption , Formatters, OnEventArgs} from 'angular-slickgrid';

@Injectable()
export class BankRmManagePortfolioDetailsService {
  data: any;
  constructor() { }

  fetchColumnDefinitions(): Column[] {
    let cols = [
      {id:'company', name: 'Company', field: 'company', sortable: true, filterable: true},
      {id:'arm', name: 'ARM', field: 'arm', sortable: true, filterable: true},
      {
        id: 'delete', field: 'id', 
        formatter: Formatters.deleteIcon,
        width:50,
        onCellClick: (args: OnEventArgs) => {
          // console.log(args);
          args.dataView.deleteItem(args.dataContext.id);
          //now make a backend call to actually delete the mapping
          this.deleteMapping(args.dataContext);
          args.grid.render();
        }
     }
    ];
    return cols;

    
  }

  deleteMapping(row : any): void {
    //delete row based on id in it
    console.log(row);

  }

  fetchDataset(): any[] {
    let gridDataset = [];
    // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset
    // for demo purpose, let's mock a 1000 lines of data
    const arms= ['Rahul Mane', 'Prasad VSV', 'Kaustubh k', 'Alex', 'Bradley', 'Roopchand', 'Raul Dsouza', 'Madhumita', 'Rahul Kanu', 'Ankita Mishra'];
    const companies = ['Reliance Industries', 'Tata group of companies', 'PNB bank', 'HDFC', 'Amazon', 'VMWare', 'Oracle'];
    let count =0;
    for(let i=0; i<companies.length; ++i){
      const rmCount = Math.floor(Math.random() * arms.length);
      for(let j=0;j<rmCount; ++j){
        gridDataset[count++] = {
          id: count,
          company: companies[Math.floor(Math.random() * companies.length)],
          arm: arms[Math.floor(Math.random()* arms.length)]
        }
      }
    }
    this.data = gridDataset;
    return gridDataset;

  }

}
