// modules
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// utils
import { HideDirective } from './utils/hide';
import { MinPipe } from './utils/min';
import { PixelConverter } from './utils/px';
import { NgxPopupDialogModule, PopupDialogService } from 'ngx-popup-dialog';
// types & tools
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableResource } from './tools/data-table-resource';
import { DataTableParams } from './types/data-table-params.type';
// components & directives
import { DataTableComponent } from './components/table/table.component';
import { DataTableRowComponent } from './components/row/row.component';
import { DataTableColumnDirective } from './directives/column/column.directive';
import { DataTableHeaderComponent } from './components/header/header.component';
import { DataTablePaginationComponent } from './components/pagination/pagination.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FieldFilterChooserPopupDialog } from './components/filter-bar/field-filter-chooser-popup-dialog/field-filter-chooser-popup-dialog';
import { FieldFilterPopupDialog } from './components/filter-bar/field-filter-popup-dialog/field-filter-popup-dialog';

export {
  DataTableComponent,
  DataTableColumnDirective,
  DataTableRowComponent,
  DataTablePaginationComponent,
  DataTableHeaderComponent,
  DataTableResource,
  DataTableParams, DataTableTranslations,
  CellCallback, RowCallback
};

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableColumnDirective,
    DataTableRowComponent,
    DataTablePaginationComponent,
    DataTableHeaderComponent,
    PixelConverter,
    HideDirective,
    MinPipe,
    FilterBarComponent,
    FieldFilterChooserPopupDialog,
    FieldFilterPopupDialog
  ],
  entryComponents: [
    FieldFilterChooserPopupDialog,
    FieldFilterPopupDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    {
      ngModule: NgxPopupDialogModule,
      providers: [PopupDialogService]
    },
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [DataTableComponent, DataTableColumnDirective]
})

export class DataTableModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataTableModule,
      providers: []
    };
  }
}


