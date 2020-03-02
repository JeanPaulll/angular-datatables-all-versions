import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-datatables-all-versions';

import {DataTableRoutingModule} from './datatable-routing.module';
import {DataTableDemo1Component} from './demo1/data-table-demo1';
import {DataTableDemo2Component} from './demo2/data-table-demo2';
import {DataTableDemo3Component} from './demo3/data-table-demo3';
import {DataTableDemo4Component} from './demo4/data-table-demo4';
import {DataTableDemo5Component} from './demo5/data-table-demo5';
import {DataTableDemo6Component} from './demo6/data-table-demo6';
import {MAT_DATE_LOCALE} from '@angular/material/core';

// module
// demo components
// routing

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule.forRoot(),
    DataTableRoutingModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  declarations: [
    DataTableDemo1Component,
    DataTableDemo2Component,
    DataTableDemo3Component,
    DataTableDemo4Component,
    DataTableDemo5Component,
    DataTableDemo6Component
  ]
})
export class DataTableDemoModule {
}
