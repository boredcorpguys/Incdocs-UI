import { Column, GridOption } from 'angular-slickgrid';

export interface MyGridOptions extends GridOption{
    grouping?: Group;
    groupings ?: Array<Group>;
}

export interface Group{
    getter:string;
    formatter : Function;
    aggregators: Array<any>;
    aggregateCollapsed:boolean;
    lazyTotalsCalculation:boolean;
} 