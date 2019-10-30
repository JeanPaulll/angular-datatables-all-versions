import {FilterableField} from "./filterable-field.type";

export interface Filter {
  field: FilterableField;
  operator?: string,
  value?: any;
}
