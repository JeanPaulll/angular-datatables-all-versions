import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {POPUP_DIALOG_CLOSE} from 'ngx-popup-dialog';

import {DataTableTranslations} from '../../../types/data-table-translations.type';
import {Filter} from '../../../types/filter.type';

interface DialogData {
  fieldFilter: Filter;
  labels: DataTableTranslations;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// @dynamic
@Component({
  selector: 'app-field-filter-popup-dialog',
  templateUrl: './field-filter-popup-dialog.html',
  styleUrls: ['./field-filter-popup-dialog.css']
})
export class FieldFilterPopupDialog implements OnInit {
  private static numericOperators = ['lt', 'gt', 'lte', 'gte', 'eq', 'ne', 'empty']
  private static textualOperators = ['contains', 'not_contains', 'starts', 'ends', 'eq', 'ne', 'empty']
  private static enumOperators = ['eq', 'ne', 'empty']
  private static boolOperators = ['eq']
  private static ALL_FILTER_OPERATORS = {
    "number": FieldFilterPopupDialog.numericOperators,
    "date": FieldFilterPopupDialog.numericOperators,
    "text": FieldFilterPopupDialog.textualOperators,
    "enum": FieldFilterPopupDialog.enumOperators,
    "bool": FieldFilterPopupDialog.boolOperators
  }
  MUST_SELECT_VALUE_VALIDATION = this.data.labels.selectedValueRequired;
  dataType;
  filterOperators;
  filterValue;
  selectedOperator;
  valuesList = [];
  isAtleastOneValueSelected = true;

  matcher = new MyErrorStateMatcher();

  constructor(
    @Inject(POPUP_DIALOG_CLOSE) private _dialogCloser: (dialogResult?: any) => void,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.dataType = this.data.fieldFilter.field.dataType;
    this.filterOperators = FieldFilterPopupDialog.ALL_FILTER_OPERATORS[this.dataType]
    if (!this.filterOperators) throw `Data type '${this.dataType}' for field '${this.data.fieldFilter.field.header}' is not recognized`
    this.selectedOperator = this.data.fieldFilter.operator || this.filterOperators[0];
    this.filterValue = this.dataType == 'date' ? this.toDate(this.data.fieldFilter.value) : this.data.fieldFilter.value;
    if (this.dataType == 'enum') {
      if (this.data.fieldFilter.value) this.valuesList = this.valuesList.concat(this.data.fieldFilter.value).filter(v => v != null);
      this.isAtleastOneValueSelected = this.valuesList.length != 0;
    }
    if (this.dataType == 'bool' && this.filterValue == null) {
      this.filterValue = true;
    }
  }

  ngOnInit() {
  }

  onFilterApply() {
    let value = this.filterValue;
    if (this.selectedOperator === 'empty') {
      value = null;
    } else {
      if (this.dataType == 'date') value = this.formatDate(value)
      if (this.dataType == 'enum') value = this.valuesList;
    }
    this._dialogCloser({field: this.data.fieldFilter.field, operator: this.selectedOperator, value: value});
  }

  valueCheckChange(value, checked: boolean) {
    if (checked) {
      this.valuesList.push(value)
    } else {
      let index = this.valuesList.indexOf(value);
      if (index != -1) this.valuesList.splice(index, 1);
    }
    this.isAtleastOneValueSelected = this.valuesList.length != 0;
  }

  isValueChecked(value) {
    return this.valuesList.indexOf(value) != -1;
  }

  getErrorMessage(field) {
    if (field.hasError('matDatepickerParse')) return this.data.labels.validDateRequired;
    else if (field.hasError('required')) return this.data.labels.valueRequired;
    else if (field.hasError('pattern')) return this.data.labels.numericValueRequired;
    else return '';
  }

  getPossibleOptionValue(option) {
    return typeof option === 'string' ? option : option.value
  }

  getPossibleOptionDisplayText(option) {
    return typeof option === 'string' ? option : option.displayText
  }

  private formatDate(d: Date) {
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
  }

  private toDate(s: string) {
    if (!s) return new Date();
    let split = s.split('/');
    return new Date(Number(split[2]), Number(split[1]) - 1, Number(split[0]));
  }
}
