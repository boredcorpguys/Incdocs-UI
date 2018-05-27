import { Component, OnInit } from '@angular/core';
import { Column, GridOption, OnEventArgs } from 'angular-slickgrid';
import { Editors, Formatters, GridExtraUtils } from 'angular-slickgrid';
import { BankRmManagePortfolioDetailsService } from './services/bank-rm-manage-portfolio-details.service';
import { MatTabChangeEvent } from '@angular/material';
import { MyGridOptions } from '../grid/models/MyGridOptions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteMappingConfirmationPopupComponent } from './sub-components/delete-mapping-confirmation-popup/delete-mapping-confirmation-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-rm-manage-portfolio',
  templateUrl: './bank-rm-manage-portfolio.component.html',
  styleUrls: ['./bank-rm-manage-portfolio.component.css']
})
export class BankRmManagePortfolioComponent implements OnInit {

  gridColumnDefinitions: Column[];
  gridOptionsWithCompanyGroup: MyGridOptions;
  gridOptionsWithARMGroup: MyGridOptions;
  gridDataset: any[];
  tab = 0;
  dataviewObj: any;
  groupByARMObj: any;
  groupByCompanyObj: any;
  currentGroupingByCompany: boolean = true;

  deleteMappingConfig: any;

  constructor(private dataService: BankRmManagePortfolioDetailsService, private dialog: MatDialog,
    private router:Router) { }

  ngOnInit(): void {


    this.gridColumnDefinitions = this.dataService.fetchColumnDefinitions();
    //grouping objects
    this.groupByARMObj = {
      getter: "arm",
      formatter: function (g) {
        return "<span style='margin-left:15px'></span> ARM:  " + g.value + "  <span style='color:green'>( mapped to " + g.count + " companies)</span>";
      },
      aggregators: [
        // new Slick.Data.Aggregators.Sum("arms")
      ],
      aggregateCollapsed: true,
      lazyTotalsCalculation: true
    };

    this.groupByCompanyObj = {
      getter: "company",
      formatter: function (g) {
        return "<span style='margin-left:15px'></span> Company:  " + g.value + "  <span style='color:green' '>( assigned to " + g.count + " ARMs)</span>";
      },
      aggregators: [
        // new Slick.Data.Aggregators.Sum("arms")
      ],
      aggregateCollapsed: true,
      lazyTotalsCalculation: true
    };

    //configs
    this.gridOptionsWithCompanyGroup = {
      enableAutoResize: true,       // true by default
      enableCellNavigation: false,
      enableHeaderMenu: true,
      enableFiltering: true,
      // enableCheckboxSelector: true,  
      enableRowSelection: false,
      forceFitColumns: true,
      enableExport: true,
      enableColumnReorder: true,
      enableMouseHoverHighlightRow: true,
      // showTopPanel:true,
      autoTooltipOptions: {
        enableForCells: true,
        enableForHeaderCells: true,
        maxToolTipLength: 250
      },
      enableAutoTooltip: true,
      grouping: this.groupByCompanyObj
    };

    // fill the dataset with your data
    // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset
    this.gridDataset = this.dataService.fetchDataset();
  }

  onDataViewReady(dv: any): void {
    this.dataviewObj = dv;
  }

  toggleGroupings(): void {
    if (this.currentGroupingByCompany) {
      this.dataviewObj.setGrouping([this.groupByARMObj]);
    } else {
      this.dataviewObj.setGrouping([this.groupByCompanyObj]);
    }
    this.currentGroupingByCompany = !this.currentGroupingByCompany;
  }

  requestNewCompany() {
    //route programmatically to the other screen. 
    this.router.navigateByUrl('bank/rm/request-new-company');
  }

  addNewMapping() {

  }


}

