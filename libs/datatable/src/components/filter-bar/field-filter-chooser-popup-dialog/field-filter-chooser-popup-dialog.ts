import { Component, Inject, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { POPUP_DIALOG_CLOSE } from 'ngx-popup-dialog';

import { DataTableTranslations } from '../../../types/data-table-translations.type';
import { FilterableField } from '../../../types/filterable-field.type';
import { ListKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';
import { MatListItem } from '@angular/material/list';


interface DialogData {
  fields: FilterableField[];
  labels: DataTableTranslations
}

// @dynamic
@Component({
  selector: 'app-field-filter-chooser-popup-dialog',
  templateUrl: './field-filter-chooser-popup-dialog.html',
  styleUrls: ['./field-filter-chooser-popup-dialog.css']
})
export class FieldFilterChooserPopupDialog implements OnInit {
  @ViewChildren('listItem') listItem: QueryList<any>
  keyboardEventsManager: ListKeyManager<any>;
  activeItem: any;

  fieldSearchQuery = '';
  filteredFields: FilterableField[];
  constructor(
    @Inject(POPUP_DIALOG_CLOSE) private _dialogCloser: (dialogResult?: any) => void,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.filteredFields = data.fields;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.keyboardEventsManager = new ListKeyManager(this.listItem);
  }

  onFieldSearch(searchQuery: string) {
    this.filteredFields = this.data.fields.filter(c => c.header.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
  }

  fieldSelected(field: FilterableField) {
    this._dialogCloser(field);
  }

  handleKeyDown(event: KeyboardEvent) {
    event.stopImmediatePropagation();
    if (this.keyboardEventsManager) {
      if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
        // passing the event to key manager so we get a change fired
        this.keyboardEventsManager.onKeydown(event);
        let activeItem = this.keyboardEventsManager.activeItem as MatListItem;
        if (activeItem == this.activeItem) {
          event.keyCode === DOWN_ARROW ? this.keyboardEventsManager.setFirstItemActive() : this.keyboardEventsManager.setLastItemActive();
          activeItem = this.keyboardEventsManager.activeItem as MatListItem;
        }
        this.activeItem = activeItem;
        (this.keyboardEventsManager.activeItem as MatListItem)._getHostElement().scrollIntoView();
        return false;
      } else if (event.keyCode === ENTER) {
        (this.keyboardEventsManager.activeItem as MatListItem)._getHostElement().click();
        return false;
      }
    }
  }
}
