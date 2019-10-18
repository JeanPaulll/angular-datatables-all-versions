export declare type FilterOperator = 'lt' | 'gt' | 'lte' | 'gte' | 'eq' | 'ne' | 'contains' | 'not_contains' | 'starts' | 'ends' | 'empty' | 'true' | 'false';

export interface DataTableTranslations {
  headerReload?: string;
  headerColumnSelector?: string;
  headerColumnSelectorAdded?: string;
  headerColumnSelectorRemoved?: string;
  indexColumn?: string;
  selectColumn?: string;
  selectRow?: string;
  selectAllRows?: string;
  expandColumn?: string;
  expandRow?: string;
  sortedAscending?: string;
  sortedDescending?: string;
  sortAscending?: string;
  sortDescending?: string;
  paginationLimit?: string;
  paginationText?: string;
  paginationTotalPages?: string;
  firstPage?: string;
  prevPage?: string;
  pageNumberLabel?: string;
  pageNumber?: string;
  pageNumberNofM?: string;
  nextPage?: string;
  lastPage?: string;
  loadingText?: string;
  loadedText?: string;
  addFilter?: string;
  searchField?: string;
  selectedValueRequired?: string;
  validDateRequired?: string;
  valueRequired?: string;
  numericValueRequired?: string;
  apply?: string;
  value?: string;
  date?: string;
  not?: string;
  filterOperators?: { [key in FilterOperator]: string }
}
