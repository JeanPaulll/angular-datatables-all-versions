import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { PopupDialogService } from 'ngx-popup-dialog';

import { Filter } from '../../types/filter.type';
import { FilterableField } from '../../types/filterable-field.type';
import { DataTableComponent } from '../table/table.component';
import { FieldFilterChooserPopupDialog } from './field-filter-chooser-popup-dialog/field-filter-chooser-popup-dialog';
import { FieldFilterPopupDialog } from './field-filter-popup-dialog/field-filter-popup-dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupDialog } from 'ngx-popup-dialog/lib/popup-dialog/popup-dialog';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  fieldChooserDialogRef: MatDialogRef<PopupDialog>;
  filters: Filter[] = [];
  fields: FilterableField[];

  constructor(
    @Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent,
    public popupDialogService: PopupDialogService) {
    this.fields = this.dataTable.filterableFields;
    if (dataTable.filters) {
      this.filters = dataTable.filters
    }
  }

  ngOnInit() {
  }

  inputFocused(event: Event) {
    (event.currentTarget as HTMLElement).blur();
    this.openFieldChooserDialog(event.currentTarget);
  }

  chipClicked(event: Event, filter: Filter) {
    const dialogRef = this.openFieldFilterDialog(event.currentTarget, filter);
    dialogRef.afterClosed().subscribe((result: Filter) => {
      if (!result) return;
      this.dataTable.filterUpdated.emit({ old: this.convertFilterToEmittedFilter(filter), new: this.convertFilterToEmittedFilter(result) });
      let index = this.filters.indexOf(filter)
      this.filters[index] = result;
      this.dataTable.filterChanged.emit(this.filters.map(c => this.convertFilterToEmittedFilter(c)));
      filter = result;
    });
  }

  openFieldChooserDialog(triggeredElement) {
    if (this.fieldChooserDialogRef) return;
    this.fieldChooserDialogRef = this.popupDialogService.open(
      FieldFilterChooserPopupDialog,
      triggeredElement,
      {
        coverTriggeringElement: true,
        data: {
          fields: this.fields,
          labels: this.dataTable.labels
        }
      });

    this.fieldChooserDialogRef.afterClosed().subscribe(result => {
      this.fieldChooserDialogRef = null;
      if (!result) return;
      const dialogRef = this.openFieldFilterDialog(triggeredElement, { field: result });
      dialogRef.afterClosed().subscribe((result: Filter) => {
        if (!result) return;
        this.filters.push(result);
        this.dataTable.filterAdded.emit(this.convertFilterToEmittedFilter(result));
        this.dataTable.filterChanged.emit(this.filters.map(c => this.convertFilterToEmittedFilter(c)));
      });
    });
  }

  openFieldFilterDialog(triggeredElement, filter?: Filter) {
    const dialogRef = this.popupDialogService.open(
      FieldFilterPopupDialog,
      triggeredElement,
      {
        suppressCloseOnClickSelectors: ['.cdk-overlay-container'],
        coverTriggeringElement: true,
        data: {
          fieldFilter: filter,
          labels: this.dataTable.labels
        }
      });
    return dialogRef;
  }

  removeFilter(filter: Filter) {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
      this.dataTable.filterRemoved.emit(this.convertFilterToEmittedFilter(filter));
      this.dataTable.filterChanged.emit(this.filters.map(c => this.convertFilterToEmittedFilter(c)));
    }
  }

  formatValue(filter: Filter) {
    let value = filter.value;
    if (filter.operator == 'empty') return '';

    if (filter.field.dataType == "enum") {
      value = (filter.value as any[]).map(v => typeof v === "string" ? v : v.displayText);
    }

    if (Array.isArray(value)) {
      value = value.join(', ');
    }

    return value;
  }

  formatChipDisplayText(filter: Filter) {
    if (filter.field.dataType == "bool") {
      return filter.value == false ? `${this.dataTable.labels.not} ${filter.field.header}` : filter.field.header;
    } else {
      return `${filter.field.header} ${this.dataTable.labels.filterOperators[filter.operator]} ${this.formatValue(filter)}`
    }
  }

  private convertFilterToEmittedFilter(filter: Filter) {
    // clone the filter and extract values from enum possible options
    let clonedFilter = JSON.parse(JSON.stringify(filter)) as Filter;
    if (clonedFilter.operator == "empty") return clonedFilter;

    if (clonedFilter.field.dataType == "enum") {
      let valuesList = clonedFilter.value;
      for (let i = 0; i < valuesList.length; i++) {
        const value = valuesList[i];
        valuesList[i] = typeof value === "string" ? value : value.value
      }
    }
    return clonedFilter;
  }
}
