import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
import { Editors, Formatters, GridExtraUtils } from 'angular-slickgrid';
import { BankRmManagePortfolioDetailsService } from './services/bank-rm-manage-portfolio-details.service';
import { MatTabChangeEvent } from '@angular/material';
import { MyGridOptions } from '../grid/models/MyGridOptions';

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

  constructor(private dataService: BankRmManagePortfolioDetailsService) { }

  ngOnInit(): void {
    this.gridColumnDefinitions = this.dataService.fetchColumnDefinitions();

    this.gridOptionsWithCompanyGroup = {
      enableAutoResize: true,       // true by default
      enableCellNavigation: true,
      enableHeaderMenu: true,
      enableFiltering: true,
      // enableCheckboxSelector: true,  
      enableRowSelection:true,
      forceFitColumns:true,
      enableExport:true,
      enableColumnReorder:true,
      enableMouseHoverHighlightRow:true,
      // showTopPanel:true,
      autoTooltipOptions: {
        enableForCells: true,
        enableForHeaderCells: true,
        maxToolTipLength: 250
      },
      enableAutoTooltip: true,
      grouping: 
        {
          getter: "company",
          formatter :function (g) {
            return "<span style='margin-left:15px'></span> Company:  " + g.value + "  <span style='color:green' '>( assigned to " + g.count + " ARMs)</span>";
          },
          aggregators: [
            // new Slick.Data.Aggregators.Sum("arms")
          ],
          aggregateCollapsed: true,
          lazyTotalsCalculation: true
        }
      
    };

    this.gridOptionsWithARMGroup = {
      enableAutoResize: true,       // true by default
      enableCellNavigation: true,
      enableHeaderMenu: true,
      enableFiltering: true,
      grouping: 
        {
          getter: "arm",
          formatter :function (g) {
            return "<span style='margin-left:15px'></span> ARM:  " + g.value + "  <span style='color:green'>( mapped to " + g.count + " companies)</span>";
          },
          aggregators: [
            // new Slick.Data.Aggregators.Sum("arms")
          ],
          aggregateCollapsed: true,
          lazyTotalsCalculation: true
        }
      
    };

    // fill the dataset with your data
    // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset
    this.gridDataset = this.dataService.fetchDataset();
  }

  switchTab($event: MatTabChangeEvent): void{
    this.tab = $event.index;
  }


}

