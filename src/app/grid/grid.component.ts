import { Component, OnInit, Input , Output} from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
import { Editors, Formatters, GridExtraUtils } from 'angular-slickgrid';
import { MyGridOptions } from './models/MyGridOptions';
import { EventEmitter } from '@angular/core';

//3rd party libs

// import 3rd party vendor libs
import 'slickgrid/lib/jquery-ui-1.11.3';
import 'slickgrid/lib/jquery.event.drag-2.3.0';
import 'slickgrid/slick.core';
import 'slickgrid/slick.dataview';
import 'slickgrid/slick.grid';
import 'slickgrid/slick.dataview';
import 'slickgrid/controls/slick.columnpicker';
import 'slickgrid/controls/slick.gridmenu';
import 'slickgrid/controls/slick.pager';
import 'slickgrid/plugins/slick.autotooltips';
import 'slickgrid/plugins/slick.cellcopymanager';
import 'slickgrid/plugins/slick.cellexternalcopymanager';
import 'slickgrid/plugins/slick.cellrangedecorator';
import 'slickgrid/plugins/slick.cellrangeselector';
import 'slickgrid/plugins/slick.cellselectionmodel';
import 'slickgrid/plugins/slick.checkboxselectcolumn';
import 'slickgrid/plugins/slick.headerbuttons';
import 'slickgrid/plugins/slick.headermenu';
import 'slickgrid/plugins/slick.rowmovemanager';
import 'slickgrid/plugins/slick.rowselectionmodel';
import 'slickgrid/slick.groupitemmetadataprovider.js';
@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  static gridCount = 0;
  constructor() {
    this.count = ++GridComponent.gridCount;
  }

  
  @Input()
  gridColumnDefinitions: Column[];
  @Input()
  gridOptions: MyGridOptions;
  @Input()
  gridDataset: any[];

  @Output() onDataViewReady = new EventEmitter<any>();

  @Input()
  gridID: any;

  dataview: any;
  grid: any;

  count;
  getGridID():string{
    return 'grid'+ this.count;
  }

  ngOnInit(): void {
    console.log('init called');
  }

  gridReady(grid) {
    this.grid = grid;
    grid.onCellChange.subscribe((e, args) => {
      console.log('onCellChange', args);
      // for example, CRUD with WebAPI calls
      grid.render();
    });
    grid.onClick.subscribe((e, args) => {
      const column = GridExtraUtils.getColumnDefinitionAndData(args);

      if (column.columnDef.id === 'delete') {
        if (confirm('Are you sure?')) {
          this.dataview.deleteItem(column.dataContext.id);
          this.dataview.refresh();
        }
      }
      grid.render();
    });

  }
  dataviewReady(dataview) {
    this.dataview = dataview;
    this.setGroupings();
    this.onDataViewReady.emit(this.dataview);
  }

  setGroupings(){
    const group = this.gridOptions.grouping;
    if(group){
      this.dataview.setGrouping(group);
    }
    else if (this.gridOptions.groupings){
      this.dataview.setGrouping(this.gridOptions.groupings);
    }
    
  }

}
